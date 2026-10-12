// Feature code shares player state and helpers from script.js.
const lyricsContainer = document.getElementById('lyricsContainer');
const lyricsToggleBtn = document.getElementById('lyricsToggleBtn');
let activeLyricIndex = -1;
let autoScrollPausedUntil = 0; // Pause lyric auto-scroll briefly after the user scrolls manually
let showLyrics = true;
const LYRIC_ANCHOR = 0.5; // The active lyric sits this far down the lyrics box (0 = top, 1 = bottom)

function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    activeLyricIndex = -1;
    autoScrollPausedUntil = 0; // A new song always follows the lyrics, even if the last one was scrolled by hand

    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = '<p class="lyrics-empty">Lyrics are not available for this song.</p>';
    } else {
        lyrics.forEach(line => {
            const span = document.createElement('span');
            span.textContent = line.text;
            span.setAttribute('data-time', line.time);
            span.classList.add('lyric-line');
            if (line.text === '♪') span.classList.add('instrumental');
            // Click a lyric to jump to that part of the song
            span.addEventListener('click', () => {
                audioPlayer.currentTime = line.time;
                autoScrollPausedUntil = 0;
                if (!isPlaying) playTrack();
            });
            lyricsContainer.appendChild(span);
        });
    }
    // Nothing is sung yet: every line is still to come
    setLyricStates(-1);

    // New song: start at the very top of its lyrics
    scrollLyricsToTop();
}

function scrollLyricsToTop() {
    lyricsContainer.scrollTo({ top: 0, behavior: 'instant' });
    lyricsContainer.classList.remove('scrolled');
}

function updateLyrics(currentTime) {
    const lyrics = songs[currentSongIndex] && songs[currentSongIndex].lyrics;
    if (!lyrics || lyrics.length === 0) return;

    // Last line whose timestamp has been reached (lyrics are sorted by time)
    let index = -1;
    for (let i = 0; i < lyrics.length; i++) {
        if (lyrics[i].time <= currentTime) index = i;
        else break;
    }
    if (index === activeLyricIndex) return;
    activeLyricIndex = index;

    setLyricStates(index);
    scrollToActiveLyric();
}

// Sung lines above the active one, upcoming lines below; the distance from it drives the revolving tilt in CSS
function setLyricStates(index) {
    const lines = lyricsContainer.querySelectorAll('.lyric-line');
    lines.forEach((line, i) => {
        line.classList.toggle('highlight', i === index);
        line.classList.toggle('past', i < index);
        line.classList.toggle('upcoming', i > index);
        const d = Math.max(-4, Math.min(4, i - index));
        line.style.setProperty('--d', d);
        line.style.setProperty('--dist', Math.abs(d));
    });
    // Before the first line a placeholder note holds the active spot
    lyricsContainer.classList.toggle('waiting', index === -1 && lines.length > 0);
}

// Keep the active lyric in the middle of the lyrics box, with sung lines above it and upcoming ones below.
// Before the first line is sung (or after rewinding to the start) the lyrics sit at the very top.
function scrollToActiveLyric(force = false) {
    if (!force && Date.now() < autoScrollPausedUntil) return;
    const line = lyricsContainer.querySelectorAll('.lyric-line')[activeLyricIndex];
    if (!line) {
        scrollLyricsToTop(); // Song restarted (repeat, previous, rewind): jump straight back like a new song
        return;
    }
    const top = line.offsetTop + line.offsetHeight / 2 - lyricsContainer.clientHeight * LYRIC_ANCHOR;
    lyricsContainer.scrollTo({ top: Math.max(0, top), behavior: force ? 'instant' : 'smooth' });
}

// Room above the first line and under the last one so any line can reach the active-lyric position
function sizeLyricsPadding() {
    if (!isPlayerPageActive() || !showLyrics) return;
    // Measure the panel around the lyrics box, not the box itself: a box can't be shorter than its own
    // padding, so measuring it kept an old, too-big padding and pushed the lyrics behind the controls on phones
    const panel = lyricsContainer.parentElement;
    const panelStyle = getComputedStyle(panel);
    const height = panel.clientHeight - parseFloat(panelStyle.paddingTop) - parseFloat(panelStyle.paddingBottom);
    const halfLine = 28; // Roughly half a lyric line, so a single line looks centred
    lyricsContainer.style.paddingTop = `${Math.max(0, height * LYRIC_ANCHOR - halfLine)}px`;
    lyricsContainer.style.paddingBottom = `${Math.max(0, height * (1 - LYRIC_ANCHOR) - halfLine)}px`;
}

// Fade the top edge only once earlier lines have scrolled under it, so the first line is never dimmed
lyricsContainer.addEventListener('scroll', () => {
    lyricsContainer.classList.toggle('scrolled', lyricsContainer.scrollTop > 4);
}, { passive: true });

window.addEventListener('resize', () => {
    sizeLyricsPadding();
    scrollToActiveLyric(true);
});

['wheel', 'touchmove'].forEach(evt => {
    lyricsContainer.addEventListener(evt, () => {
        autoScrollPausedUntil = Date.now() + 3000;
    }, { passive: true });
});

// --- Lyrics on/off ---
function applyLyricsVisibility() {
    playerPage.classList.toggle('lyrics-off', !showLyrics);
    lyricsToggleBtn.setAttribute('aria-pressed', String(showLyrics));
    lyricsToggleBtn.title = showLyrics ? 'Hide lyrics (L)' : 'Show lyrics (L)';
    if (showLyrics) {
        sizeLyricsPadding();
        scrollToActiveLyric(true);
    }
}

let lyricsTransitionRunning = false;

async function toggleLyrics() {
    if (lyricsTransitionRunning) return;
    lyricsTransitionRunning = true;
    showLyrics = !showLyrics;
    saveSetting('showLyrics', showLyrics);
    try {
        if (reducedMotion.matches || !isPlayerPageActive()) {
            applyLyricsVisibility();
            return;
        }
        lyricsToggleBtn.querySelector('i').animate([
            { transform: 'scale(1) rotate(0deg)' },
            { transform: `scale(0.75) rotate(${showLyrics ? -18 : 18}deg)`, offset: 0.4 },
            { transform: 'scale(1) rotate(0deg)' }
        ], { duration: 320, easing: 'ease-out' });

        if (document.startViewTransition) {
            await document.startViewTransition(applyLyricsVisibility).finished;
            return;
        }

        // Fade out before removing the panel, then animate the responsive layout change.
        const panel = lyricsContainer.parentElement;
        if (!showLyrics) {
            await panel.animate([
                { opacity: 1, transform: 'translateY(0)' },
                { opacity: 0, transform: 'translateY(18px)' }
            ], { duration: 160, easing: 'ease-in', fill: 'forwards' }).finished;
        }
        const parts = [artFrame, trackMeta, document.querySelector('.player-controls')];
        const previousRects = parts.map(part => part.getBoundingClientRect());
        panel.getAnimations().forEach(animation => animation.cancel());
        applyLyricsVisibility();
        const animations = parts.map((part, index) => {
            const before = previousRects[index];
            const after = part.getBoundingClientRect();
            return part.animate([
                { transform: `translate(${before.left - after.left}px, ${before.top - after.top}px) scale(${before.width / after.width}, ${before.height / after.height})`, transformOrigin: 'top left' },
                { transform: 'none', transformOrigin: 'top left' }
            ], { duration: 450, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }).finished;
        });
        if (showLyrics) {
            animations.push(panel.animate([
                { opacity: 0, transform: 'translateY(22px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], { duration: 350, delay: 90, easing: 'ease-out', fill: 'backwards' }).finished);
        }
        await Promise.all(animations);
    } catch {
        applyLyricsVisibility();
    } finally {
        lyricsTransitionRunning = false;
    }
}

lyricsToggleBtn.addEventListener('click', toggleLyrics);


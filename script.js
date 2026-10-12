// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');
const songCountElement = document.getElementById('songCount');
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const homeTopbar = document.querySelector('.topbar');
const trackHead = document.querySelector('.track-head');
const playlistCover = document.getElementById('playlistCover');
const playAllBtn = document.getElementById('playAllBtn');
const shufflePlayBtn = document.getElementById('shufflePlayBtn');
const toastElement = document.getElementById('toast');
const homeGlow = document.getElementById('homeGlow');
const listTitle = document.getElementById('listTitle');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundContainer = document.querySelector('.background-container');
const artBackground = document.getElementById('artBackground');
const artImage = artBackground.querySelector('.art-image');

// Elements for the Song Detail Page (not used when clicking a song, but still available)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const playerTrackAlbum = document.getElementById('playerTrackAlbum');
const artFrame = document.querySelector('.art-frame');
const trackMeta = document.querySelector('.track-meta');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const muteBtn = document.getElementById('muteBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const speedBtn = document.getElementById('speedBtn');
const speedMenu = document.getElementById('speedMenu');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

// Now-playing bar (shown outside the player page)
const miniPlayer = document.getElementById('miniPlayer');
const miniInfo = document.getElementById('miniInfo');
const miniArt = document.getElementById('miniArt');
const miniTitle = document.getElementById('miniTitle');
const miniArtist = document.getElementById('miniArtist');
const miniProgressBar = document.getElementById('miniProgressBar');
const miniPrevBtn = document.getElementById('miniPrevBtn');
const miniPlayPauseBtn = document.getElementById('miniPlayPauseBtn');
const miniNextBtn = document.getElementById('miniNextBtn');
const miniShuffleBtn = document.getElementById('miniShuffleBtn');
const miniRepeatBtn = document.getElementById('miniRepeatBtn');
const miniSeekBar = document.getElementById('miniSeekBar');
const miniCurrentTime = document.getElementById('miniCurrentTime');
const miniDuration = document.getElementById('miniDuration');
const miniMuteBtn = document.getElementById('miniMuteBtn');
const miniVolumeSlider = document.getElementById('miniVolumeSlider');
const miniExpandBtn = document.getElementById('miniExpandBtn');

// Controls that exist on both the player page and the now-playing bar
const seekBars = [playerProgressBarContainer, miniSeekBar].map(bar => ({
    bar,
    fill: bar.querySelector('.seek-fill'),
    thumb: bar.querySelector('.seek-thumb'),
    tooltip: bar.querySelector('.seek-tooltip')
}));
const playPauseButtons = [playerPlayPauseBtn, miniPlayPauseBtn];
const shuffleButtons = [playerShuffleBtn, miniShuffleBtn];
const repeatButtons = [playerRepeatBtn, miniRepeatBtn];
const muteButtons = [muteBtn, miniMuteBtn];
const volumeSliders = [playerVolumeSlider, miniVolumeSlider];
const currentTimeLabels = [playerCurrentTime, miniCurrentTime];
const durationLabels = [playerTotalDuration, miniDuration];

// App State
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all
let hasStarted = false; // Becomes true after the first play, used to show the now-playing bar
let isSeeking = false;
let playbackRate = 1;
let homeScrollY = 0; // Restored when coming back to the playlist
let lastShownSecond = -1; // Time labels only need to change once a second
const songDurations = {};

const SEEK_STEP = 5; // Seconds to skip with arrow keys
const REPEAT_LABELS = ['Repeat: off', 'Repeat: one', 'Repeat: all'];

// Touch screens have no hover, so skip the background preview there
const canHover = window.matchMedia('(hover: hover)').matches;

// --- Saved settings (localStorage can be unavailable, so always guard it) ---
function loadSetting(key, fallback) {
    try {
        const value = localStorage.getItem('musicplayer.' + key);
        return value === null ? fallback : JSON.parse(value);
    } catch (e) {
        return fallback;
    }
}

function saveSetting(key, value) {
    try {
        localStorage.setItem('musicplayer.' + key, JSON.stringify(value));
    } catch (e) { /* ignore */ }
}

// --- Helpers ---
function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) seconds = 0;
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// e.g. "52 min" or "1 hr 51 min"
function formatTotalDuration(seconds) {
    const minutes = Math.round(seconds / 60);
    if (minutes < 60) return `${minutes} min`;
    return `${Math.floor(minutes / 60)} hr ${minutes % 60} min`;
}

// A smaller copy of a cover for small spots (list rows, now-playing bar, reading its colors).
// The image hosts serve other sizes from the same URL pattern; decoding full-size covers for
// 44px thumbnails made the playlist stutter while new rows scrolled into view.
function artAtSize(url, size) {
    if (url.includes('mzstatic.com')) return url.replace(/\/\d+x\d+bb\.jpg$/, `/${size}x${size}bb.jpg`);
    if (url.includes('dzcdn.net')) return url.replace(/\/\d+x\d+-000000-/, `/${size}x${size}-000000-`);
    if (url.includes('i.scdn.co')) return url.replace('ab67616d0000b273', 'ab67616d00001e02'); // Spotify only has 64, 300 and 640 px
    return url;
}

// Short entrance animation for something that just changed, e.g. the cover when the song changes.
// Skipped when the system asks for reduced motion (CSS animations handle that in style.css).
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function animateIn(el, from, delay = 0) {
    if (!el || !el.animate || reducedMotion.matches) return;
    el.animate([from, { opacity: 1, transform: 'none' }], {
        duration: 450,
        delay,
        easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', // Same curve as --ease in style.css
        fill: 'backwards'
    });
}

function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function isPlayerPageActive() {
    return playerPage.classList.contains('active');
}

function isHomePageActive() {
    return homePage.classList.contains('active');
}

// Paint the filled part of a range slider
function updateRangeFill(slider) {
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 1;
    const percent = ((parseFloat(slider.value) - min) / (max - min)) * 100;
    slider.style.setProperty('--fill', `${percent}%`);
}

// Short confirmation at the bottom of the screen (e.g. "Shuffle on")
let toastTimer = null;
function showToast(message) {
    toastElement.textContent = message;
    toastElement.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastElement.classList.remove('show'), 1600);
}

// --- Backgrounds ---
const artCache = {};
let artBackgroundToken = 0;

// Read the album art once per song: 3 vivid colors for the glowing blobs, and a small pre-blurred copy
// for the backdrop. Blurring once here is far cheaper than a CSS blur filter that the browser has to
// redraw on every frame while the background drifts (that made scrolling lag).
function analyzeArt(url) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = artAtSize(url, 120); // Drawn at 64px or less anyway
    // decode() prepares the image off the main thread, so drawing it below doesn't stall the page
    return img.decode()
        .then(() => ({ colors: extractArtColors(img), blurred: blurArt(img) }))
        .catch(() => ({ colors: null, blurred: null }));
}

// A 64px blurred copy, stretched to fill the screen it looks the same as blurring the full image
function blurArt(img) {
    try {
        const size = 64;
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        const ctx = canvas.getContext('2d', { willReadFrequently: true }); // CPU canvas: reading it back is quick
        if (!('filter' in ctx)) return null; // No canvas filters (older Safari): CSS blurs it instead
        ctx.filter = 'blur(3px) saturate(170%) brightness(0.75)';
        ctx.drawImage(img, -8, -8, size + 16, size + 16); // Draw past the edges so the blur doesn't darken them
        return canvas.toDataURL('image/jpeg', 0.9);
    } catch (e) {
        return null; // Image server didn't allow reading pixels
    }
}

// Pick 3 vivid, different colors from the album art (null falls back to the purple theme)
function extractArtColors(img) {
    try {
        const size = 24;
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, size, size);
        const data = ctx.getImageData(0, 0, size, size).data;
        const pixels = [];
        for (let i = 0; i < data.length; i += 4) {
            const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            // Vivid = saturated and not too dark
            pixels.push({ r, g, b, score: (max - min) * 2 + max });
        }
        pixels.sort((a, b) => b.score - a.score);
        const picked = [];
        for (const p of pixels) {
            if (picked.every(q => Math.abs(p.r - q.r) + Math.abs(p.g - q.g) + Math.abs(p.b - q.b) > 90)) picked.push(p);
            if (picked.length === 3) break;
        }
        while (picked.length < 3) picked.push(picked[0] || { r: 168, g: 85, b: 247 });
        return picked.map(p => `rgb(${p.r}, ${p.g}, ${p.b})`);
    } catch (e) {
        return null; // Image server didn't allow reading pixels
    }
}

function showArtBackground(song) {
    const token = ++artBackgroundToken;
    const apply = ({ colors, blurred }) => {
        if (token !== artBackgroundToken) return; // Song changed while loading
        // Without a pre-blurred copy, fall back to the full image blurred by CSS
        artImage.style.backgroundImage = `url("${blurred || song.albumArtUrl}")`;
        artImage.classList.toggle('css-blur', !blurred);
        ['--art-c1', '--art-c2', '--art-c3'].forEach((name, i) => {
            if (colors) artBackground.style.setProperty(name, colors[i]);
            else artBackground.style.removeProperty(name);
        });
    };
    // Until the new art has been read, the previous background stays up
    getArt(song).then(apply);
}

// A song's cover colors and blurred copy, read once and then reused (resolves to { colors, blurred })
function getArt(song) {
    if (!(song.id in artCache)) artCache[song.id] = analyzeArt(song.albumArtUrl);
    return artCache[song.id];
}

// Tint the glow behind the playlist header with the current song's cover colors
function tintHome(song) {
    getArt(song).then(({ colors }) => {
        if (songs[currentSongIndex] !== song) return; // Song changed while loading
        ['--home-c1', '--home-c2'].forEach((name, i) => {
            if (colors) homeGlow.style.setProperty(name, colors[i]);
            else homeGlow.style.removeProperty(name);
        });
    });
}

// Show the song's animated album-art background (null hides it).
// Behind the playlist it is only a hover preview, so it stays still there and scrolling stays smooth.
function setBackground(song) {
    backgroundContainer.classList.toggle('still', !isPlayerPageActive());
    backgroundContainer.classList.toggle('active', Boolean(song));
    if (song) showArtBackground(song);
}

// --- Page Navigation ---

// Remember where the playlist was scrolled to before leaving it
function leaveHomePage() {
    if (isHomePageActive()) homeScrollY = window.scrollY;
}

function showHomePage() {
    const wasHome = isHomePageActive();
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    setBackground(null);
    closeSpeedMenu();
    updateMiniPlayerVisibility();
    updateArtistNav(); // The row can't be measured while the page is hidden
    if (!wasHome) window.scrollTo(0, homeScrollY);
    // Music keeps playing; the now-playing bar controls it from here
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
    leaveHomePage();
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    setBackground(null);
    updateMiniPlayerVisibility();
}

function showPlayerPage() {
    leaveHomePage();
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');
    window.scrollTo(0, 0);


    const currentSong = songs[currentSongIndex];
    setBackground(currentSong);
    updateMiniPlayerVisibility();
    sizeLyricsPadding();
    scrollToActiveLyric(true);
}

// --- Home Page Logic ---

// 2x2 mosaic of the first four different album covers
function renderPlaylistCover() {
    const arts = [...new Set(songs.map(song => song.albumArtUrl))];
    const shown = arts.length >= 4 ? arts.slice(0, 4) : arts.slice(0, 1);
    playlistCover.classList.toggle('single', shown.length === 1);
    playlistCover.innerHTML = shown.map(url => `<img src="${escapeHtml(artAtSize(url, 300))}" alt="">`).join('');
}

// Clicking a song (list row or quick pick) loads & plays it, then opens the player page
function playSongAt(index) {
    if (index !== currentSongIndex || !audioPlayer.src) {
        currentSongIndex = index;
        loadSong(songs[currentSongIndex]);
    }
    playTrack();
    showPlayerPage();
}

function renderSongList(query = '') {
    const q = query.trim().toLowerCase();
    songListElement.innerHTML = '';
    searchInput.parentElement.classList.toggle('has-value', query.length > 0);
    homePage.classList.toggle('searching', q.length > 0); // Recently played steps aside while searching
    listTitle.textContent = q ? `Results for "${query.trim()}"` : 'All songs';
    updateArtistSelection(q);
    trackHead.hidden = false;
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="list-message">No songs available.</li>';
        return;
    }

    const matches = songs
        .map((song, index) => ({ song, index }))
        .filter(({ song }) => !q || `${song.title} ${song.artist} ${song.album}`.toLowerCase().includes(q));

    if (matches.length === 0) {
        trackHead.hidden = true;
        songListElement.innerHTML = `
            <li class="list-message">
                <i class="fas fa-magnifying-glass" aria-hidden="true"></i>
                <strong>No results for "${escapeHtml(query.trim())}"</strong>
                <span>Try a different song, artist or album.</span>
            </li>`;
        return;
    }

    matches.forEach(({ song, index }, position) => {
        const listItem = document.createElement('li');
        listItem.className = 'track-row';
        listItem.style.setProperty('--i', position); // Staggers the rows' entrance animation
        listItem.setAttribute('data-id', song.id);
        listItem.setAttribute('data-index', index);
        listItem.setAttribute('role', 'button');
        listItem.setAttribute('aria-label', `Play ${song.title} by ${song.artist}`);
        listItem.tabIndex = 0;
        listItem.innerHTML = `
            <span class="track-num">
                <span class="song-index">${index + 1}</span>
                <span class="equalizer" aria-hidden="true"><span></span><span></span><span></span></span>
                <i class="fas fa-play row-play" aria-hidden="true"></i>
            </span>
            <div class="track-main">
                <span class="row-art">
                    <img src="${escapeHtml(artAtSize(song.albumArtUrl, 120))}" alt="" class="song-art-list" loading="lazy" decoding="async">
                    <span class="equalizer row-art-eq" aria-hidden="true"><span></span><span></span><span></span></span>
                </span>
                <div class="song-info-list">
                    <h3>${escapeHtml(song.title)}</h3>
                    <p>${escapeHtml(song.artist)}</p>
                </div>
            </div>
            <span class="track-album">${escapeHtml(song.album || '')}</span>
            <span class="song-duration">${songDurations[song.id] ? formatTime(songDurations[song.id]) : ''}</span>
        `;

        listItem.addEventListener('click', () => playSongAt(index));
        listItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                playSongAt(index);
            }
        });

        // Preview the song's background on hover
        listItem.addEventListener('mouseenter', () => {
            if (canHover && isHomePageActive()) previewBackground(song);
        });
        listItem.addEventListener('mouseleave', () => {
            if (isHomePageActive()) previewBackground(null);
        });

        songListElement.appendChild(listItem);
    });

    updateNowPlayingInList();
}

// Only switch the background once the pointer rests on a row. While the list scrolls, rows slide
// under the pointer one after another, and swapping the background for each of them made scrolling lag.
const PREVIEW_DELAY = 250; // ms
let previewTimer = 0;

function previewBackground(song) {
    clearTimeout(previewTimer);
    previewTimer = setTimeout(() => {
        if (isHomePageActive()) setBackground(song);
    }, PREVIEW_DELAY);
}

// Mark the current song in the list and in the recently played cards
function updateNowPlayingInList() {
    document.querySelectorAll('#songList li[data-index], .quick-card[data-index]').forEach(el => {
        const isCurrent = hasStarted && Number(el.dataset.index) === currentSongIndex;
        el.classList.toggle('now-playing', isCurrent);
        if (isCurrent) el.setAttribute('aria-current', 'true');
        else el.removeAttribute('aria-current');
    });
}

function updateSongCount() {
    const allKnown = songs.every(song => songDurations[song.id]);
    const total = allKnown
        ? ` · ${formatTotalDuration(songs.reduce((sum, s) => sum + songDurations[s.id], 0))}`
        : '';
    const artistCount = new Set(songs.map(song => mainArtist(song).toLowerCase())).size;
    songCountElement.textContent = `${songs.length} songs · ${artistCount} artists${total}`;
}

// Read each track's length without downloading the whole file
function preloadDurations() {
    songs.forEach(song => {
        const probe = new Audio();
        probe.preload = 'metadata';
        probe.addEventListener('loadedmetadata', () => {
            songDurations[song.id] = probe.duration;
            const li = songListElement.querySelector(`li[data-id="${song.id}"] .song-duration`);
            if (li) li.textContent = formatTime(probe.duration);
            updateSongCount();
            probe.removeAttribute('src');
        }, { once: true });
        probe.src = song.audioSrc;
    });
}

// --- Player Logic ---
function setDurationLabels(seconds) {
    durationLabels.forEach(el => { el.textContent = formatTime(seconds); });
}

function setCurrentTimeLabels(seconds) {
    currentTimeLabels.forEach(el => { el.textContent = formatTime(seconds); });
}

function loadSong(song) {
    lastShownSecond = -1;
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        playerTrackAlbum.textContent = "";
        lyricsContainer.innerHTML = '<p class="lyrics-empty">Lyrics are not available.</p>';
        lyricsContainer.classList.remove('waiting');
        audioPlayer.removeAttribute('src');
        setCurrentTimeLabels(0);
        setDurationLabels(0);
        setProgressUI(0);
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    albumArtPlayer.alt = `${song.album || song.title} cover`;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    playerTrackAlbum.textContent = song.album || "";

    miniArt.src = artAtSize(song.albumArtUrl, 120);
    miniTitle.textContent = song.title;
    miniArtist.textContent = song.artist;
    tintHome(song);

    // Song changed while it's on screen: slide the new title in, and the cover once it has loaded
    if (isPlayerPageActive()) {
        animateIn(trackMeta, { opacity: 0, transform: 'translateY(12px)' });
        albumArtPlayer.decode().catch(() => {}).then(() => animateIn(artFrame, { opacity: 0, transform: 'scale(0.9)' }));
    } else if (miniPlayer.classList.contains('visible')) {
        animateIn(miniInfo, { opacity: 0, transform: 'translateX(-12px)' });
    }

    renderLyrics(song.lyrics);

    audioPlayer.src = song.audioSrc;
    audioPlayer.load();
    audioPlayer.defaultPlaybackRate = playbackRate;
    audioPlayer.playbackRate = playbackRate;
    setCurrentTimeLabels(0);
    setDurationLabels(songDurations[song.id] || 0);
    setProgressUI(0);
    updateSeekAria(0, songDurations[song.id] || 0);

    updateMediaSession(song);
    updateNowPlayingInList();
    saveSetting('lastSongIndex', currentSongIndex);

    if (isPlayerPageActive()) setBackground(song);
}

// Swipe left/right on the album art or title to change song (phones)
function addSwipeToChangeSong(element) {
    let swipeStartX = null;
    let swipeStartY = null;
    element.style.touchAction = 'pan-y';
    element.addEventListener('touchstart', (e) => {
        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
    }, { passive: true });
    element.addEventListener('touchend', (e) => {
        if (swipeStartX === null) return;
        const dx = e.changedTouches[0].clientX - swipeStartX;
        const dy = e.changedTouches[0].clientY - swipeStartY;
        swipeStartX = null;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
            if (dx < 0) nextTrackLogic();
            else changeSong(isShuffle ? randomSongIndex() : (currentSongIndex - 1 + songs.length) % songs.length);
        }
    });
}
addSwipeToChangeSong(artFrame);
addSwipeToChangeSong(trackMeta);

function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    audioPlayer.play().catch(error => console.error("Error while playing:", error));
}

function pauseTrack() {
    audioPlayer.pause();
}

function togglePlay() {
    if (isPlaying) pauseTrack();
    else playTrack();
}

function updatePlayPauseIcon() {
    const label = isPlaying ? 'Pause' : 'Play';
    playPauseButtons.forEach(btn => {
        btn.innerHTML = `<i class="fas ${isPlaying ? 'fa-pause' : 'fa-play'}"></i>`;
        btn.setAttribute('aria-label', label);
        btn.title = `${label} (Space)`;
    });
    playAllBtn.innerHTML = `<i class="fas ${isPlaying ? 'fa-pause' : 'fa-play'}"></i><span>${label}</span>`;
    bodyElement.classList.toggle('is-playing', isPlaying);

    const song = songs[currentSongIndex];
    document.title = isPlaying && song
        ? `▶ ${song.title} · ${song.artist}`
        : 'Arc.Yearner - Music Player';
    if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
    }
}

function randomSongIndex() {
    if (songs.length <= 1) return 0;
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    return randomIndex;
}

function changeSong(index) {
    currentSongIndex = index;
    loadSong(songs[currentSongIndex]);
    playTrack();
}

function prevTrack() {
    if (songs.length === 0) return;
    // Like most players: restart the song if we're more than 3 seconds in
    if (audioPlayer.currentTime > 3) {
        audioPlayer.currentTime = 0;
        return;
    }
    changeSong(isShuffle ? randomSongIndex() : (currentSongIndex - 1 + songs.length) % songs.length);
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    changeSong(isShuffle ? randomSongIndex() : (currentSongIndex + 1) % songs.length);
}

// Called when a song ends on its own
function nextTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        changeSong(randomSongIndex());
    } else if (currentSongIndex + 1 < songs.length) {
        changeSong(currentSongIndex + 1);
    } else if (repeatMode === 2) {
        changeSong(0);
    } else {
        // End of playlist: stop and rewind
        pauseTrack();
        audioPlayer.currentTime = 0;
    }
}

// --- Progress / seeking ---
function setProgressUI(percent) {
    // Rounded to 0.1% (under a pixel): most frames then write the same value, and the browser skips the redraw
    const p = `${Math.round(Math.min(100, Math.max(0, percent)) * 10) / 10}%`;
    seekBars.forEach(({ fill, thumb }) => {
        fill.style.width = p;
        thumb.style.left = p;
    });
    miniProgressBar.style.width = p;
}

function updateSeekAria(current, duration) {
    seekBars.forEach(({ bar }) => {
        bar.setAttribute('aria-valuemax', Math.floor(duration || 0));
        bar.setAttribute('aria-valuenow', Math.floor(current));
        bar.setAttribute('aria-valuetext', `${formatTime(current)} of ${formatTime(duration)}`);
    });
}

function updateTimeUI() {
    const { currentTime, duration } = audioPlayer;
    if (!isSeeking && duration) {
        setProgressUI((currentTime / duration) * 100);
        const second = Math.floor(currentTime);
        if (second !== lastShownSecond) {
            lastShownSecond = second;
            setCurrentTimeLabels(currentTime);
            updateSeekAria(currentTime, duration);
        }
    }
    updateLyrics(currentTime);
}

// Smooth updates while playing (timeupdate alone only fires ~4 times a second)
function animationLoop() {
    updateTimeUI();
    if (isPlaying) requestAnimationFrame(animationLoop);
}

seekBars.forEach(({ bar, tooltip }) => {
    const percentFromPointer = (e) => {
        const rect = bar.getBoundingClientRect();
        return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    };
    const showSeekPreview = (e) => {
        const pct = percentFromPointer(e);
        tooltip.style.left = `${pct * 100}%`;
        tooltip.textContent = formatTime(pct * (audioPlayer.duration || 0));
        return pct;
    };
    const previewWhileDragging = (pct) => {
        setProgressUI(pct * 100);
        setCurrentTimeLabels(pct * audioPlayer.duration);
    };

    bar.addEventListener('pointerdown', (e) => {
        if (!audioPlayer.duration) return;
        isSeeking = true;
        bar.setPointerCapture(e.pointerId);
        bar.classList.add('dragging');
        previewWhileDragging(showSeekPreview(e));
    });

    bar.addEventListener('pointermove', (e) => {
        const pct = showSeekPreview(e);
        if (bar.classList.contains('dragging')) previewWhileDragging(pct);
    });

    bar.addEventListener('pointerup', (e) => {
        if (!bar.classList.contains('dragging')) return;
        isSeeking = false;
        bar.classList.remove('dragging');
        audioPlayer.currentTime = percentFromPointer(e) * audioPlayer.duration;
        autoScrollPausedUntil = 0;
        lastShownSecond = -1;
    });

    // Drag interrupted (e.g. the browser took over the touch): go back to the real position
    bar.addEventListener('pointercancel', () => {
        if (!bar.classList.contains('dragging')) return;
        isSeeking = false;
        bar.classList.remove('dragging');
        lastShownSecond = -1;
        updateTimeUI();
    });
});

function seekBy(seconds) {
    if (!audioPlayer.duration) return;
    audioPlayer.currentTime = Math.min(audioPlayer.duration, Math.max(0, audioPlayer.currentTime + seconds));
    autoScrollPausedUntil = 0;
}

// --- Audio events ---
audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    rememberPlayed(songs[currentSongIndex]);
    if (!hasStarted) {
        hasStarted = true;
        updateNowPlayingInList();
        updateMiniPlayerVisibility();
    }
    updatePlayPauseIcon();
    requestAnimationFrame(animationLoop);
});

audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayPauseIcon();
});

audioPlayer.addEventListener('timeupdate', updateTimeUI);
audioPlayer.addEventListener('seeked', updateTimeUI);

audioPlayer.addEventListener('loadedmetadata', () => {
    setDurationLabels(audioPlayer.duration);
    updateSeekAria(audioPlayer.currentTime, audioPlayer.duration);
});

audioPlayer.addEventListener('ended', () => {
    if (repeatMode !== 1) nextTrack(); // Repeat-one is handled by audio.loop
});

// --- Volume ---
function updateVolumeUI() {
    const v = audioPlayer.muted ? 0 : audioPlayer.volume;
    const icon = v === 0 ? 'fa-volume-xmark' : v < 0.5 ? 'fa-volume-low' : 'fa-volume-high';
    muteButtons.forEach(btn => {
        btn.innerHTML = `<i class="fas ${icon}"></i>`;
        btn.setAttribute('aria-label', v === 0 ? 'Unmute' : 'Mute');
        btn.title = v === 0 ? 'Unmute (M)' : 'Mute (M)';
    });
    volumeSliders.forEach(slider => {
        slider.value = v;
        updateRangeFill(slider);
    });
}

function setVolume(value) {
    const v = Math.min(1, Math.max(0, value));
    audioPlayer.volume = v;
    audioPlayer.muted = v === 0;
    updateVolumeUI();
    saveSetting('volume', v);
}

function toggleMute() {
    audioPlayer.muted = !audioPlayer.muted;
    if (!audioPlayer.muted && audioPlayer.volume === 0) setVolume(0.5);
    updateVolumeUI();
}

volumeSliders.forEach(slider => slider.addEventListener('input', (e) => setVolume(parseFloat(e.target.value))));
muteButtons.forEach(btn => btn.addEventListener('click', toggleMute));

// --- Playback speed ---
const speedOptions = [...speedMenu.querySelectorAll('[data-speed]')];

function setSpeed(rate) {
    playbackRate = rate;
    audioPlayer.defaultPlaybackRate = rate;
    audioPlayer.playbackRate = rate;
    currentSpeedDisplay.textContent = `${rate}×`;
    speedBtn.classList.toggle('active-feature', rate !== 1);
    speedBtn.setAttribute('aria-label', `Playback speed: ${rate}×`);
    speedOptions.forEach(option => {
        option.setAttribute('aria-checked', String(Number(option.dataset.speed) === rate));
    });
}

function openSpeedMenu() {
    speedMenu.hidden = false;
    speedBtn.setAttribute('aria-expanded', 'true');
    (speedOptions.find(o => o.getAttribute('aria-checked') === 'true') || speedOptions[0]).focus();
}

function closeSpeedMenu(returnFocus = false) {
    if (speedMenu.hidden) return;
    speedMenu.hidden = true;
    speedBtn.setAttribute('aria-expanded', 'false');
    if (returnFocus) speedBtn.focus();
}

speedBtn.addEventListener('click', () => {
    if (speedMenu.hidden) openSpeedMenu();
    else closeSpeedMenu();
});

speedOptions.forEach((option, i) => {
    option.addEventListener('click', () => {
        const rate = Number(option.dataset.speed);
        setSpeed(rate);
        closeSpeedMenu(true);
        showToast(rate === 1 ? 'Normal speed' : `Speed ${rate}×`);
    });
    // Arrow keys move through the menu instead of seeking or changing volume
    option.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            e.stopPropagation();
            const next = (i + (e.key === 'ArrowDown' ? 1 : -1) + speedOptions.length) % speedOptions.length;
            speedOptions[next].focus();
        } else if (e.key === 'Tab') {
            closeSpeedMenu();
        }
    });
});

document.addEventListener('click', (e) => {
    if (!speedMenu.hidden && !e.target.closest('.speed-control')) closeSpeedMenu();
});

// --- Shuffle & repeat ---
function updateShuffleButtonUI() {
    shuffleButtons.forEach(btn => {
        btn.classList.toggle('active-feature', isShuffle);
        btn.setAttribute('aria-pressed', String(isShuffle));
        btn.title = isShuffle ? 'Shuffle: on (S)' : 'Shuffle: off (S)';
    });
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    updateShuffleButtonUI();
    saveSetting('shuffle', isShuffle);
    showToast(isShuffle ? 'Shuffle on' : 'Shuffle off');
}

function cycleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    saveSetting('repeatMode', repeatMode);
    showToast(['Repeat off', 'Repeating this song', 'Repeating the playlist'][repeatMode]);
}

function updateRepeatButtonUI() {
    audioPlayer.loop = repeatMode === 1;
    repeatButtons.forEach(btn => {
        btn.classList.toggle('active-feature', repeatMode !== 0);
        btn.setAttribute('aria-pressed', String(repeatMode !== 0));
        btn.setAttribute('aria-label', REPEAT_LABELS[repeatMode]);
        btn.title = `${REPEAT_LABELS[repeatMode]} (R)`;
        // Font Awesome Free has no "repeat-1" icon, so draw a small "1" badge instead
        btn.innerHTML = repeatMode === 1
            ? '<i class="fas fa-repeat"></i><span class="repeat-one-badge" aria-hidden="true">1</span>'
            : '<i class="fas fa-repeat"></i>';
    });
}

shuffleButtons.forEach(btn => btn.addEventListener('click', toggleShuffle));
repeatButtons.forEach(btn => btn.addEventListener('click', cycleRepeat));

// --- Now-playing bar ---
function updateMiniPlayerVisibility() {
    const visible = hasStarted && !isPlayerPageActive();
    miniPlayer.classList.toggle('visible', visible);
    miniPlayer.inert = !visible; // Keep its buttons out of the tab order while it's hidden
}

miniInfo.addEventListener('click', showPlayerPage);
miniInfo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showPlayerPage();
    }
});
miniExpandBtn.addEventListener('click', showPlayerPage);
miniPlayPauseBtn.addEventListener('click', togglePlay);
miniPrevBtn.addEventListener('click', prevTrack);
miniNextBtn.addEventListener('click', nextTrackLogic);

// --- Media Session (lock screen / media keys) ---
function updateMediaSession(song) {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
        title: song.title,
        artist: song.artist,
        album: song.album,
        artwork: [{ src: song.albumArtUrl, sizes: '640x640', type: 'image/jpeg' }]
    });
}

if ('mediaSession' in navigator) {
    const handlers = {
        play: playTrack,
        pause: pauseTrack,
        previoustrack: prevTrack,
        nexttrack: nextTrackLogic,
        seekbackward: () => seekBy(-SEEK_STEP),
        seekforward: () => seekBy(SEEK_STEP),
        seekto: (details) => { audioPlayer.currentTime = details.seekTime; }
    };
    Object.entries(handlers).forEach(([action, handler]) => {
        try { navigator.mediaSession.setActionHandler(action, handler); } catch (e) { /* unsupported action */ }
    });
}

// --- Keyboard shortcuts ---

// After a mouse click, drop focus from the button so Space keeps meaning play/pause
document.addEventListener('click', (e) => {
    if (e.detail === 0) return; // Keyboard "click"
    const target = e.target.closest('button, [role="button"]');
    if (target && !target.closest('.speed-control')) target.blur();
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    // Typing in the search box: only handle Escape
    if (e.target === searchInput) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            renderSongList();
            searchInput.blur();
        }
        return;
    }
    if (e.key === 'Escape' && !speedMenu.hidden) {
        closeSpeedMenu(true);
        return;
    }
    // Let Enter/Space activate the focused button, song or menu item
    if ((e.key === ' ' || e.key === 'Enter') && e.target.closest && e.target.closest('button, [role="button"], [role="menuitemradio"]')) return;
    if (e.target.tagName === 'INPUT' && e.key !== ' ') return;

    switch (e.key) {
        case ' ':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            e.preventDefault();
            seekBy(SEEK_STEP);
            break;
        case 'ArrowLeft':
            e.preventDefault();
            seekBy(-SEEK_STEP);
            break;
        case 'ArrowUp':
            if (isPlayerPageActive()) { e.preventDefault(); setVolume(audioPlayer.volume + 0.05); }
            break;
        case 'ArrowDown':
            if (isPlayerPageActive()) { e.preventDefault(); setVolume(audioPlayer.volume - 0.05); }
            break;
        case 'n': case 'N':
            nextTrackLogic();
            break;
        case 'p': case 'P':
            prevTrack();
            break;
        case 'm': case 'M':
            toggleMute();
            showToast(audioPlayer.muted ? 'Muted' : 'Unmuted');
            break;
        case 's': case 'S':
            toggleShuffle();
            break;
        case 'r': case 'R':
            cycleRepeat();
            break;
        case 'l': case 'L':
            if (isPlayerPageActive()) toggleLyrics();
            break;
        case '/':
            if (isHomePageActive()) { e.preventDefault(); searchInput.focus(); }
            break;
        case 'Escape':
            if (!isHomePageActive()) showHomePage();
            break;
    }
});

// --- Buttons ---
playerPlayPauseBtn.addEventListener('click', togglePlay);
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

searchInput.addEventListener('input', () => renderSongList(searchInput.value));
searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderSongList();
    searchInput.focus();
});

// Big Play button: start the playlist, or pause/resume once something is playing
playAllBtn.addEventListener('click', () => {
    if (hasStarted) togglePlay();
    else changeSong(isShuffle ? randomSongIndex() : 0);
});

shufflePlayBtn.addEventListener('click', () => {
    if (!isShuffle) toggleShuffle();
    changeSong(randomSongIndex());
});

// Solid top bar once the playlist scrolls under it.
// While scrolling, the rows ignore the pointer: rows sliding under it would otherwise keep
// triggering hover effects and background previews, which made scrolling feel heavy.
let scrollEndTimer = 0;
window.addEventListener('scroll', () => {
    homeTopbar.classList.toggle('scrolled', window.scrollY > 8);
    songListElement.classList.add('scrolling');
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => songListElement.classList.remove('scrolling'), 150);
}, { passive: true });

backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From the player page to the home page

// Play button on the details page
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    const savedIndex = loadSetting('lastSongIndex', 0);
    currentSongIndex = Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < songs.length ? savedIndex : 0;
    isShuffle = loadSetting('shuffle', false) === true;
    const savedRepeat = loadSetting('repeatMode', 0);
    repeatMode = [0, 1, 2].includes(savedRepeat) ? savedRepeat : 0;
    showLyrics = loadSetting('showLyrics', true) !== false;

    renderPlaylistCover();
    renderRecent();
    renderArtists();
    renderSongList();
    updateSongCount();
    preloadDurations();

    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Music";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = '<p class="lyrics-empty">Please add songs from the list.</p>';
    }

    // iPhone/iPad ignore audio.volume (only the hardware buttons work), so hide the sliders there
    audioPlayer.volume = 0.5;
    if (audioPlayer.volume !== 0.5) {
        document.querySelectorAll('.volume-control').forEach(el => el.classList.add('unsupported'));
    }

    const savedVolume = loadSetting('volume', 0.8);
    setVolume(typeof savedVolume === 'number' ? savedVolume : 0.8);
    setSpeed(1);

    updatePlayPauseIcon();
    updateShuffleButtonUI();
    updateRepeatButtonUI();
    applyLyricsVisibility();
    showHomePage();
}

// Start once all feature scripts have loaded.
document.addEventListener('DOMContentLoaded', init, { once: true });

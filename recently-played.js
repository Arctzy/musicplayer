// Feature code shares player state and helpers from script.js.
const recentSection = document.getElementById('recentSection');
const recentGrid = document.getElementById('recentGrid');

// --- Recently played ---
const RECENT_MAX = 6;
const savedRecent = loadSetting('recent', []);
let recentIds = Array.isArray(savedRecent) ? savedRecent.filter(id => songs.some(song => song.id === id)) : [];

// Remember a song once it starts playing (most recent first)
function rememberPlayed(song) {
    if (!song || recentIds[0] === song.id) return;
    recentIds = [song.id, ...recentIds.filter(id => id !== song.id)].slice(0, RECENT_MAX);
    saveSetting('recent', recentIds);
    renderRecent();
}

function renderRecent() {
    recentSection.hidden = recentIds.length === 0;
    recentGrid.innerHTML = recentIds.map((id, i) => {
        const index = songs.findIndex(song => song.id === id);
        const song = songs[index];
        return `
            <button class="quick-card" type="button" data-index="${index}" style="--i: ${i}" aria-label="Play ${escapeHtml(song.title)} by ${escapeHtml(song.artist)}">
                <img src="${escapeHtml(artAtSize(song.albumArtUrl, 120))}" alt="" class="quick-art" decoding="async">
                <span class="quick-text">
                    <strong>${escapeHtml(song.title)}</strong>
                    <span>${escapeHtml(song.artist)}</span>
                </span>
                <span class="quick-state" aria-hidden="true">
                    <span class="equalizer"><span></span><span></span><span></span></span>
                    <i class="fas fa-play"></i>
                </span>
            </button>`;
    }).join('');
    updateNowPlayingInList();
}

recentGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.quick-card');
    if (card) playSongAt(Number(card.dataset.index));
});


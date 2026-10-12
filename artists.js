// Feature code shares player state and helpers from script.js.
const artistRow = document.getElementById('artistRow');
const artistsPrevBtn = document.getElementById('artistsPrevBtn');
const artistsNextBtn = document.getElementById('artistsNextBtn');

// --- Artists ---

// Main artist of a song: "Wiz Khalifa, Charlie Puth" → "Wiz Khalifa"
function mainArtist(song) {
    return song.artist.split(/\s*(?:,|&|\sfeat\.?\s|\sft\.?\s)\s*/i)[0].trim();
}

// One card per main artist (most songs first, ties in playlist order), shown with one of their covers
function renderArtists() {
    const artists = new Map();
    songs.forEach(song => {
        const name = mainArtist(song);
        const key = name.toLowerCase();
        if (!artists.has(key)) artists.set(key, { name, count: 0, art: song.albumArtUrl });
        artists.get(key).count++;
    });
    const sorted = [...artists.values()].sort((a, b) => b.count - a.count);
    artistRow.innerHTML = sorted.map((artist, i) => `
        <button class="artist-card" type="button" data-artist="${escapeHtml(artist.name)}" aria-pressed="false" style="--i: ${i}">
            <img src="${escapeHtml(artAtSize(artist.art, 200))}" alt="" class="artist-avatar" loading="lazy" decoding="async">
            <span class="artist-name">${escapeHtml(artist.name)}</span>
            <span class="artist-count">${artist.count} ${artist.count === 1 ? 'song' : 'songs'}</span>
        </button>`).join('');
    updateArtistSelection(searchInput.value.trim().toLowerCase());
    updateArtistNav();
}

// The artist whose name is the current search shows as selected
function updateArtistSelection(q) {
    artistRow.querySelectorAll('.artist-card').forEach(card => {
        card.setAttribute('aria-pressed', String(card.dataset.artist.toLowerCase() === q));
    });
}

// Tap an artist to list only their songs (it searches their name); tap again to show everything
artistRow.addEventListener('click', (e) => {
    const card = e.target.closest('.artist-card');
    if (!card) return;
    searchInput.value = card.getAttribute('aria-pressed') === 'true' ? '' : card.dataset.artist;
    renderSongList(searchInput.value);
});

// Arrow buttons scroll the row by most of its width; each is disabled at its end
function updateArtistNav() {
    const max = artistRow.scrollWidth - artistRow.clientWidth;
    artistsPrevBtn.disabled = artistRow.scrollLeft <= 1;
    artistsNextBtn.disabled = artistRow.scrollLeft >= max - 1;
}
[[artistsPrevBtn, -1], [artistsNextBtn, 1]].forEach(([btn, direction]) => {
    btn.addEventListener('click', () => {
        artistRow.scrollBy({ left: direction * artistRow.clientWidth * 0.8, behavior: 'smooth' });
    });
});
artistRow.addEventListener('scroll', updateArtistNav, { passive: true });
window.addEventListener('resize', updateArtistNav);


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
const lyricsContainer = document.getElementById('lyricsContainer');
const lyricsToggleBtn = document.getElementById('lyricsToggleBtn');
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
let songs = [
    {
        id: 1,
        title: "Fallen",
        artist: "Lola Amour",
        album: "Lola Amour",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273b42607713c1dd129afa9f350",
        audioSrc: "audio/Fallen - Lola Amour.mp3",
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 18.42, text: "What if I told you that I've fallen" },
            { time: 22.87, text: "And I like the way you say my name?" },
            { time: 27.98, text: "My heart skips a beat when I hear you calling" },
            { time: 32.8, text: "And I like that it won't go away" },
            { time: 39.04, text: "But never mind, don't wanna give you any trouble" },
            { time: 44.3, text: "Never mind, never mind" },
            { time: 49.17, text: "I'm OK with being by your side for as long as I can hide" },
            { time: 54.96, text: "What if I told you that I've fallen?" },
            { time: 58.56, text: "♪" },
            { time: 77.07, text: "What if I told you that I've fallen?" },
            { time: 81.97, text: "The heart-shaped arrow through my chest" },
            { time: 86.73, text: "I'll make your breakfast every morning" },
            { time: 91.6, text: "And pick you up when you're a mess" },
            { time: 99.13, text: "But I know that it won't ever stop" },
            { time: 102.7, text: "You know I'll be there when you call me whether you like it or not" },
            { time: 107.52, text: "Without a warning, now I'm falling for this picture on my phone" },
            { time: 112.73, text: "But don't mind me, I'm just falling, I'll be back up on my own" },
            { time: 117.74, text: "Please don't say my name, help me put out this flame" },
            { time: 127.14, text: "I'd rather hold onto this feeling that you don't even believe in" },
            { time: 133.31, text: "What if I told you that I've fallen?" },
            { time: 136.94, text: "♪" },
            { time: 155.36, text: "What if I told you that I've fallen?" },
            { time: 158.18, text: "Nevermind, nevermind, nevermind" },
            { time: 160.26, text: "What if I told you that I've fallen?" },
            { time: 162.99, text: "Nevermind, nevermind, nevermind" },
            { time: 165.17, text: "What if I told you that I've fallen?" },
            { time: 168.05, text: "Nevermind, nevermind, nevermind" },
            { time: 170.18, text: "What if I told you that I've fallen?" },
            { time: 172.94, text: "Nevermind, nevermind, nevermind" },
            { time: 175.12, text: "What if I told you that I've fallen? (Nevermind)" },
            { time: 179.82, text: "What if I told you that I've fallen? (Oh, nevermind)" },
            { time: 184.88, text: "What if I told you that I've fallen? (Oh, nevermind)" },
            { time: 189.77, text: "What if I told you that I've fallen? (Oh, nevermind, I said nevermind)" },
            { time: 194.44, text: "I shouldn't tell you that I've fallen" },
            { time: 198.26, text: "♪" }
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "One Direction",
        album: "Made in the A.M.",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Perfect - One Direction.mp3",
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 5.72, text: "I might never be your knight in shining armour" },
            { time: 10.52, text: "I might never be the one you take home to mother" },
            { time: 15.03, text: "And I might never be the one who brings you flowers" },
            { time: 19.78, text: "But I can be the one, be the one tonight" },
            { time: 24.73, text: "When I first saw you from across the room" },
            { time: 29.5, text: "I could tell that you were curious, oh, yeah" },
            { time: 34.22, text: "Girl, I hope you're sure what you're looking for" },
            { time: 39.23, text: "'Cause I'm not good at making promises" },
            { time: 42.68, text: "But if you like causing trouble up in hotel rooms" },
            { time: 47.57, text: "And if you like having secret little rendezvous" },
            { time: 52.55, text: "If you like to do the things you know that we shouldn't do" },
            { time: 57.29, text: "Then, baby, I'm perfect" },
            { time: 59.63, text: "Baby, I'm perfect for you" },
            { time: 61.87, text: "And if you like midnight driving with the windows down" },
            { time: 66.86, text: "And if you like going places we can't even pronounce" },
            { time: 71.85, text: "If you like to do whatever you've been dreaming about" },
            { time: 76.23, text: "Then, baby, you're perfect" },
            { time: 79.05, text: "Baby, you're perfect" },
            { time: 80.74, text: "So let's start right now" },
            { time: 84.9, text: "I might never be the hands you put your heart in" },
            { time: 89.76, text: "Or the arms that hold you any time you want them" },
            { time: 94.27, text: "But that don't mean that we can't live here in the moment" },
            { time: 99.21, text: "'Cause I can be the one you love from time to time" },
            { time: 103.78, text: "When I first saw you, from across the room" },
            { time: 108.85, text: "I could tell that you were curious, oh, yeah" },
            { time: 113.51, text: "Girl, I hope you're sure what you're looking for" },
            { time: 118.53, text: "'Cause I'm not good at making promises" },
            { time: 121.91, text: "But if you like causing trouble up in hotel rooms" },
            { time: 126.77, text: "And if you like having secret little rendezvous" },
            { time: 131.79, text: "If you like to do the things you know that we shouldn't do" },
            { time: 136.5, text: "Then, baby, I'm perfect" },
            { time: 138.89, text: "Baby, I'm perfect for you" },
            { time: 141.02, text: "And if you like midnight driving with the windows down" },
            { time: 145.73, text: "And if you like going places we can't even pronounce" },
            { time: 150.98, text: "If you like to do whatever you've been dreaming about" },
            { time: 155.45, text: "Then, baby, you're perfect" },
            { time: 157.74, text: "Baby, you're perfect" },
            { time: 159.9, text: "So let's start right now" },
            { time: 162.79, text: "And if you like cameras flashing every time we go out, oh, yeah" },
            { time: 172.32, text: "And if you're looking for someone" },
            { time: 174.78, text: "To write your breakup songs about" },
            { time: 177.35, text: "Baby, I'm perfect" },
            { time: 179.42, text: "Baby, we're perfect" },
            { time: 182.21, text: "If you like causing trouble up in hotel rooms" },
            { time: 186.82, text: "And if you like having secret little rendezvous" },
            { time: 191.69, text: "If you like to do the things you know that we shouldn't do" },
            { time: 196.37, text: "Then, baby, I'm perfect" },
            { time: 198.85, text: "Baby, I'm perfect for you" },
            { time: 201.04, text: "And if you like midnight driving with the windows down" },
            { time: 205.91, text: "And if you like going places we can't even pronounce" },
            { time: 210.85, text: "If you like to do whatever you've been dreaming about" },
            { time: 215.4, text: "Then, baby, you're perfect" },
            { time: 217.98, text: "Baby, you're perfect" },
            { time: 219.96, text: "So let's start right now" },
            { time: 221.02, text: "♪" }
        ]
    },    
    {
        id: 3,
        title: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
        audioSrc: "audio/Heat Waves - Glass Animals.mp3",
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 3.31, text: "Last night, all I think about is you" },
            { time: 6.78, text: "Don't stop, baby, you can walk through" },
            { time: 9.32, text: "Don't wanna, but I think about you" },
            { time: 12.34, text: "You know that I'm never gonna lose" },
            { time: 15.68, text: "♪" },
            { time: 18.38, text: "Road shimmer, wiggling the vision" },
            { time: 21.03, text: "Heat, heat waves, I'm swimming in a mirror" },
            { time: 24.1, text: "Road shimmer, wiggling the vision" },
            { time: 26.95, text: "Heat, heat waves, I'm swimmin' in a-" },
            { time: 30.39, text: "Sometimes all I think about is you" },
            { time: 33.34, text: "Late nights in the middle of June" },
            { time: 35.82, text: "Heat waves been faking me out" },
            { time: 39.63, text: "Can't make you happier now" },
            { time: 42.53, text: "Sometimes all I think about is you" },
            { time: 45.45, text: "Late nights in the middle of June" },
            { time: 48.19, text: "Heat waves been faking me out" },
            { time: 51.12, text: "Can't make you happier now" },
            { time: 54.42, text: "Usually, I put something on TV" },
            { time: 57.41, text: "So we never think about you and me" },
            { time: 60.27, text: "But today, I see our reflections clearly in Hollywood" },
            { time: 64.2, text: "Laying on the screen" },
            { time: 66.17, text: "You just need a better life than this" },
            { time: 68.73, text: "You need something I can never give" },
            { time: 71.76, text: "Fake water all across the road" },
            { time: 74.3, text: "It's gone now, the night has come, but" },
            { time: 77.83, text: "Sometimes all I think about is you" },
            { time: 80.39, text: "Late nights in the middle of June" },
            { time: 83.34, text: "Heat waves been faking me out" },
            { time: 86.4, text: "Can't make you happier now" },
            { time: 89.72, text: "You can't fight it, you can't breathe" },
            { time: 91.97, text: "You say something so loving, but" },
            { time: 95.23, text: "Now I gotta let you go" },
            { time: 98.23, text: "You'll be better off with someone new" },
            { time: 101.04, text: "I don't wanna be alone" },
            { time: 103.96, text: "You know it hurts me too" },
            { time: 107.05, text: "You look so broken when you cry" },
            { time: 110.08, text: "One more and then I say goodbye" },
            { time: 112.94, text: "Sometimes all I think about is you" },
            { time: 116.21, text: "Late nights in the middle of June" },
            { time: 119.37, text: "Heat waves been faking me out" },
            { time: 122.08, text: "Can't make you happier now" },
            { time: 124.81, text: "Sometimes all I think about is you" },
            { time: 128.56, text: "Late nights in the middle of June" },
            { time: 131.36, text: "Heat waves been faking me out" },
            { time: 134.6, text: "Can't make you happier now" },
            { time: 137.36, text: "I just wonder what you're dreaming of" },
            { time: 140.39, text: "When you sleep and smile so comfortable" },
            { time: 143.38, text: "I just wish that I could give you that" },
            { time: 146.02, text: "That look that's perfectly un-sad" },
            { time: 148.47, text: "Sometimes all I think about is you" },
            { time: 152.38, text: "Late nights in the middle of June" },
            { time: 155.07, text: "Heat waves been faking me out" },
            { time: 157.68, text: "Heat waves been faking me out" },
            { time: 161.6, text: "♪" },
            { time: 165.06, text: "Sometimes all I think about is you" },
            { time: 166.99, text: "Late nights in the middle of June" },
            { time: 169.83, text: "Heat waves been faking me out" },
            { time: 172.65, text: "Can't make you happier now" },
            { time: 175.64, text: "Sometimes all I think about is you" },
            { time: 178.74, text: "Late nights in the middle of June" },
            { time: 181.7, text: "Heat waves been faking me out" },
            { time: 184.8, text: "Can't make you happier now" },
            { time: 188.74, text: "Road shimmer wiggling the vision" },
            { time: 191.39, text: "Heat, heat waves, I'm swimming in a mirror" },
            { time: 193.96, text: "Road shimmer wiggling the vision" },
            { time: 196.45, text: "Heat, heat waves, I'm swimming in a mirror" },
            { time: 198.21, text: "♪" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273828789ff08a16218b2ea9445",
        audioSrc: "audio/Rewrite The Stars - James Arthur & Anne-Marie.mp3",
        lyrics: [
            { time: 2.62, text: "You know I want you" },
            { time: 6.23, text: "It's not a secret I try to hide" },
            { time: 10.02, text: "You know you want me" },
            { time: 13.71, text: "So don't keep saying our hands are tied" },
            { time: 17.69, text: "You claim it's not in the cards" },
            { time: 19.61, text: "And fate is pulling you miles away" },
            { time: 22.63, text: "And out of reach from me" },
            { time: 25.37, text: "But you're here in my heart" },
            { time: 27.35, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 35.42, text: "What if we rewrite the stars?" },
            { time: 39.22, text: "Say you were made to be mine" },
            { time: 43.08, text: "Nothin' could keep us apart" },
            { time: 46.89, text: "You'll be the one I was meant to find" },
            { time: 50.6, text: "It's up to you, and it's up to me" },
            { time: 54.43, text: "No one can say what we get to be" },
            { time: 58.26, text: "So why don't we rewrite the stars?" },
            { time: 62.06, text: "And maybe the world could be ours tonight" },
            { time: 68.81, text: "♪" },
            { time: 74.99, text: "You think it's easy" },
            { time: 78.62, text: "You think I don't wanna run to you, yeah" },
            { time: 82.48, text: "But there are mountains" },
            { time: 85.98, text: "And there are doors that we can't walk through" },
            { time: 89.86, text: "I know you're wondering why" },
            { time: 91.83, text: "Because we're able to be just you and me within these walls" },
            { time: 97.63, text: "But when we go outside" },
            { time: 99.54, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 107.57, text: "No one can rewrite the stars" },
            { time: 111.55, text: "How can you say you'll be mine?" },
            { time: 115.29, text: "Everything keeps us apart" },
            { time: 118.98, text: "And I'm not the one you were meant to find" },
            { time: 122.83, text: "It's not up to you, it's not up to me, yeah" },
            { time: 126.76, text: "When everyone tells us what we can be" },
            { time: 130.3, text: "And how can we rewrite the stars?" },
            { time: 134.27, text: "Say that the world can be ours tonight" },
            { time: 139.78, text: "All I want is to fly with you" },
            { time: 143.41, text: "All I want is to fall with you" },
            { time: 147.67, text: "So just give me all of you" },
            { time: 151.91, text: "It feels impossible" },
            { time: 153.25, text: "It's not impossible" },
            { time: 154.15, text: "Is it impossible?" },
            { time: 155.65, text: "Say that it's possible" },
            { time: 159.37, text: "How do we rewrite the stars?" },
            { time: 163.07, text: "Say you were made to be mine" },
            { time: 166.74, text: "And nothing can keep us apart" },
            { time: 170.47, text: "'Cause you are the one I was meant to find" },
            { time: 174.37, text: "It's up to you, and it's up to me" },
            { time: 178.18, text: "No one can say what we get to be" },
            { time: 181.83, text: "And why don't we rewrite the stars?" },
            { time: 185.73, text: "Changing the world to be ours" },
            { time: 191.14, text: "♪" },
            { time: 198.58, text: "You know I want you" },
            { time: 202.26, text: "It's not a secret I try to hide" },
            { time: 206.22, text: "But I can't have you" },
            { time: 209.87, text: "We're bound to break and my hands are tied" },
            { time: 214.0, text: "♪" }
        ]
    },
    {
        id: 5,
        title: "Beauty And A Beat",
        artist: "Justin Bieber, Nicki Minaj",
        album: "Believe",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273f1d02a6cec967f8b6b78f76e",
        audioSrc: "audio/Beauty And A Beat - Justin Bieber, Nicki Minaj.mp3",
        lyrics: [
            { time: 15.62, text: "Show you off, yeah" },
            { time: 18.25, text: "Tonight I wanna show you off, oh, oh" },
            { time: 23.56, text: "What you got, yeah" },
            { time: 25.87, text: "A billion could've never bought, oh, oh, oh" },
            { time: 30.59, text: "We gonna party like it's 3012 tonight" },
            { time: 34.38, text: "I wanna show you all the finer things in life" },
            { time: 38.52, text: "So just forget about the world, we're young tonight" },
            { time: 42.12, text: "I'm coming for ya, I'm coming for ya" },
            { time: 44.98, text: "'Cause all I need" },
            { time: 50.48, text: "Is a beauty and a beat" },
            { time: 54.3, text: "Who can make my life complete, woah-oh" },
            { time: 59.7, text: "It's all 'bout you" },
            { time: 65.56, text: "When the music makes you move" },
            { time: 69.43, text: "Baby, do it like you do, ooh-woah, oh, oh" },
            { time: 90.26, text: "Body rock, yeah" },
            { time: 93.33, text: "I wanna feel your body rock, oh, oh" },
            { time: 98.25, text: "Take a bow, yeah" },
            { time: 100.86, text: "Girl on the hottest ticket now, oh, oh" },
            { time: 105.88, text: "We gonna party like it's 3012 tonight" },
            { time: 109.78, text: "I wanna show you all the finer things in life" },
            { time: 113.37, text: "So just forget about the world, we're young tonight" },
            { time: 116.98, text: "I'm coming for ya, I'm coming for ya" },
            { time: 119.57, text: "'Cause all I need" },
            { time: 125.52, text: "Is a beauty and a beat" },
            { time: 129.42, text: "Who can make my life complete, woah-oh" },
            { time: 134.85, text: "It's all 'bout you" },
            { time: 140.24, text: "When the music makes you move" },
            { time: 144.58, text: "Baby, do it like you do, ooh-woah, oh, oh" },
            { time: 150.55, text: "♪" }
        ]
    },
    {
        id: 6,
        title: "The Day You Said Goodnight",
        artist: "Hale", 
        album: "Hale",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27389d3628e226a3c7e0d0afbc3", 
        audioSrc: "audio/The Day You Said Goodnight - Hale.mp3",
        lyrics: [
            { time: 6.54, text: "Take me as you are, push me off the road" },
            { time: 14.13, text: "The sadness, I need this time to be with you" },
            { time: 20.79, text: "I'm freezing in the sun, I'm burning in the rain" },
            { time: 28.39, text: "The silence, I'm screaming, calling out your name" },
            { time: 35.09, text: "And I do reside in your light" },
            { time: 41.46, text: "Put out the fire with me and find" },
            { time: 48.96, text: "Yeah, you'll lose the side of your circles" },
            { time: 55.23, text: "That's what I'll do if we say \"Goodbye\"" },
            { time: 63.94, text: "To be is all I gotta be and all that I see" },
            { time: 73.24, text: "And all that I need this time" },
            { time: 78.42, text: "To me, the life you gave me" },
            { time: 84.07, text: "The day you said \"Goodnight\"" },
            { time: 90.23, text: "♪" },
            { time: 99.18, text: "The calmness in your face that I see through the night" },
            { time: 107.0, text: "The warmth of your light is pressing unto us" },
            { time: 113.34, text: "You didn't ask me why, I never would have known" },
            { time: 121.4, text: "Oblivion is falling down" },
            { time: 127.77, text: "And I do reside in your light" },
            { time: 134.26, text: "Put out the fire with me and find" },
            { time: 141.97, text: "Yeah, you'll lose the side of your circles" },
            { time: 148.18, text: "That's what I'll do if we say \"Goodbye\"" },
            { time: 156.83, text: "To be is all I gotta be and all that I see" },
            { time: 166.1, text: "And all that I need this time" },
            { time: 171.33, text: "To me, the life you gave me" },
            { time: 176.9, text: "The day you said \"Goodnight\"" },
            { time: 183.18, text: "♪" },
            { time: 187.52, text: "If you could only know me" },
            { time: 191.93, text: "Like your prayers at night" },
            { time: 201.74, text: "Then everything between you and me" },
            { time: 208.44, text: "Will be alright" },
            { time: 214.01, text: "To be is all I gotta be and all that I see" },
            { time: 223.26, text: "And all that I need this time" },
            { time: 228.48, text: "To me, the life you gave me" },
            { time: 234.06, text: "The day you said \"Goodnight\"" },
            { time: 241.68, text: "♪" },
            { time: 244.69, text: "She's already taken, she's already taken" },
            { time: 251.77, text: "She's already taken me" },
            { time: 258.86, text: "She's already taken, she's already taken me" },
            { time: 274.59, text: "♪" },
            { time: 276.88, text: "The day you said \"Goodnight\"" },
            { time: 282.74, text: "♪" }
        ]
    },
    {
        id: 7,
        title: "See You Again",
        artist: "Wiz Khalifa, Charlie Puth",
        album: "Furious 7 (Soundtrack)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2734e5df11b17b2727da2b718d8",
        audioSrc: "audio/See You Again - Wiz Khalifa, Charlie Puth.mp3",
        lyrics: [
            { time: 10.5, text: "It's been a long day without you, my friend" },
            { time: 16.88, text: "And I'll tell you all about it when I see you again" },
            { time: 22.83, text: "We've come a long way from where we began" },
            { time: 28.8, text: "Oh, I'll tell you all about it when I see you again" },
            { time: 34.98, text: "When I see you again" },
            { time: 38.45, text: "Damn, who knew?" },
            { time: 41.43, text: "All the planes we flew, good things we been through" },
            { time: 44.4, text: "That I'd be standing right here talking to you" },
            { time: 47.06, text: "'Bout another path, I know we loved to hit the road and laugh" },
            { time: 50.92, text: "But something told me that it wouldn't last" },
            { time: 53.07, text: "Had to switch up, look at things different, see the bigger picture" },
            { time: 56.91, text: "Those were the days, hard work forever pays" },
            { time: 59.97, text: "Now I see you in a better place (see you in a better place)" },
            { time: 63.59, text: "Uh" },
            { time: 64.79, text: "How can we not talk about family when family's all that we got?" },
            { time: 68.37, text: "Everything I went through, you were standing there by my side" },
            { time: 71.31, text: "And now you gon' be with me for the last ride" },
            { time: 74.03, text: "It's been a long day without you, my friend" },
            { time: 79.71, text: "And I'll tell you all about it when I see you again (I'll see you again)" },
            { time: 86.32, text: "We've come a long way (yeah, we came a long way)" },
            { time: 89.78, text: "From where we began (you know we started)" },
            { time: 92.4, text: "Oh, I'll tell you all about it when I see you again (I'll tell you)" },
            { time: 98.16, text: "When I see you again" },
            { time: 100.86, text: "Ah-ah-ah-oh, ah-ah-ah, ah-ah-ah-oh" },
            { time: 106.86, text: "Ooh-ooh-ooh-ooh, ooh-ooh, ooh-ooh" },
            { time: 110.35, text: "Ooh-ooh-ooh-ooh-ooh, ooh-ooh, ooh-ooh, ooh (yeah)" },
            { time: 114.98, text: "First, you both go out your way and the vibe is feeling strong" },
            { time: 119.03, text: "And what's small turned to a friendship, a friendship turned to a bond" },
            { time: 122.13, text: "And that bond will never be broken, the love will never get lost (the love will never get lost)" },
            { time: 126.94, text: "And when brotherhood come first, then the line will never be crossed" },
            { time: 131.18, text: "Established it on our own when that line had to be drawn" },
            { time: 134.14, text: "And that line is what we reached, so remember me when I'm gone (remember me when I'm gone)" },
            { time: 139.7, text: "How can we not talk about family when family's all that we got?" },
            { time: 143.33, text: "Everything I went through you were standing there by my side" },
            { time: 146.33, text: "And now you gon' be with me for the last ride" },
            { time: 148.78, text: "So let the light guide your way, yeah" },
            { time: 154.97, text: "Hold every memory as you go" },
            { time: 160.05, text: "And every road you take" },
            { time: 163.99, text: "Will always lead you home, home" },
            { time: 172.04, text: "It's been a long day without you, my friend" },
            { time: 178.67, text: "And I'll tell you all about it when I see you again" },
            { time: 184.77, text: "We've come a long way from where we began" },
            { time: 191.06, text: "Oh, I'll tell you all about it when I see you again" },
            { time: 196.54, text: "When I see you again" },
            { time: 199.85, text: "Ah-ah-ah-oh (uh)" },
            { time: 202.45, text: "Ah-ah-ah, ah-ah-ah-oh (yeah)" },
            { time: 205.81, text: "Ooh-ooh-ooh-ooh, ooh-ooh, ooh-ooh (yup, yup)" },
            { time: 208.67, text: "When I see you again (uh)" },
            { time: 211.67, text: "See you again, yeah, yeah-yeah, ah, oh (yeah, yeah, yeah)" },
            { time: 217.92, text: "Ooh-ooh-ooh-ooh, ooh-ooh, ooh-ooh (uh-huh, yup)" },
            { time: 220.88, text: "When I see you again" },
            { time: 224.15, text: "♪" }
        ]
    },
    {
        id: 8,
        title: "Drag Me Down",
        artist: "One Direction",
        album: "Made in the A.M.",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Drag Me Down - One Direction.mp3",
        lyrics: [
            { time: 5.98, text: "I've got fire for a heart" },
            { time: 8.07, text: "I'm not scared of the dark" },
            { time: 9.87, text: "You've never seen it look so easy" },
            { time: 12.87, text: "I got a river for a soul" },
            { time: 15.17, text: "And baby, you're a boat" },
            { time: 17.11, text: "Baby, you're my only reason" },
            { time: 19.47, text: "If I didn't have you, there would be nothing left" },
            { time: 22.94, text: "The shell of a man that could never be his best" },
            { time: 26.5, text: "If I didn't have you, I'd never see the sun" },
            { time: 29.75, text: "You taught me how to be someone, yeah" },
            { time: 33.45, text: "All my life, you stood by me" },
            { time: 37.17, text: "When no one else was ever behind me" },
            { time: 40.59, text: "All these lights, they can't blind me" },
            { time: 44.2, text: "With your love, nobody can drag me down" },
            { time: 47.52, text: "All my life, you stood by me" },
            { time: 51.11, text: "When no one else was ever behind me" },
            { time: 54.45, text: "All these lights, they can't blind me" },
            { time: 57.95, text: "With your love, nobody can drag me down" },
            { time: 63.81, text: "Nobody, nobody (hey)" },
            { time: 66.41, text: "Nobody can drag me down" },
            { time: 70.63, text: "Nobody, nobody (hey)" },
            { time: 73.33, text: "Nobody can drag me down" },
            { time: 75.59, text: "I got fire for a heart" },
            { time: 77.76, text: "I'm not scared of the dark" },
            { time: 79.4, text: "You've never seen it look so easy" },
            { time: 82.35, text: "I got a river for a soul" },
            { time: 84.58, text: "And baby, you're a boat" },
            { time: 86.58, text: "Baby, you're my only reason" },
            { time: 89.11, text: "If I didn't have you, there would be nothing left (nothing left)" },
            { time: 92.41, text: "The shell of a man who could never be his best (be his best)" },
            { time: 95.89, text: "If I didn't have you, I'd never see the sun (see the sun)" },
            { time: 99.4, text: "You taught me how to be someone, yeah" },
            { time: 103.19, text: "All my life, you stood by me" },
            { time: 106.85, text: "When no one else was ever behind me" },
            { time: 110.14, text: "All these lights, they can't blind me" },
            { time: 113.78, text: "With your love, nobody can drag me down" },
            { time: 119.47, text: "Nobody, nobody (hey)" },
            { time: 122.11, text: "Nobody can drag me down" },
            { time: 126.38, text: "Nobody, nobody (hey)" },
            { time: 128.92, text: "Nobody can drag me-" },
            { time: 131.06, text: "All my life, you stood by me" },
            { time: 134.71, text: "When no one else was ever behind me" },
            { time: 137.96, text: "All these lights, they can't blind me" },
            { time: 141.71, text: "With your love, nobody can drag me down" },
            { time: 144.78, text: "All my life, you stood by me" },
            { time: 148.46, text: "When no one else was ever behind me" },
            { time: 151.9, text: "All these lights, they can't blind me" },
            { time: 155.6, text: "With your love, nobody can drag me down" },
            { time: 161.28, text: "Nobody, nobody (hey)" },
            { time: 163.69, text: "Nobody can drag me down (down), yeah" },
            { time: 168.09, text: "Nobody, nobody (hey)" },
            { time: 170.78, text: "Nobody can drag me down" },
            { time: 175.09, text: "Nobody, nobody (hey)" },
            { time: 177.65, text: "Nobody can drag me down (down)" },
            { time: 182.02, text: "Nobody, nobody (hey)" },
            { time: 184.56, text: "Nobody can drag me down" },
            { time: 186.8, text: "♪" }
        ]
    },
    {
        id: 9,
        title: "Merry Christmas, i miss you",
        artist: "Alex Crichton",
        album: "Merry Christmas, i miss you",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/db/68/80/db6880fb-9032-b17a-d082-6f00620c50c4/3b72e539-6ee5-430b-bea2-4e1c9cddd475.jpg/600x600bb.jpg",
        audioSrc: "audio/Alex Crichton - Merry Christmas, i miss you (Lyrics).mp3",
        lyrics: [
            { time: 19.46, text: "You walked in the party, your coat was untied" },
            { time: 28.78, text: "Slamming the door 'cause it's colder outside" },
            { time: 37.56, text: "Now I won't forget that moment like the blink of an eye" },
            { time: 46.95, text: "You're off to the beach now 'till the weather get's nice" },
            { time: 53.84, text: "But what if I call?" },
            { time: 58.14, text: "And you pick up the phone" },
            { time: 62.91, text: "And I use this holiday to make my way to your ghost" },
            { time: 72.08, text: "Or what if you're lonely, and you know I am too" },
            { time: 81.34, text: "And I get the chance to say" },
            { time: 84.19, text: "\"Merry Christmas, I miss you.\"" },
            { time: 90.43, text: "I miss you" },
            { time: 97.28, text: "So I'll hang the lights, hope you'll see them from space" },
            { time: 106.01, text: "And all that I want on my list is that look, on your face" },
            { time: 114.87, text: "When I said \"November's early to be playing these songs.\"" },
            { time: 124.26, text: "Now when I look back, I can see I was wrong" },
            { time: 131.16, text: "So what if I call?" },
            { time: 135.62, text: "And you pick up the phone" },
            { time: 140.45, text: "And I use this holiday to make my way to your ghost" },
            { time: 149.54, text: "Or what if you're lonely, and you know I am too" },
            { time: 158.72, text: "And I get the chance to say" },
            { time: 161.84, text: "\"Merry Christmas, I miss you.\"" },
            { time: 167.7, text: "I miss you" },
            { time: 172.6, text: "You know it's true" },
            { time: 176.82, text: "Yeah, I miss you" },
            { time: 181.63, text: "You know it's true" },
            { time: 186.23, text: "So what if I call? (Yeah, I miss you)" },
            { time: 190.79, text: "And you pick up the phone (You know it's true)" },
            { time: 195.28, text: "And I use this holiday to make my way to your ghost" },
            { time: 201.38, text: "(Yeah, I miss you, you know it's true)" },
            { time: 204.55, text: "Or what if you're lonely, and you know I am too (I miss you)" },
            { time: 213.0, text: "And I get the chance to say" },
            { time: 216.53, text: "\"Merry Christmas, I miss you.\"" },
            { time: 222.55, text: "I miss you" },
            { time: 225.67, text: "♪" }
        ]
    },
    {
        id: 10,
        title: "Merry Christmas, Please Don't Call",
        artist: "Bleachers",
        album: "Merry Christmas, Please Don't Call",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ce/63/85/ce638513-9167-2a5c-2c4a-94b4c8f9f88f/198704216732_Cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Bleachers - Merry Christmas, Please Don't Call (Official Music Video).mp3",
        lyrics: [
            { time: 5.54, text: "To the temple of your uptight is the flicker of a street light" },
            { time: 10.85, text: "You know this moment, don't you?" },
            { time: 13.8, text: "And time is strangely calm now, 'cause everybody's gone" },
            { time: 18.29, text: "It's just you and your anger" },
            { time: 22.36, text: "Oh, golden boy, don't act like you were kind" },
            { time: 27.84, text: "You were mine, but you were awful every time" },
            { time: 31.01, text: "So don't tell them what you told me" },
            { time: 33.04, text: "Don't hold me like you know me" },
            { time: 35.96, text: "I would rather burn forever" },
            { time: 39.75, text: "But you should know" },
            { time: 41.55, text: "That I died slow" },
            { time: 44.1, text: "Running through the halls of your haunted home" },
            { time: 48.27, text: "And the toughest part" },
            { time: 50.01, text: "Is that we both know" },
            { time: 52.09, text: "What happened to you, why you're out on your own" },
            { time: 57.36, text: "Merry Christmas, please don't call" },
            { time: 65.19, text: "You really left me on the line, kid" },
            { time: 67.77, text: "Holding all your baggage" },
            { time: 70.62, text: "You know I'm not your father" },
            { time: 73.82, text: "Who says welcome to your uptight" },
            { time: 75.88, text: "While it flickers like a street light" },
            { time: 79.07, text: "He flickers through your damage" },
            { time: 82.04, text: "Oh golden boy, you shined a light on our home" },
            { time: 87.26, text: "And at your best you were magic, we were sold" },
            { time: 91.01, text: "But don't tell em what you told me" },
            { time: 92.87, text: "Don't even tell em that you know me" },
            { time: 96.08, text: "I would rather burn forever" },
            { time: 99.76, text: "But you should know that I died slow" },
            { time: 103.85, text: "Running through the halls of your haunted home" },
            { time: 108.03, text: "And the toughest part is that we both know" },
            { time: 111.84, text: "What happened to you" },
            { time: 114.21, text: "Why you're out on your own" },
            { time: 117.18, text: "Merry Christmas, please don't call" },
            { time: 124.95, text: "One ticket out of your heavy gaze" },
            { time: 129.1, text: "I want one ticket off of your carousel" },
            { time: 133.43, text: "I want one ticket out of your heavy gaze" },
            { time: 137.58, text: "I want one ticket off of your carousel" },
            { time: 142.11, text: "But you should know that I die slow" },
            { time: 147.06, text: "Running through the halls of your haunted home" },
            { time: 150.85, text: "And the toughest part is that we both know" },
            { time: 154.97, text: "What happened to you" },
            { time: 156.93, text: "Why you're out on your own" },
            { time: 160.15, text: "Merry Christmas, please don't call" },
            { time: 164.44, text: "Merry Christmas, I'm not yours at all" },
            { time: 168.72, text: "Merry Christmas, please don't call me" },
            { time: 174.65, text: "Please don't call me" },
            { time: 179.2, text: "Please don't call me" },
            { time: 183.5, text: "Please don't call me" },
            { time: 190.41, text: "♪" }
        ]
    },
    {
        id: 11,
        title: "Roxanne",
        artist: "Chase Atlantic",
        album: "Nostalgia",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/d1/3f/90d13fba-4c95-f97a-511c-145a39df9e68/5055834135256.jpg/600x600bb.jpg",
        audioSrc: "audio/CHASE ATLANTIC-ROXANNE (LYRICS).mp3",
        lyrics: [
            { time: 34.68, text: "Tell me your name" },
            { time: 37.05, text: "I don't ever wanna let you down" },
            { time: 41.42, text: "No, I just wanna kiss your lips in the rain" },
            { time: 45.13, text: "You know I'll pull you closer if you start to drown, drown" },
            { time: 52.58, text: "And then my hand meets your thighs" },
            { time: 55.8, text: "With that look in your eyes, I can never forget" },
            { time: 61.3, text: "And then it's back to my room" },
            { time: 64.23, text: "What a wonderful view, love" },
            { time: 66.36, text: "And that's when I said" },
            { time: 69.87, text: "Roxanne" },
            { time: 73.5, text: "Why'd you wanna leave me on my own now" },
            { time: 77.93, text: "Roxanne?" },
            { time: 82.39, text: "I think we should go but I'm not sure enough" },
            { time: 87.19, text: "Roxanne" },
            { time: 89.16, text: "I'm driving somewhere far away from out of town" },
            { time: 92.83, text: "No, I'm falling deep within your eyes like cocaine" },
            { time: 97.04, text: "I'm hoping that you'll be there when I'm coming down, down" },
            { time: 105.14, text: "And you know that you've got to believe me, no, no" },
            { time: 114.58, text: "And I know that we have to try, now I say" },
            { time: 121.66, text: "Roxanne" },
            { time: 125.6, text: "Why'd you wanna leave me on my own now" },
            { time: 130.68, text: "Roxanne?" },
            { time: 134.63, text: "I think we should go but I'm not sure enough" },
            { time: 139.47, text: "And now it's burning my mind" },
            { time: 141.61, text: "That you left me inside" },
            { time: 143.57, text: "With your lips and your thighs" },
            { time: 146.08, text: "You pull them closer to mine" },
            { time: 147.61, text: "Roxanne" },
            { time: 151.68, text: "Why'd you wanna leave me, leave me" },
            { time: 155.1, text: "Roxanne?" },
            { time: 160.1, text: "♪" },
            { time: 174.75, text: "Roxanne, Roxanne" },
            { time: 182.24, text: "Why'd you wanna leave me" },
            { time: 184.15, text: "Leave me on my own" },
            { time: 187.07, text: "Leave me, leave me, Roxanne?" },
            { time: 191.48, text: "And now it's burning my mind" },
            { time: 193.84, text: "That you left me inside" },
            { time: 195.88, text: "With your lips and your thighs" },
            { time: 197.78, text: "You pull them closer to mine" },
            { time: 200.59, text: "Roxanne" },
            { time: 204.24, text: "I think we should go but I'm not sure enough" },
            { time: 209.84, text: "Roxanne" },
            { time: 211.49, text: "♪" }
        ]
    },
    {
        id: 12,
        title: "Umaasa",
        artist: "Calein",
        album: "Umaasa",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/23/30/dc/2330dc81-31f7-e7fb-bb57-0f775dde48c2/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Calein - Umaasa (Official Lyric Video).mp3",
        lyrics: [
            { time: 29.19, text: "Nilibot ang tahanan" },
            { time: 33.8, text: "Tagpuan, wala ka" },
            { time: 39.4, text: "Pa'no hihilom ang sugat" },
            { time: 46.23, text: "Na gawa sa pagmamahalan?" },
            { time: 52.97, text: "Pagmamahalan" },
            { time: 58.67, text: "Buong araw kang inisip" },
            { time: 63.58, text: "Mga sulat mo'y binasa" },
            { time: 69.33, text: "Pa'no ba titigil ang pagluha" },
            { time: 76.07, text: "Na gawa sa pagmamahalan?" },
            { time: 83.04, text: "Pagmamahalan" },
            { time: 88.37, text: "Magbabalik ang nakaraan" },
            { time: 93.18, text: "Ibabalik ang pinagmulan" },
            { time: 98.42, text: "Umaasa" },
            { time: 103.22, text: "Umaasa" },
            { time: 108.4, text: "Magbabalik ang nakaraan" },
            { time: 113.43, text: "Ibabalik ang pinagmulan" },
            { time: 118.27, text: "Umaasa" },
            { time: 123.32, text: "Umaasa" },
            { time: 127.29, text: "♪" },
            { time: 148.9, text: "Hinanap ko ang dating" },
            { time: 153.59, text: "Kasiyahan, kalungkutan" },
            { time: 159.18, text: "Aking iaalay ang himig" },
            { time: 165.99, text: "Na gawa sa pagmamahalan" },
            { time: 172.89, text: "Pagmamahalan" },
            { time: 178.24, text: "Magbabalik ang nakaraan" },
            { time: 183.4, text: "Ibabalik ang pinagmulan" },
            { time: 188.21, text: "Umaasa" },
            { time: 193.25, text: "Umaasa" },
            { time: 198.42, text: "Magbabalik ang nakaraan" },
            { time: 203.29, text: "Ibabalik ang pinagmulan" },
            { time: 208.35, text: "Umaasa" },
            { time: 213.37, text: "Umaasa" },
            { time: 217.22, text: "♪" },
            { time: 239.06, text: "Nilibot ang tahanan" },
            { time: 244.21, text: "At ating dating tagpuan" },
            { time: 248.33, text: "Umaasa" },
            { time: 253.34, text: "Umaasa" },
            { time: 258.33, text: "Magbabalik ang nakaraan" },
            { time: 263.26, text: "Ibabalik ang pinagmulan" },
            { time: 268.28, text: "Umaasa" },
            { time: 273.33, text: "Umaasa" },
            { time: 278.19, text: "Magbabalik ang nakaraan" },
            { time: 283.29, text: "Ibabalik ang pinagmulan" },
            { time: 288.35, text: "Umaasa" },
            { time: 293.24, text: "Umaasa" },
            { time: 298.36, text: "(Magbabalik ang-) nilibot ang tahanan" },
            { time: 303.92, text: "Tagpuan, wala ka" },
            { time: 308.3, text: "Umaasa" },
            { time: 313.26, text: "Umaasa" },
            { time: 319.15, text: "Nilibot ang tahanan" },
            { time: 323.86, text: "Tagpuan, wala ka" },
            { time: 328.34, text: "Umaasa" },
            { time: 332.12, text: "♪" }
        ]
    },
    {
        id: 13,
        title: "HER",
        artist: "Chase Atlantic",
        album: "PHASES",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/d1/a6/63/d1a66336-de0b-d541-df25-3bcd3e14f7ea/4050538506297.jpg/600x600bb.jpg",
        audioSrc: "audio/Chase Atlantic - HER (Official Music Video).mp3",
        lyrics: [
            { time: 17.15, text: "Oh, Giuseppe steppin', she ain't moonwalkin'" },
            { time: 21.53, text: "Copped Balenciagas, then we drew on 'em" },
            { time: 25.04, text: "Molly had her shaking like an asthmatic" },
            { time: 27.68, text: "She told me to take the drugs in public, I ain't backtracking" },
            { time: 31.05, text: "Woah, she's high fashioned" },
            { time: 33.71, text: "Took me to the back room in Chanel so we could smash and" },
            { time: 36.98, text: "Everything is Louis V and Louis V her casket" },
            { time: 40.65, text: "And she's so good at walking out because her dad did" },
            { time: 44.03, text: "She says \"Ooh, we could do whatever you want" },
            { time: 49.7, text: "But boy, don't go falling in love" },
            { time: 53.58, text: "You can't stay with me" },
            { time: 55.63, text: "All you'll ever have is one day with me\"" },
            { time: 58.49, text: "Ooh, she said \"We can do whatever you want" },
            { time: 63.15, text: "You could fuck me in the back of your car\"" },
            { time: 66.29, text: "But I won't ever get to stay with her" },
            { time: 69.35, text: "'Cause all I ever had was one day with her" },
            { time: 72.56, text: "Ooh, think her boyfriend might be Christian Dior" },
            { time: 76.68, text: "I'm getting feelings that I didn't before" },
            { time: 80.05, text: "And all I wanna do is stay with her" },
            { time: 82.98, text: "But I know all I have is one day with her" },
            { time: 86.61, text: "Only time she listens, when the cash talks" },
            { time: 89.39, text: "Molly, Percocets, we were screamin' mask off, no" },
            { time: 93.89, text: "With no perception of time, it's almost quarter-to-five, yeah" },
            { time: 97.56, text: "I had to hop in and drive, baby woah" },
            { time: 100.68, text: "I might crash it, I can count a hundred thousand dollars worth of damage" },
            { time: 105.73, text: "Dolce & Gabbana, whole interior was fabric" },
            { time: 109.23, text: "She's always hiding in designer, 'cause her dad left, she said" },
            { time: 113.53, text: "Ooh, she said \"We can do whatever you want" },
            { time: 118.03, text: "You can fuck me in the back of your car\"" },
            { time: 121.26, text: "But I won't ever get to stay with her" },
            { time: 124.2, text: "'Cause all I ever had was one day with her" },
            { time: 127.1, text: "Ooh, think her boyfriend might be Christian Dior" },
            { time: 131.51, text: "I'm getting feelings that I didn't before" },
            { time: 135.16, text: "And all I wanna do is stay with her" },
            { time: 138.11, text: "But I know all I have is one day with her" },
            { time: 141.48, text: "I could live forever and a day with her" },
            { time: 144.8, text: "I don't want to live it if it ain't with her" },
            { time: 148.61, text: "I could go up out to outer space with her" },
            { time: 151.66, text: "All I need is one more day with her" },
            { time: 154.55, text: "Ooh, she's always been running from love" },
            { time: 159.33, text: "'Cause daddy didn't give her enough" },
            { time: 162.87, text: "But I can make the pain better" },
            { time: 165.61, text: "All I need is one more day with her" },
            { time: 168.56, text: "♪" }
        ]
    },
    {
        id: 14,
        title: "Swim",
        artist: "Chase Atlantic",
        album: "Chase Atlantic",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d1/36/7e/d1367ea2-40e5-c689-5241-290f1b0daaf9/093624914174.jpg/600x600bb.jpg",
        audioSrc: "audio/Chase Atlantic - SWIM (Official Music Video).mp3",
        lyrics: [
            { time: 21.22, text: "I bet you feel it now, baby" },
            { time: 25.12, text: "Especially since we've only known each other one day" },
            { time: 29.23, text: "But, I've got to work shit out, baby" },
            { time: 32.98, text: "I'm exorcising demons, got 'em running 'round the block now" },
            { time: 37.63, text: "Location drop, now" },
            { time: 39.7, text: "Pedal to the floor like you running from the cops now" },
            { time: 43.42, text: "Oh, what a cop out" },
            { time: 47.03, text: "You picked a dance with the devil, and you lucked out (yuh)" },
            { time: 52.18, text: "The water's getting colder, let me in your ocean, swim" },
            { time: 57.27, text: "Out in California, I've been forward stroking, swim" },
            { time: 61.15, text: "So hard to ignore ya, 'specially when I'm smoking, swim" },
            { time: 65.29, text: "World is on my shoulders, keep your body open, swim" },
            { time: 69.23, text: "I'm swimming, I'm swimming, I'm swimming, yeah" },
            { time: 73.47, text: "I'm swimming, I'm swimming, I'm swimming, yeah" },
            { time: 77.26, text: "Out in California, I've been forward stroking, swim" },
            { time: 80.85, text: "So hard to ignore ya, keep your body open, swim" },
            { time: 86.85, text: "♪" },
            { time: 92.73, text: "Pop a couple pills in the daytime, uh" },
            { time: 94.75, text: "Heard you got a friend, what her head like? Uh" },
            { time: 96.74, text: "Probably should've fucked on the first night, uh" },
            { time: 98.6, text: "Now I gotta wait for the green light, uh" },
            { time: 100.66, text: "I don't wanna wait for no green light, uh" },
            { time: 102.57, text: "Narcolepsy got me feeling stage fright, uh" },
            { time: 104.51, text: "Luckily, I float at insane heights, yeah" },
            { time: 106.58, text: "Luckily, luckily, luckily, yah" },
            { time: 109.35, text: "Location drop, now" },
            { time: 111.21, text: "Pedal to the floor like you running from the cops now" },
            { time: 115.43, text: "Oh, what a cop out, uh" },
            { time: 119.61, text: "You picked a dance with the devil, and you lucked out, yeah" },
            { time: 124.47, text: "The water's getting colder, let me in your ocean, swim" },
            { time: 129.29, text: "Out in California, I've been forward stroking, swim" },
            { time: 133.2, text: "So hard to ignore ya, 'specially when I'm smoking, swim" },
            { time: 137.19, text: "World is on my shoulders, keep your body open, swim" },
            { time: 141.22, text: "I'm swimming, I'm swimming, I'm swimming, yeah" },
            { time: 145.33, text: "I'm swimming, I'm swimming, I'm swimming, yeah" },
            { time: 149.19, text: "Out in California, I've been forward stroking, swim" },
            { time: 153.16, text: "So hard to ignore ya, keep your body open, swim" },
            { time: 159.84, text: "Swim, push the water to the edge and watch it drip" },
            { time: 164.8, text: "Check your footing, don't get caught up in the rip, no" },
            { time: 169.19, text: "I know I said I'd call, I never did, no" },
            { time: 174.62, text: "Swim, swim now" },
            { time: 176.98, text: "I can take you even though I've never been there" },
            { time: 180.75, text: "The tide has currently been thrashing around me again and again, yeah" },
            { time: 184.82, text: "I've been drowning for a minute, your body keeps pulling me in, girl" },
            { time: 189.01, text: "The water's getting colder, let me in your ocean, swim" },
            { time: 193.22, text: "Out in California, I've been forward stroking, swim" },
            { time: 197.29, text: "So hard to ignore ya, 'specially when I'm smoking, swim" },
            { time: 201.17, text: "World is on my shoulders, keep your body open, swim" },
            { time: 205.75, text: "I'm swimming, I'm swimming, I'm swimming, yeah" },
            { time: 209.64, text: "I'm swimming, I'm swimming, I'm swimming, yeah" },
            { time: 213.31, text: "Out in California, I've been forward stroking, swim" },
            { time: 217.35, text: "So hard to ignore ya, keep your body open, swim" },
            { time: 221.0, text: "♪" }
        ]
    },
    {
        id: 15,
        title: "Consume",
        artist: "Chase Atlantic, Goon Des Garcons",
        album: "Chase Atlantic",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d1/36/7e/d1367ea2-40e5-c689-5241-290f1b0daaf9/093624914174.jpg/600x600bb.jpg",
        audioSrc: "audio/Chase Atlantic - _Consume_ feat. Goon Des Garcons (Official Audio).mp3",
        lyrics: [
            { time: 1.01, text: "本当は私気づいてたんです" },
            { time: 3.95, text: "あなたが私を見ていてくれたこと" },
            { time: 9.77, text: "♪" },
            { time: 14.28, text: "Alright, alright, whoa" },
            { time: 16.84, text: "Why you pointing at me with that knife?" },
            { time: 19.89, text: "I've been cutting corners all my life, girl" },
            { time: 22.85, text: "The terror doesn't blossom overnight, no" },
            { time: 26.86, text: "She's running through the city in a rampage" },
            { time: 30.41, text: "Pressing on her fingers 'til the bones break" },
            { time: 33.48, text: "There's blood all in her nose from the propane" },
            { time: 36.47, text: "But a needle to the skin will make the pain fade" },
            { time: 39.59, text: "Yeah, ah-ah" },
            { time: 41.61, text: "This is what I do, ah-ah" },
            { time: 45.3, text: "Take another bite, ah-ah" },
            { time: 48.62, text: "Big enough to chew" },
            { time: 52.99, text: "She said, \"Careful, or you'll lose it\"" },
            { time: 56.66, text: "But, girl, I'm only human" },
            { time: 59.82, text: "And I know there's a blade where your heart is" },
            { time: 63.13, text: "And you know how to use it" },
            { time: 66.35, text: "And you can take my flesh if you want, girl" },
            { time: 69.7, text: "But, baby, don't abuse it" },
            { time: 73.01, text: "These voices in my head screaming, \"Run, now\"" },
            { time: 76.34, text: "I'm praying that they're human" },
            { time: 78.7, text: "Rollin', rollin', rolling back your eyes through your mind like" },
            { time: 85.14, text: "Oh, whoa, the pressure in the gland's tight" },
            { time: 92.02, text: "Yeah, whoa, yeah, it's either kill or be killed like" },
            { time: 98.67, text: "Oh, whoa, the blood is either poured or it's spilt like" },
            { time: 104.91, text: "Yeah, ah-ah" },
            { time: 107.43, text: "This is what I do, ah-ah" },
            { time: 110.92, text: "Take another bite, ah-ah" },
            { time: 114.23, text: "Big enough to chew" },
            { time: 118.81, text: "She said, \"Careful, or you'll lose it\"" },
            { time: 122.24, text: "But, girl, I'm only human" },
            { time: 125.58, text: "And I know there's a blade where your heart is" },
            { time: 128.8, text: "And you know how to use it" },
            { time: 132.18, text: "And you can take my flesh if you want, girl" },
            { time: 135.38, text: "But, baby, don't abuse it" },
            { time: 138.66, text: "These voices in my head screaming, \"Run, now\"" },
            { time: 141.94, text: "I'm praying that they're human" },
            { time: 145.59, text: "Alright, alright, whoa" },
            { time: 147.84, text: "Love you but you cannot spend the night" },
            { time: 150.51, text: "Nah, I've been alone almost all my life, girl" },
            { time: 154.59, text: "And shit like that don't change up overnight, sweet" },
            { time: 158.86, text: "I let you sleep in my tee (tee)" },
            { time: 161.22, text: "Tell me the things that you don't normally tweet" },
            { time: 164.22, text: "Acid and LSD and smokin' blunts on the beach" },
            { time: 167.24, text: "69 down 69, so we can both get a piece, yeah" },
            { time: 171.88, text: "I've been cutting corners like my whole life" },
            { time: 174.34, text: "Backstabbing bitches tryna kill me with the whole knife" },
            { time: 177.68, text: "Day I die'll be the only day a nigga ghostwrite" },
            { time: 180.84, text: "When I go, they'll treat me like a god if this shit goes right" },
            { time: 184.74, text: "She said, \"Careful, or you'll lose it\"" },
            { time: 187.99, text: "But, girl, I'm only human" },
            { time: 191.29, text: "And I know there's a blade where your heart is" },
            { time: 194.65, text: "And you know how to use it" },
            { time: 197.94, text: "And you can take my flesh if you want, girl" },
            { time: 201.11, text: "But, baby, don't abuse it" },
            { time: 204.33, text: "These voices in my head screaming, \"Run, now\"" },
            { time: 207.76, text: "I'm praying that they're human" },
            { time: 211.35, text: "Please understand that I'm trying my hardest" },
            { time: 214.45, text: "My head's a mess, but I'm trying regardless" },
            { time: 218.0, text: "Anxiety is one hell of a problem" },
            { time: 221.26, text: "She's latching onto me, I can't resolve it" },
            { time: 224.5, text: "It's not right, it's not fair, it's not fair, it's not fair" },
            { time: 232.19, text: "It's no fair, it's no fair" },
            { time: 235.56, text: "Oh, no, no, no (ooh-ooh)" },
            { time: 240.94, text: "♪" },
            { time: 244.38, text: "Don't run, don't run" },
            { time: 245.45, text: "♪" }
        ]
    },
    {
        id: 16,
        title: "Bags",
        artist: "Clairo",
        album: "Immunity",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f2/47/06/f24706bc-a90c-f730-bd8a-586ddde8af3e/829299184631.jpg/600x600bb.jpg",
        audioSrc: "audio/Clairo - Bags.mp3",
        lyrics: [
            { time: 12.41, text: "Every second counts" },
            { time: 14.96, text: "I don't wanna talk to you anymore, and" },
            { time: 21.78, text: "All these little games" },
            { time: 23.26, text: "You can call me by the name I gave you" },
            { time: 28.49, text: "Yesterday, yeah" },
            { time: 35.44, text: "♪" },
            { time: 39.57, text: "Every minute counts" },
            { time: 42.45, text: "I don't wanna watch TV anymore, yeah" },
            { time: 49.08, text: "Can you figure me out?" },
            { time: 51.34, text: "Just doin' to waste more time on the couch" },
            { time: 57.72, text: "Can you see me? I'm waiting for the right time" },
            { time: 62.22, text: "I can't read you, but if you want, the pleasure's all mine" },
            { time: 66.78, text: "Can you see me using everything to hold back?" },
            { time: 71.37, text: "I guess this could be worse" },
            { time: 73.25, text: "Walkin' out the door with your bags" },
            { time: 77.77, text: "Walkin' out the door with your bags" },
            { time: 82.36, text: "Walkin' out the door with your bags" },
            { time: 86.94, text: "Walkin' out the door with your bags" },
            { time: 91.37, text: "♪" },
            { time: 113.0, text: "Pour your glass of wine" },
            { time: 115.26, text: "Mitchell told me I should be just fine, yeah" },
            { time: 122.21, text: "Cases under the bed" },
            { time: 124.37, text: "Spill it open, let it rush to my head" },
            { time: 130.83, text: "I don't wanna be forward, I don't wanna cut corners" },
            { time: 135.19, text: "Savor this with everything I have inside of me" },
            { time: 140.01, text: "I'm not the type to run, I know that we're having fun" },
            { time: 145.24, text: "But what's the rush? Kissing, then my cheeks are so flushed" },
            { time: 151.01, text: "♪" },
            { time: 167.82, text: "Tell you how I felt" },
            { time: 170.01, text: "Sugar coated melting in your mouth" },
            { time: 177.06, text: "Pardon my emotions" },
            { time: 179.46, text: "I should probably keep it all to myself" },
            { time: 183.76, text: "Know you'd make fun of me" },
            { time: 188.31, text: "Know you'd make fun of me" },
            { time: 192.87, text: "Know you'd make fun of me" },
            { time: 197.43, text: "Know you'd make fun of me" },
            { time: 200.86, text: "♪" },
            { time: 203.99, text: "Can you see me? I'm waiting for the right time" },
            { time: 208.53, text: "I can't read you, but if you want, the pleasure's all mine" },
            { time: 213.02, text: "Can you see me using everything to hold back?" },
            { time: 217.57, text: "I guess this could be worse" },
            { time: 219.4, text: "Walkin' out the door with your bags" },
            { time: 224.1, text: "Walkin' out the door with your bags" },
            { time: 228.42, text: "Walkin' out the door with your bags" },
            { time: 233.02, text: "Walkin' out the door with your bags" },
            { time: 235.54, text: "♪" }
        ]
    },
    {
        id: 17,
        title: "Colors",
        artist: "Halsey",
        album: "Complementary Colors",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/ae/44/d8/ae44d802-08b7-06d1-1d01-07cddd157241/00602547864475.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/Halsey - Colors (Lyrics).mp3",
        lyrics: [
            { time: 5.05, text: "Your little brother never tells you but he loves you so" },
            { time: 9.99, text: "You said your mother only smiled on her TV show" },
            { time: 14.63, text: "You're only happy when your sorry head is filled with dope" },
            { time: 19.87, text: "I hope you make it to the day you're 28 years old" },
            { time: 24.86, text: "You're dripping like a saturated sunrise" },
            { time: 29.85, text: "You're spilling like an overflowing sink" },
            { time: 34.33, text: "You're ripped at every edge but you're a masterpiece" },
            { time: 39.05, text: "And now you're tearing through the pages and the ink" },
            { time: 45.44, text: "Everything is blue" },
            { time: 47.9, text: "His pills, his hands, his jeans" },
            { time: 50.76, text: "And now I'm covered in the colors" },
            { time: 53.57, text: "Pulled apart at the seams" },
            { time: 55.41, text: "And it's blue" },
            { time: 60.48, text: "And it's blue" },
            { time: 64.95, text: "Everything is grey" },
            { time: 67.11, text: "His hair, his smoke, his dreams" },
            { time: 70.13, text: "And now he's so devoid of color" },
            { time: 72.81, text: "He don't know what it means" },
            { time: 74.87, text: "And he's blue" },
            { time: 79.59, text: "And he's blue" },
            { time: 84.49, text: "You were a vision in the morning" },
            { time: 87.09, text: "When the light came through" },
            { time: 89.12, text: "I know I've only felt religion when I've lied with you" },
            { time: 93.83, text: "You said you'll never be forgiven 'til your boys are too" },
            { time: 98.78, text: "And I'm still waking every morning but it's not with you" },
            { time: 104.15, text: "You're dripping like a saturated sunrise" },
            { time: 108.74, text: "You're spilling like an overflowing sink" },
            { time: 113.4, text: "You're ripped at every edge but you're a masterpiece" },
            { time: 117.99, text: "And now you're tearing through the pages and the ink" },
            { time: 122.42, text: "Everything is blue" },
            { time: 124.78, text: "His pills, his hands, his jeans" },
            { time: 127.65, text: "And now I'm covered in the colors" },
            { time: 130.33, text: "Pulled apart at the seams" },
            { time: 132.41, text: "And it's blue" },
            { time: 137.12, text: "And it's blue" },
            { time: 141.69, text: "Everything is grey" },
            { time: 143.78, text: "His hair, his smoke, his dreams" },
            { time: 147.05, text: "And now he's so devoid of color" },
            { time: 149.54, text: "He don't know what it means" },
            { time: 151.71, text: "And he's blue" },
            { time: 156.35, text: "And he's blue" },
            { time: 160.87, text: "♪" },
            { time: 164.1, text: "You were red and you liked me 'cause I was blue" },
            { time: 171.08, text: "But you touched me and suddenly I was a lilac sky" },
            { time: 176.26, text: "And you decided purple just wasn't for you" },
            { time: 180.28, text: "Everything is blue" },
            { time: 182.34, text: "His pills, his hands, his jeans" },
            { time: 185.28, text: "And now I'm covered in the colors" },
            { time: 187.82, text: "Pulled apart at the seams" },
            { time: 190.15, text: "And it's blue" },
            { time: 194.76, text: "And it's blue" },
            { time: 199.11, text: "Everything is grey" },
            { time: 201.55, text: "His hair, his smoke, his dreams" },
            { time: 204.45, text: "And now he's so devoid of color" },
            { time: 207.13, text: "He don't know what it means" },
            { time: 209.28, text: "And he's blue" },
            { time: 213.94, text: "And he's blue" },
            { time: 218.39, text: "Everything is blue" },
            { time: 223.22, text: "Everything is blue" },
            { time: 228.14, text: "Everything is blue" },
            { time: 232.78, text: "Everything is blue" },
            { time: 235.66, text: "♪" }
        ]
    },
    {
        id: 18,
        title: "Hoodie",
        artist: "Hey Violet",
        album: "From the Outside",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/42/7a/bf/427abf52-04b9-2802-5ce3-82bfb0f938cf/00602557570885.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/Hey Violet - Hoodie (Official Music Video).mp3",
        lyrics: [
            { time: 20.69, text: "You'd probably think I was psychotic (if you knew)" },
            { time: 26.09, text: "What I still got in my closet (sad but true)" },
            { time: 31.09, text: "I slip it on over my shoulders" },
            { time: 33.73, text: "Something I'll never get over" },
            { time: 36.23, text: "It makes me feel a little bit closer to you" },
            { time: 40.18, text: "I can't keep your love" },
            { time: 42.15, text: "I can't keep your kiss" },
            { time: 44.04, text: "Gave you everything and all I got was this" },
            { time: 48.2, text: "I'm still rocking your hoodie" },
            { time: 51.29, text: "And chewing on the strings" },
            { time: 53.82, text: "It makes me think about you" },
            { time: 56.18, text: "So I wear it when I sleep" },
            { time: 58.85, text: "I kept the broken zipper" },
            { time: 61.42, text: "And cigarette burns" },
            { time: 63.71, text: "Still rocking your hoodie" },
            { time: 66.53, text: "Baby, even though it hurts" },
            { time: 69.19, text: "Still rocking your" },
            { time: 72.07, text: "I used to put my hand in your pockets (holding on)" },
            { time: 76.95, text: "The smell of your cologne is still on it (but you're still gone)" },
            { time: 81.94, text: "I slip it on over my shoulders" },
            { time: 84.51, text: "Someone I'll never get over" },
            { time: 86.95, text: "It makes me feel a little bit closer to you" },
            { time: 91.0, text: "I can't keep your love" },
            { time: 92.78, text: "I can't keep your kiss" },
            { time: 94.66, text: "Gave you everything and all I got was this" },
            { time: 98.68, text: "I'm still rocking your hoodie" },
            { time: 101.84, text: "And chewing on the strings" },
            { time: 104.28, text: "It makes me think about you" },
            { time: 106.72, text: "So I wear it when I sleep" },
            { time: 109.55, text: "I kept the broken zipper" },
            { time: 112.06, text: "And cigarette burns" },
            { time: 114.61, text: "Still rocking your hoodie" },
            { time: 116.85, text: "Baby, even though it hurts" },
            { time: 119.55, text: "Still rocking your hoodie" },
            { time: 121.93, text: "And chewing on the strings" },
            { time: 124.68, text: "It makes me think about you" },
            { time: 126.74, text: "So I wear it when I sleep" },
            { time: 129.79, text: "I kept the broken zipper" },
            { time: 132.13, text: "And cigarette burns" },
            { time: 134.54, text: "Still rocking your hoodie" },
            { time: 136.88, text: "Baby, even though it hurts" },
            { time: 139.55, text: "Still rocking your" },
            { time: 141.83, text: "If you want it back" },
            { time: 143.53, text: "If you want it back" },
            { time: 145.08, text: "I'm here waiting" },
            { time: 146.85, text: "Come take it back" },
            { time: 148.46, text: "Come take it back" },
            { time: 152.07, text: "If you want it back" },
            { time: 153.82, text: "If you want it back" },
            { time: 155.41, text: "I'm here waiting" },
            { time: 156.91, text: "Come take it back" },
            { time: 158.74, text: "Come take it back" },
            { time: 160.56, text: "I'm still rocking your hoodie" },
            { time: 162.92, text: "And chewing on the strings" },
            { time: 164.92, text: "It makes me think about you" },
            { time: 167.03, text: "So I wear it when I sleep" },
            { time: 170.01, text: "I kept the broken zipper" },
            { time: 172.57, text: "And cigarette burns" },
            { time: 175.12, text: "Still rocking your hoodie" },
            { time: 177.33, text: "Baby, even though it hurts" },
            { time: 180.03, text: "I'm still rocking your hoodie" },
            { time: 182.58, text: "And chewing on the strings" },
            { time: 185.05, text: "It makes me think about you" },
            { time: 187.69, text: "So I wear it when I sleep" },
            { time: 190.24, text: "I kept the broken zipper" },
            { time: 192.69, text: "And cigarette burns" },
            { time: 194.97, text: "Still rocking your hoodie" },
            { time: 197.48, text: "Baby, even though it hurts" },
            { time: 200.18, text: "Still rocking your hoodie" },
            { time: 202.7, text: "And chewing on the strings" },
            { time: 205.43, text: "It makes me think about you" },
            { time: 207.77, text: "So I wear it when I sleep" },
            { time: 210.26, text: "I kept the broken zipper" },
            { time: 212.86, text: "And cigarette burns" },
            { time: 215.31, text: "Still rocking your hoodie" },
            { time: 217.64, text: "Baby, even though it hurts" },
            { time: 220.22, text: "Still rocking your hoodie" },
            { time: 223.67, text: "♪" }
        ]
    },
    {
        id: 19,
        title: "Arch & Point",
        artist: "Miguel",
        album: "Kaleidoscope Dream",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a1/56/ac/a156acb2-068e-a616-3e56-86ca656c14ce/886443632943.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - Arch & Point (Audio).mp3",
        lyrics: [
            { time: 1.04, text: "Yeah" },
            { time: 3.06, text: "Black leather skirt and a leopard print shirt, woah" },
            { time: 9.13, text: "We could skip dinner heading straight for dessert, woah, ho-oh" },
            { time: 14.62, text: "But when it feels so good then it just come natural" },
            { time: 19.73, text: "Baby, arch your back and point your toes" },
            { time: 27.41, text: "Ballerina smart but your sex like art, oh" },
            { time: 32.77, text: "I can see rhythm is a talent that can not be taught, woah, ho-oh, babe" },
            { time: 39.02, text: "When it feels so good then it just come natural" },
            { time: 44.13, text: "Baby, arch your back, point your toes, oh" },
            { time: 52.73, text: "See, I don't suppose" },
            { time: 56.98, text: "Mhm, that every good girl knows" },
            { time: 64.55, text: "All that every bad girl knows" },
            { time: 68.09, text: "So baby, arch your back" },
            { time: 71.74, text: "And point your toes, yeah" },
            { time: 75.99, text: "Fishnet bodysuit, birthday cake, woah" },
            { time: 82.27, text: "Fetish is a pleasure you cannot be faked, woah, ho-oh" },
            { time: 87.48, text: "But when it feels this good then it just comes natural" },
            { time: 92.88, text: "Baby, arch your back and point your toes" },
            { time: 99.1, text: "Oh, Polaroid flash, baby, anything goes" },
            { time: 106.73, text: "Feeling high, don't keep your eyes closed" },
            { time: 111.87, text: "'Cause when it feels this good, baby, just come natural" },
            { time: 116.86, text: "Baby arch your" },
            { time: 121.26, text: "You know what to do" },
            { time: 123.51, text: "Yeah, baby" },
            { time: 125.64, text: "You know I don't suppose" },
            { time: 130.32, text: "Oh, that every good girl knows, yeah" },
            { time: 137.77, text: "All that every bad girl knows, yeah" },
            { time: 140.81, text: "Say, arch go back and point your toes, yeah" },
            { time: 153.85, text: "Mhm-mm-mm" },
            { time: 159.98, text: "Mhm-mm-mm" },
            { time: 165.43, text: "Baby, arch your back and point your toes" },
            { time: 171.49, text: "♪" },
            { time: 177.99, text: "Told you, I'm almost done" },
            { time: 182.85, text: "Yeah, we almost done, we here" },
            { time: 184.77, text: "Got a few more, uh, got a few more" },
            { time: 187.32, text: "Few more mixing to do and we just about done, wait" },
            { time: 190.28, text: "Tell me that, that pussy is mine (wait hold on)" },
            { time: 194.27, text: "Ayo, what is he doing?" },
            { time: 196.4, text: "Yo, we don't have time" },
            { time: 197.61, text: "♪" }
        ]
    },
    {
        id: 20,
        title: "Girl With The Tattoo Enter.lewd",
        artist: "Miguel",
        album: "All I Want Is You",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4b/85/3f/4b853f59-1e43-5e93-54cf-5a799c04ed1d/884977670820.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - Girl With The Tattoo Enter.lewd (Official Audio).mp3",
        lyrics: [
            { time: 1.5, text: "Those innocent eyes" },
            { time: 9.12, text: "That smile on your face" },
            { time: 12.63, text: "Makes it easy to trust you" },
            { time: 17.88, text: "If they only knew" },
            { time: 26.57, text: "The girl with the tattoo" },
            { time: 31.75, text: "Like I do" },
            { time: 36.89, text: "Doing what you're doing" },
            { time: 39.34, text: "Just to get to where you're going" },
            { time: 41.47, text: "Yeah, I see you baby" },
            { time: 44.46, text: "Just don't lose yourself along the way" },
            { time: 51.55, text: "No, no" },
            { time: 53.43, text: "'Cause you're doing what you're doing" },
            { time: 56.65, text: "Just to get to where you're going" },
            { time: 58.14, text: "And I see it baby" },
            { time: 62.8, text: "And too many others gon' ask" },
            { time: 66.16, text: "To say I do" },
            { time: 69.47, text: "But I knew" },
            { time: 77.11, text: "The girl with the tattoo" },
            { time: 81.68, text: "Yeah" },
            { time: 85.65, text: "Oh yeah, I knew" },
            { time: 94.01, text: "The girl with the tattoo" },
            { time: 98.83, text: "I used to know" },
            { time: 101.01, text: "♪" }
        ]
    },
    {
        id: 21,
        title: "Sure Thing",
        artist: "Miguel",
        album: "All I Want Is You",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4b/85/3f/4b853f59-1e43-5e93-54cf-5a799c04ed1d/884977670820.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - Sure Thing (Official Video).mp3",
        lyrics: [
            { time: 1.4, text: "Love you like a brother" },
            { time: 3.83, text: "Treat you like a friend" },
            { time: 6.74, text: "Respect you like a lover" },
            { time: 9.16, text: "Oh-woah, oh-woah, oh-woah" },
            { time: 12.79, text: "You could bet that, never gotta sweat that" },
            { time: 15.48, text: "You could bet that, never gotta sweat that" },
            { time: 18.41, text: "You could bet that, never gotta sweat that" },
            { time: 21.29, text: "You could bet that, never gotta sweat that" },
            { time: 23.36, text: "If you be the cash, I'll be the rubber band" },
            { time: 26.44, text: "You be the match, I will be a fuse, boom" },
            { time: 30.09, text: "Painter, baby, you could be the muse" },
            { time: 32.29, text: "I'm the reporter, baby, you could be the news" },
            { time: 35.14, text: "'Cause you're the cigarette and I'm the smoker" },
            { time: 38.2, text: "We raise the bet 'cause you're a joker" },
            { time: 41.16, text: "Checked off, you are the chalk" },
            { time: 43.99, text: "And I could be the blackboard" },
            { time: 45.47, text: "You can be the talk and I can be the walk" },
            { time: 48.39, text: "Even when the sky comes falling" },
            { time: 50.94, text: "Even when the sun don't shine" },
            { time: 54.1, text: "I got faith in you and I" },
            { time: 56.81, text: "So put your pretty little hand in mine" },
            { time: 59.89, text: "Even when we're down to the wire, babe" },
            { time: 63.21, text: "Even when it's do or die" },
            { time: 66.32, text: "We can do it, baby, simple and plain" },
            { time: 69.5, text: "'Cause this love is a sure thing" },
            { time: 71.83, text: "You could bet that, never gotta sweat that" },
            { time: 74.35, text: "You could bet that, never gotta sweat that" },
            { time: 77.5, text: "You could bet that, never gotta sweat that" },
            { time: 80.53, text: "You could bet that, never gotta sweat that" },
            { time: 82.72, text: "You could be the lover, I'll be the fighter, babe" },
            { time: 85.95, text: "If I'm the blunt, you could be the lighter, babe" },
            { time: 88.42, text: "Fire it up" },
            { time: 89.36, text: "Writer, baby, you could be the quote" },
            { time: 91.6, text: "If I'm the lyric, baby, you could be the note" },
            { time: 94.29, text: "Record that" },
            { time: 95.25, text: "Saint, I'm a sinner" },
            { time: 96.58, text: "Prize, I'm a winner and it's you" },
            { time: 98.69, text: "What did I do to deserve that?" },
            { time: 101.25, text: "Paper, baby, I'll be the pen" },
            { time: 103.24, text: "Said I'm the one, 'cause you are ten" },
            { time: 106.04, text: "Real and not pretend" },
            { time: 107.94, text: "Even when the sky comes falling" },
            { time: 110.24, text: "Even when the sun don't shine" },
            { time: 113.68, text: "I got faith in you and I" },
            { time: 116.04, text: "So put your pretty little hand in mine" },
            { time: 119.31, text: "Even when we're down to the wire, babe" },
            { time: 122.37, text: "Even when it's do or die" },
            { time: 125.82, text: "We can do it, baby, simple and plain" },
            { time: 128.72, text: "'Cause this love is a sure thing" },
            { time: 131.64, text: "Now rock with me, babe" },
            { time: 133.46, text: "Let me hold you in my arms, talk with me, babe, yeah" },
            { time: 137.57, text: "Now rock with me, babe" },
            { time: 139.29, text: "Let me hold you in my arms, talk with me, babe, yeah" },
            { time: 141.78, text: "This love, between you and I, as simple as pie, baby" },
            { time: 147.72, text: "It's such a sure thing, it's such a sure thing" },
            { time: 150.73, text: "Oh, is it a sure thing? Yeah-yeah" },
            { time: 154.98, text: "Even when the sky comes falling" },
            { time: 157.98, text: "Even when the sun don't shine" },
            { time: 160.9, text: "I got faith in you and I" },
            { time: 163.5, text: "So put your pretty little hand in mine" },
            { time: 166.96, text: "Even when we're down to the wire, babe" },
            { time: 169.83, text: "Even when it's do or die" },
            { time: 172.96, text: "We can do it, baby, simple and plain" },
            { time: 176.02, text: "'Cause this love is a sure thing" },
            { time: 178.85, text: "Love you like a brother" },
            { time: 181.45, text: "Treat you like a friend" },
            { time: 184.38, text: "Respect you like a lover" },
            { time: 187.58, text: "Oh-woah, oh-woah, oh-woah" },
            { time: 191.46, text: "♪" }
        ]
    },
    {
        id: 22,
        title: "damned",
        artist: "Miguel",
        album: "Wildheart (Deluxe)",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2e/e8/ba/2ee8baac-f1a8-b82d-53be-ab2140d09d14/886445204278.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - damned (Official Audio).mp3",
        lyrics: [
            { time: 10.43, text: "I bled my [?] wounds" },
            { time: 14.42, text: "Just place your sweet shackles on my mind" },
            { time: 18.94, text: "I'm down to white notions of waiting slow" },
            { time: 23.5, text: "No mercy, no pardon for stolen time" },
            { time: 27.1, text: "When the gravel hit the stand" },
            { time: 29.81, text: "I'm damned of loving you" },
            { time: 31.62, text: "Two palm trees in the sand" },
            { time: 34.34, text: "I'm damned of loving you" },
            { time: 37.09, text: "We set fire to these skies for our love and I'd do it all again" },
            { time: 42.58, text: "I'm damned to loving you" },
            { time: 54.37, text: "Crush the stars now there's no escape" },
            { time: 58.95, text: "Cause your walls are my favorite vice" },
            { time: 63.4, text: "Too harsh committed to hopeless fate" },
            { time: 67.04, text: "I'd serve my life sentence a thousand times, woman" },
            { time: 71.64, text: "When the gravel hit the stand" },
            { time: 74.37, text: "I'm damned of loving you" },
            { time: 76.19, text: "Two palm trees in the sand" },
            { time: 78.88, text: "I'm damned of loving you" },
            { time: 81.5, text: "We set fire to these skies for our love and I'd do it all again" },
            { time: 87.09, text: "Cause I'm damned to loving you" },
            { time: 98.76, text: "When the gravel hit the stand" },
            { time: 100.54, text: "I'm damned of loving you" },
            { time: 103.39, text: "Two palm trees in the sand" },
            { time: 105.19, text: "I'm damned of loving you" },
            { time: 107.83, text: "We set fire to these skies for our love and I'd do it all again" },
            { time: 114.1, text: "I'm damned of loving you" },
            { time: 115.66, text: "Like you own my love In every life before" },
            { time: 120.29, text: "And every life I live, all my love searching for" },
            { time: 124.77, text: "It's like you own my love In every life before" },
            { time: 129.29, text: "And every life I live, all my love searching for" },
            { time: 133.74, text: "When the gravel hit the stand" },
            { time: 136.41, text: "I'm damned of loving you" },
            { time: 138.21, text: "Two palm trees in the sand" },
            { time: 141.09, text: "I'm damned of loving you" },
            { time: 143.71, text: "We set fire to these skies for our love and I'd do it all again" },
            { time: 149.13, text: "Cause I'm damned of loving you" },
            { time: 151.0, text: "When the gravel hit the stand" },
            { time: 152.03, text: "(Just like it's always been)" },
            { time: 153.86, text: "I'm damned of loving you" },
            { time: 156.2, text: "Two palm trees in the sand" },
            { time: 157.12, text: "(Can't get away from it)" },
            { time: 158.92, text: "I'm damned of loving you" },
            { time: 161.65, text: "We set fire to these skies for our love and I'd do it all again" },
            { time: 167.12, text: "Cause I'm damned to loving you" },
            { time: 185.16, text: "I'm damned of loving" },
            { time: 194.2, text: "♪" }
        ]
    },
    {
        id: 23,
        title: "Mr. Brightside",
        artist: "The Killers",
        album: "Direct Hits",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/64/9c/11649c80-2066-dba8-77a9-df7eecae26c1/17UM1IM06937.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/The Killers - Mr. Brightside (Official Music Video).mp3",
        lyrics: [
            { time: 10.07, text: "Comin' out of my cage and I've been doin' just fine" },
            { time: 13.62, text: "Gotta, gotta be down because I want it all" },
            { time: 16.83, text: "It started out with a kiss, how did it end up like this?" },
            { time: 19.98, text: "It was only a kiss, it was only a kiss" },
            { time: 23.5, text: "Now I'm falling asleep and she's calling a cab" },
            { time: 26.75, text: "While he's having a smoke and she's taking a drag" },
            { time: 29.95, text: "Now they're goin' to bed and my stomach is sick" },
            { time: 33.15, text: "And it's all in my head, but she's touching his" },
            { time: 36.06, text: "Chest now" },
            { time: 37.46, text: "He takes off her dress now" },
            { time: 40.78, text: "Let me go" },
            { time: 49.41, text: "And I just can't look, it's killing me" },
            { time: 55.21, text: "And taking control" },
            { time: 61.97, text: "Jealousy" },
            { time: 63.65, text: "Turning saints into the sea" },
            { time: 66.61, text: "Swimming through sick lullabies" },
            { time: 70.17, text: "Choking on your alibis" },
            { time: 73.37, text: "But it's just the price I pay" },
            { time: 76.61, text: "Destiny is calling me" },
            { time: 79.77, text: "Open up my eager eyes" },
            { time: 84.97, text: "'Cause I'm Mr. Brightside" },
            { time: 101.17, text: "I'm comin' out of my cage and I've been doin' just fine" },
            { time: 104.52, text: "Gotta, gotta be down because I want it all" },
            { time: 107.8, text: "It started out with a kiss, how did it end up like this?" },
            { time: 111.03, text: "(It was only a kiss) It was only a kiss" },
            { time: 114.43, text: "Now I'm falling asleep and she's calling a cab" },
            { time: 117.43, text: "While he's havin' a smoke and she's taking a drag" },
            { time: 120.75, text: "Now they're goin' to bed and my stomach is sick" },
            { time: 123.95, text: "And it's all in my head, but she's touching his" },
            { time: 126.87, text: "Chest now" },
            { time: 128.46, text: "He takes off her dress now" },
            { time: 131.61, text: "Let me go" },
            { time: 140.27, text: "'Cause I just can't look, it's killing me" },
            { time: 145.95, text: "And taking control" },
            { time: 152.7, text: "Jealousy" },
            { time: 154.23, text: "Turning saints into the sea" },
            { time: 157.63, text: "Swimming through sick lullabies" },
            { time: 160.74, text: "Choking on your alibis" },
            { time: 164.2, text: "But it's just the price I pay" },
            { time: 167.31, text: "Destiny is calling me" },
            { time: 170.68, text: "Open up my eager eyes" },
            { time: 175.88, text: "'Cause I'm Mr. Brightside" },
            { time: 191.71, text: "I never" },
            { time: 197.83, text: "I never" },
            { time: 204.31, text: "I never" },
            { time: 210.79, text: "I never" },
            { time: 216.59, text: "♪" }
        ]
    },
    {
        id: 24,
        title: "Garden (Say It Like Dat)",
        artist: "SZA",
        album: "Ctrl",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg",
        audioSrc: "audio/SZA - Garden (Say It Like Dat) (Official Video).mp3",
        lyrics: [
            { time: 34.84, text: "Need you for the old me" },
            { time: 36.26, text: "Need you for my sanity" },
            { time: 38.41, text: "Need you to remind me where I come from" },
            { time: 42.06, text: "Can you remind me of my gravity?" },
            { time: 45.18, text: "Ground me when I'm tumbling, spiraling, plummeting down to Earth" },
            { time: 51.16, text: "You keep me down to Earth" },
            { time: 52.85, text: "Call me on my bullshit" },
            { time: 54.73, text: "Lie to me and say my booty getting bigger even if it ain't" },
            { time: 58.84, text: "Love me even if it rain" },
            { time: 60.1, text: "Love me even if it pain you" },
            { time: 62.48, text: "I know I be difficult" },
            { time: 64.54, text: "You know I be difficult" },
            { time: 66.6, text: "You know it get difficult to" },
            { time: 69.03, text: "Open your heart up" },
            { time: 72.18, text: "Hoping I'll never find out that you're anyone else" },
            { time: 76.71, text: "'Cause I love you just how you are" },
            { time: 80.26, text: "And hope you never find out who I really am" },
            { time: 83.95, text: "'Cause you'll never love me, you'll never love me, you'll never love me" },
            { time: 91.36, text: "But I believe you when you say it like dat" },
            { time: 95.72, text: "Oh, do you mean it when you say it like dat?" },
            { time: 98.45, text: "Oh I believe you when you say it like dat" },
            { time: 101.73, text: "You must really love me" },
            { time: 105.62, text: "For real, I'm not playing no games" },
            { time: 109.04, text: "Boy we're back and forth" },
            { time: 110.8, text: "I need your support now (now, now, now, now, now)" },
            { time: 114.2, text: "In case you call my phone again" },
            { time: 117.31, text: "Got no panties on" },
            { time: 119.22, text: "I need your support now (now, now, now, now, now)" },
            { time: 122.73, text: "I know you'd rather be laid up with a big booty" },
            { time: 126.09, text: "Prolly hella positive 'cause she got a big booty (wow)" },
            { time: 129.28, text: "I know I'd rather be paid up" },
            { time: 131.27, text: "You know I'm sensitive 'bout having no booty, having no body, only you buddy" },
            { time: 135.85, text: "Can you hold me when nobody's around us?" },
            { time: 140.2, text: "Open your heart up" },
            { time: 143.33, text: "Hoping I'll never find out that you're anyone else" },
            { time: 147.94, text: "'Cause I love you just how you are" },
            { time: 152.16, text: "And hope you never find out who I really am" },
            { time: 156.49, text: "'Cause you'll never love me, you'll never love me, you'll never love me" },
            { time: 162.99, text: "But I believe you when you say it like dat" },
            { time: 166.6, text: "Oh, do you mean it when you say it like dat?" },
            { time: 170.09, text: "Oh, I believe you when you say it like dat" },
            { time: 172.96, text: "You must really love me" },
            { time: 176.62, text: "♪" },
            { time: 215.24, text: "You don't have shit to say to me" },
            { time: 216.49, text: "I ain't got shit to say to you" },
            { time: 219.59, text: "Granny, and that's the truth" },
            { time: 221.53, text: "And step on" },
            { time: 222.8, text: "Also you black heffa, yeah you, you stand your ground" },
            { time: 226.56, text: "'Cause I feel the same way, if you don't like me, you don't have to fool with me" },
            { time: 232.99, text: "But you don't have to talk about me or treat me mean" },
            { time: 236.27, text: "I don't have to treat you mean" },
            { time: 237.99, text: "I just stay out of your way" },
            { time: 240.34, text: "That's the way you work that one" },
            { time: 243.3, text: "♪" }
        ]
    },
    {
        id: 25,
        title: "Good Days",
        artist: "SZA",
        album: "SOS",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg/600x600bb.jpg",
        audioSrc: "audio/SZA - Good Days (Official Video).mp3",
        lyrics: [
            { time: 58.85, text: "Good day in my mind, safe to take a step out" },
            { time: 62.33, text: "Get some air now, let your edge out" },
            { time: 65.37, text: "Too soon, I spoke, you be heavy in my mind" },
            { time: 68.39, text: "Can you get the heck out?" },
            { time: 70.09, text: "I need rest now, got me bummed out" },
            { time: 73.03, text: "You so, you so, you, baby, baby, babe" },
            { time: 77.49, text: "I've been on my empty mind shit" },
            { time: 81.36, text: "I try to keep from losin' the rest of me" },
            { time: 85.3, text: "I worry that I wasted the best of me on you, baby" },
            { time: 89.43, text: "You don't care" },
            { time: 90.6, text: "Said, not tryna be a nuisance, it's just urgent" },
            { time: 95.11, text: "Tryna make sense of loose change" },
            { time: 97.06, text: "Got me a war in my mind" },
            { time: 98.93, text: "Gotta let go of weight, can't keep what's holding me" },
            { time: 102.89, text: "Choose to watch" },
            { time: 104.28, text: "While the world break up and fall on me" },
            { time: 106.49, text: "All the while, I'll await my armored fate with a smile" },
            { time: 110.83, text: "Still wanna try, still believe in (good days)" },
            { time: 115.3, text: "Good days, always (good days)" },
            { time: 118.35, text: "Always inside (always in my mind, always in my mind, mind)" },
            { time: 120.06, text: "Good day living in my mind" },
            { time: 122.45, text: "Tell me I'm not my fears, my limitations" },
            { time: 126.95, text: "I disappear, if you let me" },
            { time: 130.02, text: "Feeling like (on your own)" },
            { time: 131.52, text: "Feeling like Jericho" },
            { time: 133.0, text: "Feeling like Job when he lost his shit" },
            { time: 134.89, text: "Gotta hold my own, my cross to bear alone, I" },
            { time: 138.12, text: "Ooh, paid a deal, way to kill the mood" },
            { time: 143.4, text: "Know you like that shit, yeah, groovy baby, baby" },
            { time: 148.97, text: "Heavy on my empty mind shit" },
            { time: 153.07, text: "I gotta keep from losin' the rest of me (losin' the rest of me)" },
            { time: 156.79, text: "Still worry that I wasted the best of me on you, babe" },
            { time: 160.87, text: "You don't care" },
            { time: 162.79, text: "Said, not tryna be a nuisance, it's just urgent (it's urgent)" },
            { time: 166.27, text: "Tryna make sense of loose change" },
            { time: 168.24, text: "Got me a war in my mind (my mind)" },
            { time: 170.62, text: "Gotta let go of weight, can't keep what's holding me" },
            { time: 174.15, text: "Choose to watch" },
            { time: 175.61, text: "While the world break up and fall on me" },
            { time: 178.1, text: "All the while, I'll await my armored fate with a smile" },
            { time: 182.16, text: "Still wanna try, still believe in (good days, good days on my mind)" },
            { time: 185.66, text: "Good days (good days on my mind)" },
            { time: 188.84, text: "Always sunny inside (always in my mind, always in my mind, mind)" },
            { time: 191.45, text: "Good day living in my mind" },
            { time: 193.81, text: "Gotta get right, tryna free my mind before the end of the world" },
            { time: 197.93, text: "I don't miss no ex, I don't miss no text" },
            { time: 199.9, text: "I just choose not to respond" },
            { time: 201.85, text: "I don't regret, just pretend shit never happened" },
            { time: 204.96, text: "Half of us layin' waste to our youth, is in the present" },
            { time: 213.28, text: "Half of us chasin' fountains of youth and it's in the present now" },
            { time: 276.73, text: "Always in my mind, always in my mind, mind" },
            { time: 282.76, text: "You've been making me feel like I'm" },
            { time: 284.93, text: "Always in my mind, always in my mind, mind" },
            { time: 290.95, text: "♪" }
        ]
    },
    {
        id: 26,
        title: "Normal Girl",
        artist: "SZA",
        album: "Ctrl",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg",
        audioSrc: "audio/SZA - Normal Girl (Official Audio).mp3",
        lyrics: [
            { time: 25.95, text: "Uh, you love the way I pop my top or how I lose my cool" },
            { time: 29.99, text: "Or how I look at you" },
            { time: 31.32, text: "Say, why?" },
            { time: 33.68, text: "It ain't no fightin', no, I can't stop it" },
            { time: 36.73, text: "This took a while (yeah)" },
            { time: 39.08, text: "Love the way I pump my fist or how I bust my hip" },
            { time: 42.45, text: "For your affection, tryna be down" },
            { time: 46.33, text: "No fightin' and no stoppin'" },
            { time: 49.57, text: "Stick around" },
            { time: 51.37, text: "Wish I was the type of girl that you take over to mama" },
            { time: 55.05, text: "The type of girl, I know my daddy, he'd be proud of (yeah)" },
            { time: 58.26, text: "Be proud of (yeah)" },
            { time: 60.06, text: "Be proud of, be proud, you know, you know" },
            { time: 64.05, text: "I wanna be the type of girl you take home to your mama" },
            { time: 67.67, text: "The type of girl, I know your fellas, they'd be proud of" },
            { time: 70.82, text: "Be proud of, be proud of, be proud of, boy, you know" },
            { time: 76.79, text: "Normal girl, oh" },
            { time: 81.23, text: "I wish I was a normal girl, oh, my" },
            { time: 85.45, text: "How do I be, how do I be your baby?" },
            { time: 88.34, text: "Normal girl, oh" },
            { time: 93.88, text: "I wish I was a normal girl" },
            { time: 97.83, text: "I'll never be, no, never be a -, oh" },
            { time: 101.52, text: "You like it (you like it) when I be (when I be) aggressive (aggre-)" },
            { time: 106.44, text: "You like when I say to you" },
            { time: 108.7, text: "\"Get it if you got it, I'm ready and waitin' for it" },
            { time: 111.68, text: "I'm callin' to put it on,\" yeah" },
            { time: 114.27, text: "Like it (like it) when I be (when I be) aggressive" },
            { time: 119.02, text: "Love when I say to you" },
            { time: 121.43, text: "\"Get it if you want it, I'm waitin', I'm gonna find you" },
            { time: 124.22, text: "I'm ready to put it on you,\" yeah, yeah" },
            { time: 126.81, text: "Type of girl you wanna take home to mama" },
            { time: 130.09, text: "Wanna be the type of girl, my daddy, he'd be proud of" },
            { time: 133.61, text: "Be proud of, be proud of, be proud, you know, you know" },
            { time: 139.33, text: "The type of girl you wanna take her home right up to mama" },
            { time: 142.78, text: "The kind of girl, I know your fellas, they'd be proud of" },
            { time: 145.95, text: "I'll be probably, I'll be proud like, I'll be probably a problem" },
            { time: 151.12, text: "Normal girl, oh, ah" },
            { time: 154.32, text: "(No magazine, no fantasy)" },
            { time: 156.19, text: "I really wish I was a normal girl" },
            { time: 160.59, text: "How do I be, how do I be your baby?" },
            { time: 163.6, text: "Normal girl, oh, oh, oh, oh" },
            { time: 169.13, text: "I wish I was a normal girl, oh, babe" },
            { time: 173.26, text: "I'll never be, no, never be a -, oh" },
            { time: 176.96, text: "This time next year, I'll be livin' so good" },
            { time: 179.89, text: "Won't remember your name, I swear" },
            { time: 185.02, text: "Livin' so good, livin' so good, livin' so good" },
            { time: 189.18, text: "This time next year, I'll be livin' so good" },
            { time: 192.48, text: "Won't remember no pain, I swear" },
            { time: 198.16, text: "Before that you figured out that I was just a normal girl" },
            { time: 203.31, text: "♪" },
            { time: 210.13, text: "Normal girl, what do you say now?" },
            { time: 213.43, text: "Quit on the world 'cause it ain't goin' your way now" },
            { time: 216.64, text: "Quit on yourself 'cause you can't figure your way out" },
            { time: 221.07, text: "Normal girl" },
            { time: 224.05, text: "How do you be?" },
            { time: 226.89, text: "♪" }
        ]
    },
    {
        id: 27,
        title: "About You",
        artist: "The 1975",
        album: "Being Funny in a Foreign Language",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1f/c7/98/1fc7988e-0a39-5724-1390-e45246250e24/198704825934_Cover.jpg/600x600bb.jpg",
        audioSrc: "audio/The 1975 - About You (Official).mp3",
        lyrics: [
            { time: 44.67, text: "I know a place" },
            { time: 54.53, text: "It's somewhere I go when I need to remember your face" },
            { time: 64.0, text: "We get married in our heads" },
            { time: 74.53, text: "Something to do while we try to recall how we met" },
            { time: 84.0, text: "Do you think I have forgotten?" },
            { time: 89.12, text: "Do you think I have forgotten?" },
            { time: 94.13, text: "Do you think I have forgotten" },
            { time: 99.24, text: "About you?" },
            { time: 104.24, text: "You and I (don't let go) were alive (don't let go)" },
            { time: 114.51, text: "With nothing to do, I could lay and just look in your eyes" },
            { time: 124.66, text: "Wait (don't let go) and pretend (don't let go)" },
            { time: 134.69, text: "Hold on and hope that we'll find our way back in the end" },
            { time: 144.26, text: "Do you think I have forgotten?" },
            { time: 149.2, text: "Do you think I have forgotten?" },
            { time: 154.17, text: "Do you think I have forgotten" },
            { time: 159.16, text: "About you?" },
            { time: 164.18, text: "Do you think I have forgotten?" },
            { time: 169.04, text: "Do you think I have forgotten?" },
            { time: 174.12, text: "Do you think I have forgotten" },
            { time: 179.12, text: "About you?" },
            { time: 184.48, text: "There was something 'bout you that now I can't remember" },
            { time: 189.67, text: "It's the same damn thing that made my heart surrender" },
            { time: 194.44, text: "And I miss you on a train, I miss you in the morning" },
            { time: 199.56, text: "I never know what to think about" },
            { time: 203.55, text: "I think about you (so don't let go)" },
            { time: 209.14, text: "About you (so don't let go)" },
            { time: 214.2, text: "Do you think I have forgotten" },
            { time: 219.16, text: "About you? (Don't let go)" },
            { time: 224.21, text: "About you" },
            { time: 229.17, text: "About you" },
            { time: 234.13, text: "Do you think I have forgotten" },
            { time: 239.28, text: "About you? (Don't let go)" },
            { time: 241.91, text: "♪" }
        ]
    },
    {
        id: 28,
        title: "fallingforyou",
        artist: "The 1975",
        album: "The 1975",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1e/bc/71/1ebc7173-6bcd-26d9-3a67-1d3ceffded78/13UAAIM67470.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/The 1975 - fallingforyou.mp3",
        lyrics: [
            { time: 22.2, text: "What time you coming out?" },
            { time: 28.38, text: "We started losing light" },
            { time: 31.34, text: "I'll never make it right if you don't want me 'round" },
            { time: 39.19, text: "I'm so excited for the night" },
            { time: 43.03, text: "All we need's my bike and your enormous house (ooh)" },
            { time: 50.88, text: "You said someday we might" },
            { time: 53.41, text: "When I'm closer to your height, 'til then we'll knock around and see" },
            { time: 61.86, text: "If you're all I need" },
            { time: 69.05, text: "Don't you see me? I" },
            { time: 74.26, text: "I think I'm falling, I'm falling for you" },
            { time: 79.92, text: "And don't you need me? I" },
            { time: 85.55, text: "I think I'm falling, I'm falling for you" },
            { time: 91.43, text: "And on this night and in this light" },
            { time: 96.92, text: "I think I'm falling (I think I'm falling), I'm falling for you" },
            { time: 102.64, text: "Maybe you'll change your mind" },
            { time: 108.1, text: "I think I'm falling, I think I'm falling" },
            { time: 112.7, text: "I'm caught on your coat again" },
            { time: 118.71, text: "You said, \"Oh, no, it's fine\"" },
            { time: 121.72, text: "I read between the lines and touched your leg again, again" },
            { time: 129.43, text: "I'll take it one day at a time" },
            { time: 133.29, text: "Soon you will be mine, oh, but I want you now, I want you now" },
            { time: 141.08, text: "When the smoke gets in your eyes" },
            { time: 144.68, text: "You look so alive, do you fancy sitting down with me, maybe?" },
            { time: 152.15, text: "If you're all I need" },
            { time: 158.1, text: "According to your heart" },
            { time: 164.03, text: "My place is not deliberate" },
            { time: 169.44, text: "The feeling of your arms" },
            { time: 175.36, text: "I don't wanna be your friend, I wanna kiss your neck" },
            { time: 181.89, text: "Don't you see me? I" },
            { time: 187.28, text: "I think I'm falling, I'm falling for you" },
            { time: 192.9, text: "And don't you need me? I" },
            { time: 198.59, text: "I think I'm falling (I think I'm falling), I'm falling for you" },
            { time: 204.36, text: "And on this night and in this light" },
            { time: 209.84, text: "I think I'm falling (I think I'm falling), I'm falling for you" },
            { time: 215.69, text: "Maybe you'll change your mind" },
            { time: 220.99, text: "♪" }
        ]
    },
    {
        id: 29,
        title: "Paraluman",
        artist: "Adie",
        album: "Paraluman",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/52/17/89/5217896a-4b66-4f70-f43e-86dfd891a36b/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Adie - Paraluman (Official Lyric Video).mp3",
        lyrics: [
            { time: 27.88, text: "Sa unang tingin, agad na nahumaling" },
            { time: 33.14, text: "Sa nagniningning mong mga mata" },
            { time: 38.39, text: "Ika'y isang bituin na nagmula sa langit" },
            { time: 43.35, text: "♪" },
            { time: 49.12, text: "Hindi ko mawari ang taglay mong tinatangi" },
            { time: 54.54, text: "Sadya namang nakakabighani" },
            { time: 59.88, text: "'Di maipaliwanag ang nararamdaman" },
            { time: 69.35, text: "Namumukadkad ang aking ligaya" },
            { time: 74.54, text: "Sa tuwing ika'y papalapit na" },
            { time: 79.04, text: "Hawakan mo ang aking kamay" },
            { time: 85.68, text: "Oh, Paraluman, ika'y akin nang" },
            { time: 91.16, text: "Dadalhin sa 'di mo inaasahang paraiso" },
            { time: 101.75, text: "Palagi kitang aawitan ng Kundiman" },
            { time: 106.97, text: "'Di magsasawa, 'di ka pababayaan" },
            { time: 111.62, text: "Isasayaw kita hanggang sa walang-hanggan" },
            { time: 118.44, text: "♪" },
            { time: 123.81, text: "Mga gunita na laging naiisip (naiisip)" },
            { time: 129.21, text: "Sumisilip (sumisilip) ang itinakda ng mahiwaga" },
            { time: 138.94, text: "Liwanag na dulot mo, nagbigay-sinag sa madilim kong mundo" },
            { time: 144.36, text: "Ibang-iba ako kapag ikaw na ang kapiling" },
            { time: 148.22, text: "Sumisiping ang buwan at mga bituin" },
            { time: 150.83, text: "Na para bang sumasang-ayon sa atin ang kalawakan (kalawakan)" },
            { time: 159.73, text: "Namumukadkad ang aking ligaya" },
            { time: 165.01, text: "Sa tuwing ika'y papalapit na" },
            { time: 169.87, text: "Hawakan mo ang aking kamay" },
            { time: 176.22, text: "Oh, Paraluman, ika'y akin nang" },
            { time: 181.84, text: "Dadalhin sa 'di mo inaasahang paraiso (paraiso)" },
            { time: 192.13, text: "Palagi kitang aawitan ng Kundiman" },
            { time: 197.78, text: "'Di magsasawa, 'di ka pababayaan" },
            { time: 202.25, text: "Isasayaw kita hanggang sa walang-hanggan" },
            { time: 208.1, text: "Pa-pa-para-pa-pa, para-pa-pa-para-Paraluman" },
            { time: 213.74, text: "Pa-pa-para-pa-pa, para-pa-pa-para-Paraluman" },
            { time: 219.09, text: "Pa-pa-para-pa-pa, para-pa-pa-para-Paraluman" },
            { time: 224.38, text: "Pa-pa-para-pa-pa, para-pa-pa-para-Paraluman" },
            { time: 230.08, text: "Himig ng tadhana" },
            { time: 234.28, text: "Sa atin ay tumutugma na" },
            { time: 240.5, text: "Himig ng tadhana" },
            { time: 245.13, text: "Sa atin ay tumutugma na" },
            { time: 251.27, text: "Himig ng tadhana" },
            { time: 255.76, text: "Sa atin ay tumutugma na" },
            { time: 262.17, text: "♪" },
            { time: 272.46, text: "Oh, Paraluman, ika'y akin nang" },
            { time: 277.62, text: "Dadalhin sa 'di mo inaasahang paraiso" },
            { time: 288.14, text: "Palagi kitang aawitan ng Kundiman" },
            { time: 293.82, text: "'Di magsasawa, 'di ka pababayaan" },
            { time: 298.57, text: "Isasayaw kita, mamahalin kita" },
            { time: 306.51, text: "Hanggang sa walang-hanggan" },
            { time: 308.17, text: "♪" }
        ]
    },
    {
        id: 30,
        title: "Stop The Wedding!",
        artist: "Ashe",
        album: "The Girl Of Your Dreams",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1b/86/c9/1b86c988-03b8-ca21-10a5-0963d09f5bcf/075679561893.jpg/600x600bb.jpg",
        audioSrc: "audio/Ashe - Stop The Wedding! (Official Video).mp3",
        lyrics: [
            { time: 7.0, text: "I found a secret note, \"Burn after reading this\"" },
            { time: 10.4, text: "It's supernatural, the feeling's sinking in" },
            { time: 14.25, text: "This isn't cold feet, these aren't fireworks" },
            { time: 17.6, text: "The sky is menacing and that's an iceberg" },
            { time: 21.05, text: "He thinks he's velvet smooth" },
            { time: 22.9, text: "I've fallen for the act" },
            { time: 24.7, text: "I'm in the other room and seeing through the cracks" },
            { time: 28.3, text: "The voices in my head are screaming, \"No! Don't!\"" },
            { time: 37.65, text: "You don't have to waste your night" },
            { time: 39.95, text: "And wear your heart out" },
            { time: 41.95, text: "The warning signs are flashing now" },
            { time: 45.0, text: "Stop the wedding! (Ah-ah)" },
            { time: 48.5, text: "Stop the wedding! (Ah-ah)" },
            { time: 52.15, text: "Even though the table's set" },
            { time: 54.4, text: "The guests are waiting" },
            { time: 56.25, text: "You can burn the dress, and run away" },
            { time: 59.65, text: "Stop the wedding! (Ah-ah)" },
            { time: 63.05, text: "Stop the wedding! (Ah-ah)" },
            { time: 66.6, text: "You've been such a good girl" },
            { time: 69.75, text: "Talking like you should, girl" },
            { time: 74.15, text: "Keep avoiding, disappointing, in your white satin heels" },
            { time: 77.8, text: "But you know how you really feel" },
            { time: 80.95, text: "You don't have to waste your night" },
            { time: 83.25, text: "And wear your heart out" },
            { time: 85.25, text: "The warning signs are flashing now" },
            { time: 88.25, text: "Stop the wedding! (Ah-ah)" },
            { time: 91.95, text: "Stop the wedding! (Ah-ah)" },
            { time: 95.35, text: "Even though the table's set" },
            { time: 97.7, text: "The guests are waiting" },
            { time: 99.55, text: "You can burn the dress and run away" },
            { time: 102.85, text: "Stop the wedding! (Ah-ah)" },
            { time: 106.45, text: "Stop the wedding! (Ah-ah)" },
            { time: 112.0, text: "(Ah-ah, ah-ah)" },
            { time: 119.0, text: "(Ah-ah, ah-ah)" },
            { time: 125.25, text: "Stop the wedding" },
            { time: 126.8, text: "Stop the wedding" },
            { time: 128.6, text: "If your heart is dreading" },
            { time: 130.5, text: "Hands are sweating" },
            { time: 132.3, text: "While the sun is setting" },
            { time: 134.0, text: "You'll be getting out" },
            { time: 139.65, text: "Stop the wedding" },
            { time: 140.9, text: "Stop the wedding" },
            { time: 142.6, text: "If your heart is dreading" },
            { time: 144.3, text: "Hands are sweating" },
            { time: 145.85, text: "While the sun is setting" },
            { time: 147.5, text: "You'll be getting out" },
            { time: 154.6, text: "You don't have to waste your life" },
            { time: 157.35, text: "And wear your heart out" },
            { time: 159.7, text: "The warning signs are flashing now" },
            { time: 163.3, text: "Stop the wedding! (Ah-ah)" },
            { time: 167.5, text: "Stop the wedding!" },
            { time: 171.5, text: "Your heart was set on never breaking" },
            { time: 174.6, text: "You can burn the dress and run away" },
            { time: 177.75, text: "Stop the wedding! (Ah-ah)" },
            { time: 181.0, text: "Stop the wedding! (Ah-ah)" },
            { time: 184.2, text: "Stop the wedding!" },
            { time: 185.95, text: "Only you can stop the wedding (Stop the wedding)" },
            { time: 189.05, text: "Ah-ah (Stop the wedding)" },
            { time: 192.3, text: "Only you can (Stop the wedding)" },
            { time: 196.0, text: "♪" }
        ]
    },
    {
        id: 31,
        title: "Mahal Magmahal",
        artist: "Esremborak",
        album: "Mahal Magmahal",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cb/32/2d/cb322d8a-9744-d03e-a3d1-61fc0f92108f/196874828038.jpg/600x600bb.jpg",
        audioSrc: "audio/Esremborak - Mahal Magmahal [Official Music Video].mp3",
        lyrics: [
            { time: 15.24, text: "Kayang-kaya kitang pangitiin" },
            { time: 22.82, text: "Ipapangako sa iyo ang bituin" },
            { time: 30.37, text: "Bitawan ang katagang \"'Di kita iiwan\"" },
            { time: 38.22, text: "Panghawakang sasamahan kailanman" },
            { time: 43.42, text: "Ngunit saka na lang pakakawalan" },
            { time: 48.34, text: "Kung may sigurado na sa kawalan" },
            { time: 51.96, text: "Mahal ngayon ang magmahal" },
            { time: 55.97, text: "Mahal kita, pero, mahal" },
            { time: 61.49, text: "Mahal na ang bigas pati lata ng sardinas" },
            { time: 67.88, text: "Kung mamahalin kita ngayon (kita ngayon)" },
            { time: 72.83, text: "Sabay tayong magugutom" },
            { time: 76.52, text: "'Di sapat ang sahod ko kahit tapat ako sa 'yo" },
            { time: 83.18, text: "Ano'ng silbi nitong pagmamahal (pagmamahal)" },
            { time: 87.88, text: "Kung lahat din ay nagmamahal?" },
            { time: 91.7, text: "Ayoko lang namang makita ka" },
            { time: 99.1, text: "Kinikilig habang sa hirap ay nagdurusa" },
            { time: 107.01, text: "♪" },
            { time: 120.86, text: "Kung nalulungkot ay pupuntahan ka" },
            { time: 127.53, text: "Dala ang cravings mo na fries at matcha" },
            { time: 134.47, text: "Sasamahan kang mag-macchiato" },
            { time: 141.22, text: "Tapos itatanong kung bet mo ba ako" },
            { time: 146.25, text: "Ngunit saka na lang kita bibilhan" },
            { time: 150.75, text: "Kung may sigurado na sa dahilan" },
            { time: 154.08, text: "Mahal kita, mahal nga lang" },
            { time: 157.67, text: "Mahal kita, mahal din ang-" },
            { time: 162.96, text: "Mahal na ang bigas pati lata ng sardinas" },
            { time: 169.17, text: "Kung mamahalin kita ngayon (kita ngayon)" },
            { time: 173.86, text: "Sabay tayong magugutom" },
            { time: 177.22, text: "'Di sapat ang sahod ko kahit tapat ako sa 'yo" },
            { time: 183.51, text: "Ano'ng silbi nitong pagmamahal (pagmamahal)" },
            { time: 188.15, text: "Kung lahat din ay nagmamahal?" },
            { time: 192.04, text: "Ayoko lang namang makita ka" },
            { time: 198.98, text: "Kinikilig habang sa hirap ay-" },
            { time: 205.51, text: "♪" },
            { time: 232.05, text: "Ooh" },
            { time: 239.09, text: "Ooh" },
            { time: 246.42, text: "Ooh" },
            { time: 253.08, text: "Ooh" },
            { time: 259.53, text: "Mahal na ang bigas pati lata ng sardinas" },
            { time: 265.69, text: "Kung mamahalin kita ngayon (kita ngayon)" },
            { time: 270.35, text: "Sabay tayong magugutom" },
            { time: 274.13, text: "'Di sapat ang sahod ko kahit tapat ako sa 'yo" },
            { time: 280.37, text: "Ano'ng silbi nitong pagmamahal (pagmamahal)" },
            { time: 285.18, text: "Kung lahat din ay nagmamahal?" },
            { time: 289.85, text: "♪" }
        ]
    },
    {
        id: 32,
        title: "Multo",
        artist: "Cup of Joe",
        album: "Silakbo",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bb/0f/b1/bb0fb116-d017-2a94-dab6-0a82a60ecd29/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Multo - Cup of Joe (Official Music Video).mp3",
        lyrics: [
            { time: 38.96, text: "Humingang malalim, pumikit na muna" },
            { time: 48.55, text: "At baka sakaling namamalikmata lang" },
            { time: 57.63, text: "Ba't nababahala? 'Di ba't ako'y mag-isa?" },
            { time: 67.05, text: "Kala ko'y payapa, boses mo'y tumatawag pa" },
            { time: 76.64, text: "Binaon naman na ang lahat" },
            { time: 81.1, text: "Tinakpan naman na 'king sugat" },
            { time: 85.67, text: "Ngunit ba't ba andito pa rin?" },
            { time: 90.67, text: "Hirap na 'kong intindihin" },
            { time: 94.81, text: "Tanging panalangin, lubayan na sana" },
            { time: 103.68, text: "Dahil sa bawat tingin, mukha mo'y nakikita" },
            { time: 113.25, text: "Kahit sa'n man mapunta ay anino mo'y kumakapit sa 'king kamay" },
            { time: 122.41, text: "Ako ay dahan-dahang nililibing nang buhay pa" },
            { time: 131.63, text: "Hindi na makalaya" },
            { time: 136.21, text: "Dinadalaw mo 'ko bawat gabi" },
            { time: 140.87, text: "Wala mang nakikita" },
            { time: 145.49, text: "Haplos mo'y ramdam pa rin sa dilim" },
            { time: 149.99, text: "Hindi na nananaginip" },
            { time: 154.69, text: "Hindi na ma-makagising" },
            { time: 159.32, text: "Pasindi na ng ilaw" },
            { time: 163.73, text: "Minumulto na 'ko ng damdamin ko (ng damdamin ko)" },
            { time: 170.08, text: "'Di mo ba ako lilisanin?" },
            { time: 174.05, text: "Hindi pa ba sapat pagpapahirap sa 'kin? (Damdamin ko)" },
            { time: 178.64, text: "Hindi na ba ma-mamamayapa?" },
            { time: 183.5, text: "Hindi na ba ma-mamamayapa?" },
            { time: 187.19, text: "Hindi na makalaya" },
            { time: 191.42, text: "Dinadalaw mo 'ko bawat gabi" },
            { time: 196.18, text: "Wala mang nakikita" },
            { time: 200.75, text: "Haplos mo'y ramdam pa rin sa dilim" },
            { time: 205.42, text: "Hindi na nananaginip" },
            { time: 209.91, text: "Hindi na ma-makagising" },
            { time: 214.42, text: "Pasindi na ng ilaw" },
            { time: 219.29, text: "Minumulto na 'ko ng damdamin ko (ng damdamin ko)" },
            { time: 225.17, text: "(Makalaya) hindi mo ba ako lilisanin?" },
            { time: 229.56, text: "(Dinadalaw mo 'ko bawat gabi) hindi pa ba sapat pagpapahirap sa 'kin?" },
            { time: 234.15, text: "(Wala mang nakikita) hindi na ba ma-mamamayapa?" },
            { time: 238.31, text: "(Haplos mo'y ramdam pa rin sa dilim) hindi na ba ma-mamamayapa?" },
            { time: 243.45, text: "♪" }
        ]
    },
    {
        id: 33,
        title: "Panaginip",
        artist: "nicole",
        album: "Panaginip",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6c/58/4e/6c584e9b-7127-2553-bf61-589902ea0fa6/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Panaginip - nicole (Official Music Video).mp3",
        lyrics: [
            { time: 29.33, text: "Bawat pikit ng aking mata, tanging ikaw nakikita" },
            { time: 43.36, text: "Utak ko ay punong-puno ng imahinasyon, kasama ka" },
            { time: 56.76, text: "Isang himala na lang kung mapapasa'kin ka" },
            { time: 69.79, text: "Parang panaginip 'pag ika'y aking kapiling" },
            { time: 83.52, text: "Huwag kang tumingin sa 'kin, ako'y nahuhumaling" },
            { time: 97.28, text: "Ako'y nahuhumaling sa 'yo, sa 'yo, sa 'yo" },
            { time: 112.08, text: "Natutulala na lang sa 'yo, napapabagal mo 'king mundo" },
            { time: 125.26, text: "Nasisilayan ko na ang kinabukasan ko sa 'yo" },
            { time: 139.13, text: "Imahinasyon pa rin ba 'to? Ika'y narito sa tabi ko" },
            { time: 155.33, text: "Parang panaginip 'pag ika'y aking kapiling" },
            { time: 169.24, text: "Huwag kang tumingin sa 'kin, ako'y nahuhumaling" },
            { time: 182.97, text: "Ako'y nahuhumaling sa 'yo" },
            { time: 202.92, text: "♪" },
            { time: 218.85, text: "Paulit-ulit kang tumatakbo sa isip" },
            { time: 232.49, text: "Paulit-ulit na lang pinapanalangin ka" },
            { time: 245.98, text: "Maaari bang hawakan ang iyong mga kamay?" },
            { time: 260.34, text: "Tayo na (tayo na), lilipad na nang sabay" },
            { time: 276.06, text: "Parang panaginip 'pag ika'y aking kapiling" },
            { time: 289.1, text: "Huwag kang tumingin sa 'kin, ako'y nahuhumaling sa 'yo" },
            { time: 307.07, text: "♪" }
        ]
    },
    {
        id: 34,
        title: "Totoong tayo",
        artist: "Jin DC",
        album: "Totoong tayo",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/40/f2/3140f2d7-79f5-ef9a-eb9a-a097b27ad3ef/5063992655325.jpg/600x600bb.jpg",
        audioSrc: "audio/Totoong tayo - Jin DC (Official Lyric Video).mp3",
        lyrics: [
            { time: 5.57, text: "Aking sinta" },
            { time: 9.52, text: "Naaalala mo pa ba ang dati nating pag-iibigan?" },
            { time: 23.46, text: "Sa gabing malalim" },
            { time: 28.1, text: "Mga usapang puro kulita't tawanan" },
            { time: 38.13, text: "Ikaw at ako" },
            { time: 42.88, text: "Ang magkasama sa mga alaala" },
            { time: 49.14, text: "Puwede bang kalimutan muna natin ang mundo" },
            { time: 61.0, text: "At hawakan mo ang kamay ko?" },
            { time: 65.11, text: "Magmahalan na walang iniisip na kung ano" },
            { time: 75.96, text: "Ipakita lang ang totoong tayo" },
            { time: 80.97, text: "♪" },
            { time: 94.53, text: "'Di maiwasang ('di maiwasang)" },
            { time: 98.62, text: "Ipakita na wala tayong pakialam (sa buhay ng) sa buhay ng isa't isa" },
            { time: 108.94, text: "Huwag nang magpanggap pa (huwag nang magpanggap pa)" },
            { time: 113.46, text: "Kitang-kita na sa kilos mong kakaiba, ooh, ako pa ba?" },
            { time: 126.75, text: "Ikaw at ako (ikaw at ako)" },
            { time: 131.67, text: "Ang magkasama (ang magkasama) sa mga alaala" },
            { time: 137.94, text: "Puwede bang kalimutan muna natin ang mundo (kalimutan muna ang mundo)" },
            { time: 149.61, text: "At hawakan mo ang kamay ko?" },
            { time: 153.77, text: "Magmahalan (magmahalan) na walang iniisip na kung ano (na kung ano)" },
            { time: 164.58, text: "Ipakita lang ang totoong tayo" },
            { time: 171.0, text: "Ikaw at ako ang magkasama sa sariling mundo" },
            { time: 183.65, text: "Totoo, totoong tayo" },
            { time: 193.46, text: "Puwede bang kalimutan muna natin ang mundo" },
            { time: 205.19, text: "At hawakan mo ang kamay ko?" },
            { time: 209.05, text: "Magmahalan na walang iniisip na kung ano" },
            { time: 219.69, text: "Ipakita lang ang totoong tayo" },
            { time: 226.07, text: "♪" }
        ]
    },
    {
        id: 35,
        title: "Na Para Bang",
        artist: "Mariah Deborah",
        album: "Na Para Bang",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/bc/e3/11bce3fa-1306-a5ef-3e6b-65f188fb4853/824296023419_cover.jpg/600x600bb.jpg",
        audioSrc: "audio/_Na Para Bang_ - Mariah Deborah _ Wish 107.5 Bus.mp3",
        // Live Wish 107.5 Bus performance
        lyrics: [
            { time: 5.66, text: "'Pag ba ako'ng naunang" },
            { time: 8.46, text: "Maglahad ng palad at" },
            { time: 11.18, text: "Lumapit nang marahan" },
            { time: 13.93, text: "Magtataka ka ba?" },
            { time: 16.52, text: "'Di man ako halata" },
            { time: 19.02, text: "Nagtitimping mag-isa" },
            { time: 21.75, text: "Dinadaan na lang sa tula" },
            { time: 24.57, text: "Tanong sa tadhana" },
            { time: 28.22, text: "Oo, walang malisya" },
            { time: 31.92, text: "Para sayo" },
            { time: 33.83, text: "Sa akin, meron" },
            { time: 36.51, text: "Kaya pasensya na" },
            { time: 40.07, text: "Kung pwede lang namang maibalik" },
            { time: 42.52, text: "Sa dati ang lahat pero hindi" },
            { time: 45.63, text: "'Yung walang ilangan, pwede kang batukan" },
            { time: 48.73, text: "Na para bang, para bang" },
            { time: 50.18, text: "Kaibigan" },
            { time: 51.15, text: "Baka nga wala namang mali" },
            { time: 53.29, text: "Kung mag-iba man ang aking tingin" },
            { time: 56.24, text: "Nagpapakiramdaman" },
            { time: 57.69, text: "Sana'y mapanindigan" },
            { time: 62.87, text: "Ah, ah, ah" },
            { time: 70.18, text: "Na para bang, para bang" },
            { time: 71.78, text: "Ba't ba ako'y alipin ng" },
            { time: 74.4, text: "Kung ano man ang sasabihin nila?" },
            { time: 77.23, text: "Nagkakaintindihan" },
            { time: 79.77, text: "Naman tayong dalawa" },
            { time: 82.26, text: "'Di mawari kung pa'no nga ba 'to" },
            { time: 84.86, text: "Magpapatuloy ba o hihinto?" },
            { time: 87.81, text: "Eh baka naman kasi lahat ay" },
            { time: 90.24, text: "Biglang magbago" },
            { time: 94.02, text: "Oo, walang malisya" },
            { time: 97.77, text: "Para sayo" },
            { time: 99.61, text: "Sa akin, meron na" },
            { time: 102.25, text: "Ah" },
            { time: 103.38, text: "Kung pwede lang namang maibalik" },
            { time: 106.03, text: "Sa dati ang lahat pero hindi" },
            { time: 109.19, text: "'Yung walang ilangan, pwede kang batukan" },
            { time: 112.35, text: "Na para bang, para bang" },
            { time: 113.66, text: "Kaibigan" },
            { time: 114.21, text: "Baka nga wala namang mali" },
            { time: 116.58, text: "Kung mag-iba man ang aking tingin" },
            { time: 119.67, text: "Nagpapakiramdaman" },
            { time: 120.89, text: "Sana'y mapanindigan" },
            { time: 125.61, text: "Ah, ah, ah" },
            { time: 133.4, text: "Na para bang, para bang" },
            { time: 136.82, text: "Ah, ah-ah-ah, ah" },
            { time: 144.19, text: "Na para bang, para bang" },
            { time: 145.26, text: "Sabi sa sarili ko \"wala lang 'to\"" },
            { time: 147.82, text: "Pero ba't sayo na'ng aking sabado?" },
            { time: 150.43, text: "Ang sabi sa sarili ko \"wala lang 'to\"" },
            { time: 152.95, text: "\"Wala lang 'to\"" },
            { time: 154.3, text: "\"Wala lang 'to\"" },
            { time: 155.91, text: "Sabi sa sarili ko \"wala lang 'to\"" },
            { time: 158.44, text: "Pero ba't sayo na'ng aking sabado?" },
            { time: 161.0, text: "Ang sabi sa sarili ko \"wala lang 'to\"" },
            { time: 163.64, text: "\"Wala lang 'to" },
            { time: 165.02, text: "\"Wala lang 'to\"" },
            { time: 169.07, text: "Walang malisya" },
            { time: 171.61, text: "Para sayo" },
            { time: 173.63, text: "Sa akin, meron" },
            { time: 176.12, text: "Kaya pasensya na" },
            { time: 179.63, text: "Kung pwede lang namang maibalik" },
            { time: 182.41, text: "Sa dati ang lahat pero hindi" },
            { time: 185.54, text: "'Yung walang ilangan, pwede kang batukan" },
            { time: 188.58, text: "Na para bang, para bang" },
            { time: 190.0, text: "Kaibigan" },
            { time: 190.78, text: "Baka nga wala namang mali" },
            { time: 193.18, text: "Kung mag-iba man ang aking tingin" },
            { time: 196.15, text: "Nagpapakiramdaman" },
            { time: 197.34, text: "Sana'y mapanindigan" },
            { time: 200.79, text: "Sabi sa sarili ko \"wala lang 'to\"" },
            { time: 203.34, text: "Pero ba't sayo na'ng aking sabado?" },
            { time: 206.01, text: "Sabi sa sarili ko \"wala lang 'to\"" },
            { time: 208.69, text: "\"Wala lang 'to\"" },
            { time: 209.95, text: "\"Wala lang 'to\"" },
            { time: 211.42, text: "Sabi ko sa sarili ko \"wala lang 'to\"" },
            { time: 214.12, text: "Pero ba't sayo na'ng aking sabado" },
            { time: 216.54, text: "Ang sabi sa sarili ko \"wala lang 'to\"" },
            { time: 220.58, text: "Na para bang, para bang" },
            { time: 223.14, text: "♪" }
        ]
    },
    {
        id: 36,
        title: "Kalapastangan",
        artist: "fitterkarma",
        album: "Kalapastangan",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2e/aa/28/2eaa2815-af10-fb22-1800-9313c60014ad/0.jpg/600x600bb.jpg",
        audioSrc: "audio/fitterkarma - Kalapastangan (Lyrics).mp3",
        lyrics: [
            { time: 4.3, text: "Oras nang sambahin ang ngalan Mo" },
            { time: 15.97, text: "Para mabuhay habang-buhay sa puso't isipan Mo" },
            { time: 27.83, text: "Sino ba ako para mapansin Mo?" },
            { time: 39.76, text: "Mga dalangin ko sa 'Yo, sana'y pakinggan Mo" },
            { time: 63.46, text: "Pa'no ba ako magiging 'sang santo" },
            { time: 75.41, text: "Para makasama Kita diyan sa tabi ng trono Mo?" },
            { time: 87.19, text: "Ilan pang pagsubok ang daraanan ko" },
            { time: 99.03, text: "Bago ako makaranas ng mga milagro Mo?" },
            { time: 129.32, text: "Oh, ang langit ay nandito lamang pala sa lupa" },
            { time: 137.57, text: "At ang impiyerno ay nasa isipan ko, at pinalimot ng 'Yong ganda" },
            { time: 146.92, text: "Umaawit ang mga anghel, umaawit ang mga anghel" },
            { time: 155.73, text: "Nagdiriwang sila nang makasama Kita, huwag Ka sanang mawawala" },
            { time: 164.54, text: "Oh, oh-oh-oh" },
            { time: 170.93, text: "Oh, ooh" },
            { time: 182.49, text: "Mamamatay akong nakangiti" },
            { time: 186.79, text: "Kapag Ikaw ang nasa aking tabi" },
            { time: 191.39, text: "Mabubuhay akong nagsisisi" },
            { time: 195.76, text: "Kapag 'sang araw hindi Kita mapangiti" },
            { time: 200.16, text: "Kalapastangan ang 'di Ka ibigin" },
            { time: 204.53, text: "Kalokohan ang 'di Ka isipin" },
            { time: 208.94, text: "Kung ang mundo ay biglang gugunawin" },
            { time: 213.74, text: "Ikaw ang una kong hahanapin" },
            { time: 218.42, text: "Ooh" },
            { time: 227.47, text: "Ooh" },
            { time: 233.88, text: "♪" }
        ]
    },
    {
        id: 37,
        title: "Pag-Ibig ay Kanibalismo II",
        artist: "fitterkarma",
        album: "Pag-Ibig ay Kanibalismo II",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/79da2d25f41ac9a1054f5a8335de2a3a/600x600-000000-80-0-0.jpg",
        audioSrc: "audio/fitterkarma - Pag-Ibig ay Kanibalismo II (Lyrics).mp3",
        lyrics: [
            { time: 22.92, text: "Tayo'y magmo-motor" },
            { time: 27.76, text: "Sa mga kalsada ng Siquijor" },
            { time: 32.77, text: "At magsigawan tayo na parang nasa horror" },
            { time: 45.57, text: "Tayo'y magkatay ng tao" },
            { time: 50.05, text: "Sabay isalang at iadobo" },
            { time: 56.24, text: "Huwag ka lang magsabi ng totoo" },
            { time: 67.44, text: "Ibabalik kita nang buong-buo" },
            { time: 74.24, text: "Pangako 'yon sa 'yo" },
            { time: 77.24, text: "Sa 'yo lang ang puso ko" },
            { time: 83.01, text: "Kahit kainin mo" },
            { time: 90.36, text: "Magdodroga tayo" },
            { time: 95.29, text: "Kimi lang, bawal 'yon (kimi lang, bawal 'yon)" },
            { time: 100.8, text: "'Di ako masamang tao" },
            { time: 106.28, text: "Pumapatay lang ako" },
            { time: 112.13, text: "Ng kalungkutan ko" },
            { time: 118.77, text: "Pati ng sa 'yo" },
            { time: 124.56, text: "Ibabalik kita nang buong-buo" },
            { time: 131.53, text: "Pangako 'yon sa 'yo" },
            { time: 134.4, text: "Sa 'yo lang ang puso ko" },
            { time: 140.0, text: "Kahit kainin mo" },
            { time: 147.25, text: "At hahalik ka nang may lipstick na dugo" },
            { time: 154.32, text: "Sa labi kong punong-puno" },
            { time: 158.96, text: "Ng panlasa ko sa 'yo" },
            { time: 170.24, text: "Kanibalismo, 'di ka matiis" },
            { time: 175.72, text: "Kapag inalis mo, ika'y mami-miss" },
            { time: 181.04, text: "'Di nagmamalinis" },
            { time: 186.91, text: "Oh, ika'y mami-miss" },
            { time: 192.66, text: "'Di ka matitiis" },
            { time: 198.7, text: "Tatlo na sais" },
            { time: 203.79, text: "Pag-ibig mong kay tamis" }
        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all
let hasStarted = false; // Becomes true after the first play, used to show the now-playing bar
let activeLyricIndex = -1;
let isSeeking = false;
let autoScrollPausedUntil = 0; // Pause lyric auto-scroll briefly after the user scrolls manually
let showLyrics = true;
let playbackRate = 1;
let homeScrollY = 0; // Restored when coming back to the playlist
let lastShownSecond = -1; // Time labels only need to change once a second
const songDurations = {};

const SEEK_STEP = 5; // Seconds to skip with arrow keys
const LYRIC_ANCHOR = 0.5; // The active lyric sits this far down the lyrics box (0 = top, 1 = bottom)
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
    // Until the new art has been read, the previous background stays up, then cross-fades to it
    if (song.id in artCache) {
        apply(artCache[song.id]);
    } else {
        analyzeArt(song.albumArtUrl).then(art => {
            artCache[song.id] = art;
            apply(art);
        });
    }
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

function renderSongList(query = '') {
    songListElement.innerHTML = '';
    searchInput.parentElement.classList.toggle('has-value', query.length > 0);
    trackHead.hidden = false;
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="list-message">No songs available.</li>';
        return;
    }

    const q = query.trim().toLowerCase();
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
                <img src="${escapeHtml(artAtSize(song.albumArtUrl, 120))}" alt="" class="song-art-list" loading="lazy" decoding="async">
                <div class="song-info-list">
                    <h3>${escapeHtml(song.title)}</h3>
                    <p>${escapeHtml(song.artist)}</p>
                </div>
            </div>
            <span class="track-album">${escapeHtml(song.album || '')}</span>
            <span class="song-duration">${songDurations[song.id] ? formatTime(songDurations[song.id]) : ''}</span>
        `;

        // Clicking a song loads & plays it, then opens the player page
        const playThisSong = () => {
            if (index !== currentSongIndex || !audioPlayer.src) {
                currentSongIndex = index;
                loadSong(songs[currentSongIndex]);
            }
            playTrack();
            showPlayerPage();
        };
        listItem.addEventListener('click', playThisSong);
        listItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                playThisSong();
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

function updateNowPlayingInList() {
    songListElement.querySelectorAll('li[data-index]').forEach(li => {
        const isCurrent = hasStarted && Number(li.dataset.index) === currentSongIndex;
        li.classList.toggle('now-playing', isCurrent);
        if (isCurrent) li.setAttribute('aria-current', 'true');
        else li.removeAttribute('aria-current');
    });
}

function updateSongCount() {
    const allKnown = songs.every(song => songDurations[song.id]);
    const total = allKnown
        ? ` · ${formatTotalDuration(songs.reduce((sum, s) => sum + songDurations[s.id], 0))}`
        : '';
    songCountElement.textContent = `${songs.length} songs${total}`;
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
    const height = lyricsContainer.clientHeight;
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

function toggleLyrics() {
    showLyrics = !showLyrics;
    saveSetting('showLyrics', showLyrics);
    applyLyricsVisibility();
}

lyricsToggleBtn.addEventListener('click', toggleLyrics);

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

init();

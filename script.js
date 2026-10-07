// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');
const songCountElement = document.getElementById('songCount');
const searchInput = document.getElementById('searchInput');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

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

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const progressThumb = document.getElementById('progressThumb');
const progressTooltip = document.getElementById('progressTooltip');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const muteBtn = document.getElementById('muteBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

// Mini player (shown on the home page)
const miniPlayer = document.getElementById('miniPlayer');
const miniInfo = document.getElementById('miniInfo');
const miniArt = document.getElementById('miniArt');
const miniTitle = document.getElementById('miniTitle');
const miniArtist = document.getElementById('miniArtist');
const miniProgressBar = document.getElementById('miniProgressBar');
const miniPrevBtn = document.getElementById('miniPrevBtn');
const miniPlayPauseBtn = document.getElementById('miniPlayPauseBtn');
const miniNextBtn = document.getElementById('miniNextBtn');

// App State
let songs = [
    {
        id: 1,
        title: "Fallen",
        artist: "Lola Amour",
        album: "Lola Amour",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273b42607713c1dd129afa9f350",
        audioSrc: "audio/Fallen - Lola Amour.mp3",
        videoBgSrc: "videos/Fallen - Lola Amour.mp4", // Path video background specifically for this song
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
        videoBgSrc: "videos/Perfect - One Direction.mp4", // Path video background specifically for this song
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
        videoBgSrc: "videos/Heat Waves - Glass Animals.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 2.81, text: "Last night, all I think about is you" },
            { time: 6.28, text: "Don't stop, baby, you can walk through" },
            { time: 8.82, text: "Don't wanna, but I think about you" },
            { time: 11.84, text: "You know that I'm never gonna lose" },
            { time: 15.18, text: "♪" },
            { time: 29.83, text: "Road shimmer, wiggling the vision" },
            { time: 32.48, text: "Heat, heat waves, I'm swimming in a mirror" },
            { time: 35.55, text: "Road shimmer, wiggling the vision" },
            { time: 38.4, text: "Heat, heat waves, I'm swimmin' in a-" },
            { time: 41.84, text: "Sometimes all I think about is you" },
            { time: 44.79, text: "Late nights in the middle of June" },
            { time: 47.27, text: "Heat waves been faking me out" },
            { time: 51.08, text: "Can't make you happier now" },
            { time: 53.98, text: "Sometimes all I think about is you" },
            { time: 56.9, text: "Late nights in the middle of June" },
            { time: 59.64, text: "Heat waves been faking me out" },
            { time: 62.57, text: "Can't make you happier now" },
            { time: 65.87, text: "Usually, I put something on TV" },
            { time: 68.86, text: "So we never think about you and me" },
            { time: 71.72, text: "But today, I see our reflections clearly in Hollywood" },
            { time: 75.65, text: "Laying on the screen" },
            { time: 77.62, text: "You just need a better life than this" },
            { time: 80.18, text: "You need something I can never give" },
            { time: 83.21, text: "Fake water all across the road" },
            { time: 85.75, text: "It's gone now, the night has come, but" },
            { time: 89.28, text: "Sometimes all I think about is you" },
            { time: 91.84, text: "Late nights in the middle of June" },
            { time: 94.79, text: "Heat waves been faking me out" },
            { time: 97.85, text: "Can't make you happier now" },
            { time: 101.17, text: "You can't fight it, you can't breathe" },
            { time: 103.42, text: "You say something so loving, but" },
            { time: 106.68, text: "Now I gotta let you go" },
            { time: 109.68, text: "You'll be better off with someone new" },
            { time: 112.49, text: "I don't wanna be alone" },
            { time: 115.41, text: "You know it hurts me too" },
            { time: 118.5, text: "You look so broken when you cry" },
            { time: 121.53, text: "One more and then I say goodbye" },
            { time: 124.39, text: "Sometimes all I think about is you" },
            { time: 127.66, text: "Late nights in the middle of June" },
            { time: 130.82, text: "Heat waves been faking me out" },
            { time: 133.53, text: "Can't make you happier now" },
            { time: 136.26, text: "Sometimes all I think about is you" },
            { time: 140.01, text: "Late nights in the middle of June" },
            { time: 142.81, text: "Heat waves been faking me out" },
            { time: 146.05, text: "Can't make you happier now" },
            { time: 148.81, text: "I just wonder what you're dreaming of" },
            { time: 151.84, text: "When you sleep and smile so comfortable" },
            { time: 154.83, text: "I just wish that I could give you that" },
            { time: 157.47, text: "That look that's perfectly un-sad" },
            { time: 159.92, text: "Sometimes all I think about is you" },
            { time: 163.83, text: "Late nights in the middle of June" },
            { time: 166.52, text: "Heat waves been faking me out" },
            { time: 169.13, text: "Heat waves been faking me out" },
            { time: 173.05, text: "♪" },
            { time: 176.51, text: "Sometimes all I think about is you" },
            { time: 178.44, text: "Late nights in the middle of June" },
            { time: 181.28, text: "Heat waves been faking me out" },
            { time: 184.1, text: "Can't make you happier now" },
            { time: 187.09, text: "Sometimes all I think about is you" },
            { time: 190.19, text: "Late nights in the middle of June" },
            { time: 193.15, text: "Heat waves been faking me out" },
            { time: 196.25, text: "Can't make you happier now" },
            { time: 200.19, text: "Road shimmer wiggling the vision" },
            { time: 202.84, text: "Heat, heat waves, I'm swimming in a mirror" },
            { time: 205.41, text: "Road shimmer wiggling the vision" },
            { time: 207.9, text: "Heat, heat waves, I'm swimming in a mirror" },
            { time: 209.66, text: "♪" }
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273828789ff08a16218b2ea9445",
        audioSrc: "audio/Rewrite The Stars - James Arthur & Anne-Marie.mp3",
        videoBgSrc: "videos/Rewrite The Stars - James Arthur & Anne-Marie.mp4",
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
        videoBgSrc: "videos/Beauty And A Beat - Justin Bieber, Nicki Minaj.mp4",
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
        videoBgSrc: "videos/The Day You Said Goodnight - Hale.mp4",
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
        videoBgSrc: "videos/See You Again - Wiz Khalifa, Charlie Puth.mp4",
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
        videoBgSrc: "videos/Drag Me Down - One Direction.mp4",
        lyrics: [
            { time: 7.35, text: "I've got fire for a heart" },
            { time: 9.44, text: "I'm not scared of the dark" },
            { time: 11.24, text: "You've never seen it look so easy" },
            { time: 14.24, text: "I got a river for a soul" },
            { time: 16.54, text: "And baby, you're a boat" },
            { time: 18.48, text: "Baby, you're my only reason" },
            { time: 20.84, text: "If I didn't have you, there would be nothing left" },
            { time: 24.31, text: "The shell of a man that could never be his best" },
            { time: 27.87, text: "If I didn't have you, I'd never see the sun" },
            { time: 31.12, text: "You taught me how to be someone, yeah" },
            { time: 34.82, text: "All my life, you stood by me" },
            { time: 38.54, text: "When no one else was ever behind me" },
            { time: 41.96, text: "All these lights, they can't blind me" },
            { time: 45.57, text: "With your love, nobody can drag me down" },
            { time: 48.89, text: "All my life, you stood by me" },
            { time: 52.48, text: "When no one else was ever behind me" },
            { time: 55.82, text: "All these lights, they can't blind me" },
            { time: 59.32, text: "With your love, nobody can drag me down" },
            { time: 65.18, text: "Nobody, nobody (hey)" },
            { time: 67.78, text: "Nobody can drag me down" },
            { time: 72.0, text: "Nobody, nobody (hey)" },
            { time: 74.7, text: "Nobody can drag me down" },
            { time: 76.96, text: "I got fire for a heart" },
            { time: 79.13, text: "I'm not scared of the dark" },
            { time: 80.77, text: "You've never seen it look so easy" },
            { time: 83.72, text: "I got a river for a soul" },
            { time: 85.95, text: "And baby, you're a boat" },
            { time: 87.95, text: "Baby, you're my only reason" },
            { time: 90.48, text: "If I didn't have you, there would be nothing left (nothing left)" },
            { time: 93.78, text: "The shell of a man who could never be his best (be his best)" },
            { time: 97.26, text: "If I didn't have you, I'd never see the sun (see the sun)" },
            { time: 100.77, text: "You taught me how to be someone, yeah" },
            { time: 104.56, text: "All my life, you stood by me" },
            { time: 108.22, text: "When no one else was ever behind me" },
            { time: 111.51, text: "All these lights, they can't blind me" },
            { time: 115.15, text: "With your love, nobody can drag me down" },
            { time: 120.84, text: "Nobody, nobody (hey)" },
            { time: 123.48, text: "Nobody can drag me down" },
            { time: 127.75, text: "Nobody, nobody (hey)" },
            { time: 130.29, text: "Nobody can drag me-" },
            { time: 132.43, text: "All my life, you stood by me" },
            { time: 136.08, text: "When no one else was ever behind me" },
            { time: 139.33, text: "All these lights, they can't blind me" },
            { time: 143.08, text: "With your love, nobody can drag me down" },
            { time: 146.15, text: "All my life, you stood by me" },
            { time: 149.83, text: "When no one else was ever behind me" },
            { time: 153.27, text: "All these lights, they can't blind me" },
            { time: 156.97, text: "With your love, nobody can drag me down" },
            { time: 162.65, text: "Nobody, nobody (hey)" },
            { time: 165.06, text: "Nobody can drag me down (down), yeah" },
            { time: 169.46, text: "Nobody, nobody (hey)" },
            { time: 172.15, text: "Nobody can drag me down" },
            { time: 176.46, text: "Nobody, nobody (hey)" },
            { time: 179.02, text: "Nobody can drag me down (down)" },
            { time: 183.39, text: "Nobody, nobody (hey)" },
            { time: 185.93, text: "Nobody can drag me down" },
            { time: 188.17, text: "♪" }
        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all
let hasStarted = false; // Becomes true after the first play, used to show the mini player
let activeLyricIndex = -1;
let isSeeking = false;
let autoScrollPausedUntil = 0; // Pause lyric auto-scroll briefly after the user scrolls manually
const songDurations = {};

const SEEK_STEP = 5; // Seconds to skip with arrow keys

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

function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function isPlayerPageActive() {
    return playerPage.classList.contains('active');
}

// Paint the filled part of a range slider
function updateRangeFill(slider) {
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 1;
    const percent = ((parseFloat(slider.value) - min) / (max - min)) * 100;
    slider.style.setProperty('--fill', `${percent}%`);
}

// --- Page Navigation ---
function setBackgroundVideo(src) {
    if (src) {
        if (!backgroundVideo.src.endsWith(encodeURI(src))) {
            backgroundVideo.src = src;
            backgroundVideo.load();
        }
        backgroundVideoContainer.classList.add('active');
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideoContainer.classList.remove('active');
        backgroundVideo.pause();
        backgroundVideo.removeAttribute('src');
        backgroundVideo.load();
    }
}

function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    setBackgroundVideo(null);
    updateMiniPlayerVisibility();
    // Music keeps playing; the mini player controls it from here
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    setBackgroundVideo(null);
    updateMiniPlayerVisibility();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');

    const currentSong = songs[currentSongIndex];
    setBackgroundVideo(currentSong && currentSong.videoBgSrc);
    updateMiniPlayerVisibility();
    sizeLyricsPadding();
    scrollToActiveLyric(true);
}

// --- Home Page Logic ---
function renderSongList(query = '') {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">No songs available.</li>';
        return;
    }

    const q = query.trim().toLowerCase();
    const matches = songs
        .map((song, index) => ({ song, index }))
        .filter(({ song }) => !q || `${song.title} ${song.artist} ${song.album}`.toLowerCase().includes(q));

    if (matches.length === 0) {
        songListElement.innerHTML = `<li class="loading-songs">No songs match "${escapeHtml(query)}".</li>`;
        return;
    }

    matches.forEach(({ song, index }) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
            <span class="song-index">${index + 1}</span>
            <span class="equalizer"><span></span><span></span><span></span></span>
            <div class="song-art-wrap">
                <img src="${escapeHtml(song.albumArtUrl)}" alt="${escapeHtml(song.title)}" class="song-art-list" loading="lazy">
                <span class="play-overlay"><i class="fas fa-play"></i></span>
            </div>
            <div class="song-info-list">
                <h3>${escapeHtml(song.title)}</h3>
                <p>${escapeHtml(song.artist)}</p>
            </div>
            <span class="song-duration">${songDurations[song.id] ? formatTime(songDurations[song.id]) : ''}</span>
        `;

        // Clicking a song loads & plays it, then opens the player page
        listItem.addEventListener('click', () => {
            if (index !== currentSongIndex || !audioPlayer.src) {
                currentSongIndex = index;
                loadSong(songs[currentSongIndex]);
            }
            playTrack();
            showPlayerPage();
        });

        // Preview the song's background video on hover
        listItem.addEventListener('mouseenter', () => {
            if (canHover && homePage.classList.contains('active') && song.videoBgSrc) {
                setBackgroundVideo(song.videoBgSrc);
                bodyElement.classList.add('player-active-bg');
            }
        });
        listItem.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                setBackgroundVideo(null);
                bodyElement.classList.remove('player-active-bg');
            }
        });

        songListElement.appendChild(listItem);
    });

    updateNowPlayingInList();
}

function updateNowPlayingInList() {
    songListElement.querySelectorAll('li[data-index]').forEach(li => {
        li.classList.toggle('now-playing', hasStarted && Number(li.dataset.index) === currentSongIndex);
    });
}

function updateSongCount() {
    const total = Object.keys(songDurations).length === songs.length
        ? ` · ${Math.round(songs.reduce((sum, s) => sum + songDurations[s.id], 0) / 60)} min`
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
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        playerTrackAlbum.textContent = "";
        lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>";
        audioPlayer.removeAttribute('src');
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        setProgressUI(0);
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    playerTrackAlbum.textContent = song.album || "";

    miniArt.src = song.albumArtUrl;
    miniTitle.textContent = song.title;
    miniArtist.textContent = song.artist;

    renderLyrics(song.lyrics);

    audioPlayer.src = song.audioSrc;
    audioPlayer.load();
    audioPlayer.playbackRate = parseFloat(playerSpeedSlider.value);
    playerCurrentTime.textContent = "0:00";
    playerTotalDuration.textContent = songDurations[song.id] ? formatTime(songDurations[song.id]) : "0:00";
    setProgressUI(0);

    updateMediaSession(song);
    updateNowPlayingInList();
    saveSetting('lastSongIndex', currentSongIndex);

    if (isPlayerPageActive()) setBackgroundVideo(song.videoBgSrc);
}

function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    lyricsContainer.scrollTop = 0;
    activeLyricIndex = -1;
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics are not available for this song.</p>";
        return;
    }

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

    const lines = lyricsContainer.querySelectorAll('.lyric-line');
    lines.forEach((line, i) => {
        line.classList.toggle('highlight', i === index);
        line.classList.toggle('past', i < index);
    });
    scrollToActiveLyric();
}

// Keep the active lyric centered in the lyrics box
function scrollToActiveLyric(force = false) {
    if (!force && Date.now() < autoScrollPausedUntil) return;
    const line = lyricsContainer.querySelectorAll('.lyric-line')[activeLyricIndex];
    if (!line) return;
    const top = line.offsetTop - lyricsContainer.clientHeight / 2 + line.offsetHeight / 2;
    lyricsContainer.scrollTo({ top, behavior: force ? 'auto' : 'smooth' });
}

// Pad the lyrics box by half its height so the first and last lines can sit in the middle
function sizeLyricsPadding() {
    if (!isPlayerPageActive()) return;
    const pad = Math.max(0, lyricsContainer.clientHeight / 2 - 20);
    lyricsContainer.style.paddingTop = `${pad}px`;
    lyricsContainer.style.paddingBottom = `${pad}px`;
}

window.addEventListener('resize', () => {
    sizeLyricsPadding();
    scrollToActiveLyric(true);
});

['wheel', 'touchmove'].forEach(evt => {
    lyricsContainer.addEventListener(evt, () => {
        autoScrollPausedUntil = Date.now() + 3000;
    }, { passive: true });
});

// Swipe left/right on the album art area to change song (phones)
const playerHeader = document.querySelector('.player-header');
let swipeStartX = null;
let swipeStartY = null;
playerHeader.addEventListener('touchstart', (e) => {
    swipeStartX = e.touches[0].clientX;
    swipeStartY = e.touches[0].clientY;
}, { passive: true });
playerHeader.addEventListener('touchend', (e) => {
    if (swipeStartX === null) return;
    const dx = e.changedTouches[0].clientX - swipeStartX;
    const dy = e.changedTouches[0].clientY - swipeStartY;
    swipeStartX = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) nextTrackLogic();
        else changeSong(isShuffle ? randomSongIndex() : (currentSongIndex - 1 + songs.length) % songs.length);
    }
});

// Touch screens have no hover, so skip the video preview there (also saves mobile data)
const canHover = window.matchMedia('(hover: hover)').matches;

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
    const icon = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    playerPlayPauseBtn.innerHTML = icon;
    miniPlayPauseBtn.innerHTML = icon;
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
    const p = `${Math.min(100, Math.max(0, percent))}%`;
    playerProgressBar.style.width = p;
    progressThumb.style.left = p;
    miniProgressBar.style.width = p;
}

function updateTimeUI() {
    const { currentTime, duration } = audioPlayer;
    if (!isSeeking && duration) {
        setProgressUI((currentTime / duration) * 100);
        playerCurrentTime.textContent = formatTime(currentTime);
    }
    updateLyrics(currentTime);
}

// Smooth updates while playing (timeupdate alone only fires ~4 times a second)
function animationLoop() {
    updateTimeUI();
    if (isPlaying) requestAnimationFrame(animationLoop);
}

function percentFromPointer(e) {
    const rect = playerProgressBarContainer.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
}

function showSeekPreview(e) {
    const pct = percentFromPointer(e);
    progressTooltip.style.left = `${pct * 100}%`;
    progressTooltip.textContent = formatTime(pct * (audioPlayer.duration || 0));
    return pct;
}

playerProgressBarContainer.addEventListener('pointerdown', (e) => {
    if (!audioPlayer.duration) return;
    isSeeking = true;
    playerProgressBarContainer.setPointerCapture(e.pointerId);
    playerProgressBarContainer.classList.add('dragging');
    const pct = showSeekPreview(e);
    setProgressUI(pct * 100);
    playerCurrentTime.textContent = formatTime(pct * audioPlayer.duration);
});

playerProgressBarContainer.addEventListener('pointermove', (e) => {
    const pct = showSeekPreview(e);
    if (isSeeking) {
        setProgressUI(pct * 100);
        playerCurrentTime.textContent = formatTime(pct * audioPlayer.duration);
    }
});

function endSeek(e) {
    if (!isSeeking) return;
    isSeeking = false;
    playerProgressBarContainer.classList.remove('dragging');
    audioPlayer.currentTime = percentFromPointer(e) * audioPlayer.duration;
    autoScrollPausedUntil = 0;
}
playerProgressBarContainer.addEventListener('pointerup', endSeek);
playerProgressBarContainer.addEventListener('pointercancel', endSeek);

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
    playerTotalDuration.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('ended', () => {
    if (repeatMode !== 1) nextTrack(); // Repeat-one is handled by audio.loop
});

// --- Volume & speed ---
function updateVolumeIcon() {
    const v = audioPlayer.muted ? 0 : audioPlayer.volume;
    const icon = v === 0 ? 'fa-volume-xmark' : v < 0.5 ? 'fa-volume-low' : 'fa-volume-high';
    muteBtn.innerHTML = `<i class="fas ${icon}"></i>`;
}

function setVolume(value) {
    const v = Math.min(1, Math.max(0, value));
    audioPlayer.volume = v;
    audioPlayer.muted = v === 0;
    playerVolumeSlider.value = v;
    updateRangeFill(playerVolumeSlider);
    updateVolumeIcon();
    saveSetting('volume', v);
}

function toggleMute() {
    audioPlayer.muted = !audioPlayer.muted;
    if (!audioPlayer.muted && audioPlayer.volume === 0) setVolume(0.5);
    playerVolumeSlider.value = audioPlayer.muted ? 0 : audioPlayer.volume;
    updateRangeFill(playerVolumeSlider);
    updateVolumeIcon();
}

playerVolumeSlider.addEventListener('input', (e) => setVolume(parseFloat(e.target.value)));
muteBtn.addEventListener('click', toggleMute);

playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updateRangeFill(playerSpeedSlider);
});

// --- Shuffle & repeat ---
function updateShuffleButtonUI() {
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    playerShuffleBtn.title = isShuffle ? 'Shuffle: on' : 'Shuffle: off';
}

playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    updateShuffleButtonUI();
    saveSetting('shuffle', isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    saveSetting('repeatMode', repeatMode);
});

function updateRepeatButtonUI() {
    audioPlayer.loop = repeatMode === 1;
    playerRepeatBtn.classList.toggle('active-feature', repeatMode !== 0);
    // Font Awesome Free has no "repeat-1" icon, so draw a small "1" badge instead
    playerRepeatBtn.innerHTML = repeatMode === 1
        ? '<i class="fas fa-repeat"></i><span class="repeat-one-badge">1</span>'
        : '<i class="fas fa-repeat"></i>';
    playerRepeatBtn.title = ['Repeat: off', 'Repeat: one', 'Repeat: all'][repeatMode];
}

// --- Mini player ---
function updateMiniPlayerVisibility() {
    miniPlayer.classList.toggle('visible', hasStarted && !isPlayerPageActive());
}

miniInfo.addEventListener('click', showPlayerPage);
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
            break;
        case 's': case 'S':
            playerShuffleBtn.click();
            break;
        case 'r': case 'R':
            playerRepeatBtn.click();
            break;
        case '/':
            if (homePage.classList.contains('active')) { e.preventDefault(); searchInput.focus(); }
            break;
        case 'Escape':
            if (!homePage.classList.contains('active')) showHomePage();
            break;
    }
});

// --- Buttons ---
playerPlayPauseBtn.addEventListener('click', togglePlay);
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

searchInput.addEventListener('input', () => renderSongList(searchInput.value));

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

    renderSongList();
    updateSongCount();
    preloadDurations();

    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Music";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }

    // iPhone/iPad ignore audio.volume (only the hardware buttons work), so hide the slider there
    audioPlayer.volume = 0.5;
    if (audioPlayer.volume !== 0.5) {
        document.querySelector('.volume-control-player').classList.add('unsupported');
    }

    const savedVolume = loadSetting('volume', 0.8);
    setVolume(typeof savedVolume === 'number' ? savedVolume : 0.8);
    audioPlayer.playbackRate = parseFloat(playerSpeedSlider.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updateRangeFill(playerSpeedSlider);

    updatePlayPauseIcon();
    updateShuffleButtonUI();
    updateRepeatButtonUI();
    showHomePage();
}

init();

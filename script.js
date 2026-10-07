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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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
        // No video yet: the player shows an animated background made from the album art
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

// --- Backgrounds ---
const artColorCache = {};
let artBackgroundToken = 0;

// Pick 3 vivid, different colors from the album art (falls back to the purple theme if the image can't be read)
function extractArtColors(url) {
    return new Promise(resolve => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            try {
                const size = 24;
                const canvas = document.createElement('canvas');
                canvas.width = canvas.height = size;
                const ctx = canvas.getContext('2d');
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
                resolve(picked.map(p => `rgb(${p.r}, ${p.g}, ${p.b})`));
            } catch (e) {
                resolve(null); // Image server didn't allow reading pixels
            }
        };
        img.onerror = () => resolve(null);
        img.src = url;
    });
}

function showArtBackground(song) {
    const token = ++artBackgroundToken;
    artImage.style.backgroundImage = `url("${song.albumArtUrl}")`;
    const applyColors = (colors) => {
        if (token !== artBackgroundToken) return; // Song changed while loading
        ['--art-c1', '--art-c2', '--art-c3'].forEach((name, i) => {
            if (colors) artBackground.style.setProperty(name, colors[i]);
            else artBackground.style.removeProperty(name);
        });
    };
    if (song.id in artColorCache) {
        applyColors(artColorCache[song.id]);
    } else {
        extractArtColors(song.albumArtUrl).then(colors => {
            artColorCache[song.id] = colors;
            applyColors(colors);
        });
    }
}

// Show the song's video background, or an animated album-art background if it has no video
function setBackground(song) {
    if (!song) {
        backgroundVideoContainer.classList.remove('active', 'art-mode');
        backgroundVideo.pause();
        backgroundVideo.removeAttribute('src');
        backgroundVideo.load();
        return;
    }
    backgroundVideoContainer.classList.add('active');
    if (song.videoBgSrc) {
        backgroundVideoContainer.classList.remove('art-mode');
        if (!backgroundVideo.src.endsWith(encodeURI(song.videoBgSrc))) {
            backgroundVideo.src = song.videoBgSrc;
            backgroundVideo.load();
        }
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideoContainer.classList.add('art-mode');
        backgroundVideo.pause();
        backgroundVideo.removeAttribute('src');
        backgroundVideo.load();
        showArtBackground(song);
    }
}

// --- Page Navigation ---

function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    setBackground(null);
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
    setBackground(null);
    updateMiniPlayerVisibility();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');

    const currentSong = songs[currentSongIndex];
    setBackground(currentSong);
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
            if (canHover && homePage.classList.contains('active')) {
                setBackground(song);
                bodyElement.classList.add('player-active-bg');
            }
        });
        listItem.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                setBackground(null);
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

    if (isPlayerPageActive()) setBackground(song);
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

// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still be loaded)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this

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
            { time: 18, text: "What if I told you that I've fallen?" },
            { time: 22.8, text: "And I like the way you say my name" },
            { time: 27.64, text: "My heart skips a beat when I hear you calling" },
            { time: 33, text: "And I like that it won’t go away" },
            { time: 39, text: "But nevermind, don’t wanna give you any trouble" },
            { time: 44.1, text: "Nevermind, nevermind" },
            { time: 49.08, text: "I’m okay with being by your side for as long as I can hide" },
            { time: 54.9, text: "What if I told you that I’ve fallen?" },
            { time: 76.92, text: "What if I told you that I’ve fallen?" },
            { time: 82, text: "A heart shaped arrow through my chest" },
            { time: 87, text: "I’ll make your breakfast every morning" },
            { time: 91.9, text: "And pick you up when you’re a mess" },
            { time: 99.22, text: "I know that it won’t ever stop" },
            { time: 102.5, text: "You know I’ll be there when you call me whether you like it or not" },
            { time: 107.75, text: "Without a warning, now I’m falling for this picture on my phone" },
            { time: 112.8, text: "But don’t mind me I’m just falling, I’ll get back up on my own" },
            { time: 118, text: "Please don’t say my name" },
            { time: 121.9, text: "Help me put out this flame" },
            { time: 127.3, text: "I’d rather hold onto this feeling that you don’t even believe in" },
            { time: 133.4, text: "What if I told you that I’ve fallen?" },
            { time: 156.3, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 161, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 166, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 171, text: "What if I told you that I’ve fallen? (nevermind, nevermind, nevermind)" },
            { time: 176, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 179.9, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 184.9, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 190.1, text: "What if I told you that I’ve fallen? (Oh nevermind)" },
            { time: 193, text: "I said nevermind (I shouldn’t tell you that I’ve fallen)" },
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
            { time: 5.7, text: "I might never be your knight in shining armor" },
            { time: 10.2, text: "I might never be the one you take home to mother" },
            { time: 15.2, text: "And I might never be the one who brings you flowers" },
            { time: 20, text: "But I can be the one, be the one tonight" },
            { time: 25.4, text: "When I first saw you" },
            { time: 122, text: "From across the room" },
            { time: 129, text: "I could tell that you were curious (oh, yeah)" },
            { time: 135, text: "Girl, I hope you’re sure" },
            { time: 142, text: "What you're looking for" },
            { time: 149, text: "Cause I'm not good at making promises" },
            { time: 156, text: "But if you like causing trouble up in hotel rooms" },
            { time: 163, text: "And if you like having secret little rendezvous" },
            { time: 170, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 177, text: "Then baby, I'm perfect" },
            { time: 184, text: "Baby, I'm perfect for you" },
            { time: 191, text: "And if you like midnight driving with the windows down" },
            { time: 198, text: "And if you like going places we can’t even pronounce" },
            { time: 205, text: "If you like to do whatever you've been dreaming about" },
            { time: 212, text: "Baby, you're perfect" },
            { time: 219, text: "Baby, you're perfect" },
            { time: 226, text: "So let's start right now" },
            { time: 233, text: "I might never be the hands you put your heart in" },
            { time: 240, text: "Or the arms that hold you any time you want them" },
            { time: 247, text: "But that don’t mean that we can’t live here in the moment" },
            { time: 254, text: "Cause I can be the one you love from time to time" },
            { time: 261, text: "When I first saw you" },
            { time: 268, text: "From across the room" },
            { time: 275, text: "I could tell that you were curious (oh, yeah)" },
            { time: 282, text: "Girl, I hope you’re sure" },
            { time: 289, text: "What you're looking for" },
            { time: 296, text: "Cause I'm not good at making promises" },
            { time: 303, text: "But if you like causing trouble up in hotel rooms" },
            { time: 310, text: "And if you like having secret little rendezvous" },
            { time: 317, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 324, text: "Baby, I'm perfect" },
            { time: 331, text: "Baby, I'm perfect for you" },
            { time: 338, text: "And if you like midnight driving with the windows down" },
            { time: 345, text: "And if you like going places we can’t even pronounce" },
            { time: 352, text: "If you like to do whatever you've been dreaming about" },
            { time: 359, text: "Baby, you're perfect" },
            { time: 366, text: "Baby, you're perfect" },
            { time: 373, text: "So let's start right now" },
            { time: 380, text: "And if you like cameras flashing every time we go out" },
            { time: 387, text: "(Oh, yeah)" },
            { time: 394, text: "And if you're looking for someone to write your breakup songs about" },
            { time: 401, text: "Baby, I'm perfect" },
            { time: 408, text: "Baby, we're perfect" },
            { time: 415, text: "If you like causing trouble up in hotel rooms" },
            { time: 422, text: "And if you like having secret little rendezvous" },
            { time: 429, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 436, text: "Baby, I'm perfect" },
            { time: 443, text: "Baby, I'm perfect for you" },
            { time: 450, text: "And if you like midnight driving with the windows down" },
            { time: 457, text: "And if you like going places we can’t even pronounce" },
            { time: 464, text: "If you like to do whatever you've been dreaming about" },
            { time: 471, text: "Baby, you're perfect" },
            { time: 478, text: "Baby, you're perfect" },
            { time: 88, text: "I might never be your knight in shining armor" },
            { time: 95, text: "I might never be the one you take home to mother" },
            { time: 102, text: "And I might never be the one who brings you flowers" },
            { time: 109, text: "But I can be the one, be the one tonight" },
            { time: 116, text: "When I first saw you" },
            { time: 122, text: "From across the room" },
            { time: 129, text: "I could tell that you were curious (oh, yeah)" },
            { time: 135, text: "Girl, I hope you’re sure" },
            { time: 142, text: "What you're looking for" },
            { time: 149, text: "Cause I'm not good at making promises" },
            { time: 156, text: "But if you like causing trouble up in hotel rooms" },
            { time: 163, text: "And if you like having secret little rendezvous" },
            { time: 170, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 177, text: "Then baby, I'm perfect" },
            { time: 184, text: "Baby, I'm perfect for you" },
            { time: 191, text: "And if you like midnight driving with the windows down" },
            { time: 198, text: "And if you like going places we can’t even pronounce" },
            { time: 205, text: "If you like to do whatever you've been dreaming about" },
            { time: 212, text: "Baby, you're perfect" },
            { time: 219, text: "Baby, you're perfect" },
            { time: 226, text: "So let's start right now" },
            { time: 233, text: "I might never be the hands you put your heart in" },
            { time: 240, text: "Or the arms that hold you any time you want them" },
            { time: 247, text: "But that don’t mean that we can’t live here in the moment" },
            { time: 254, text: "Cause I can be the one you love from time to time" },
            { time: 261, text: "When I first saw you" },
            { time: 268, text: "From across the room" },
            { time: 275, text: "I could tell that you were curious (oh, yeah)" },
            { time: 282, text: "Girl, I hope you’re sure" },
            { time: 289, text: "What you're looking for" },
            { time: 296, text: "Cause I'm not good at making promises" },
            { time: 303, text: "But if you like causing trouble up in hotel rooms" },
            { time: 310, text: "And if you like having secret little rendezvous" },
            { time: 317, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 324, text: "Baby, I'm perfect" },
            { time: 331, text: "Baby, I'm perfect for you" },
            { time: 338, text: "And if you like midnight driving with the windows down" },
            { time: 345, text: "And if you like going places we can’t even pronounce" },
            { time: 352, text: "If you like to do whatever you've been dreaming about" },
            { time: 359, text: "Baby, you're perfect" },
            { time: 366, text: "Baby, you're perfect" },
            { time: 373, text: "So let's start right now" },
            { time: 380, text: "And if you like cameras flashing every time we go out" },
            { time: 387, text: "(Oh, yeah)" },
            { time: 394, text: "And if you're looking for someone to write your breakup songs about" },
            { time: 401, text: "Baby, I'm perfect" },
            { time: 408, text: "Baby, we're perfect" },
            { time: 415, text: "If you like causing trouble up in hotel rooms" },
            { time: 422, text: "And if you like having secret little rendezvous" },
            { time: 429, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 436, text: "Baby, I'm perfect" },
            { time: 443, text: "Baby, I'm perfect for you" },
            { time: 450, text: "And if you like midnight driving with the windows down" },
            { time: 457, text: "And if you like going places we can’t even pronounce" },
            { time: 464, text: "If you like to do whatever you've been dreaming about" },
            { time: 471, text: "Baby, you're perfect" },
            { time: 478, text: "Baby, you're perfect" },
            { time: 485, text: "So let's start right now" }
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
            { time: 1.0, text: "..." },
            { time: 18.0, text: "Road shimmer wigglin' the vision" },
            { time: 21.0, text: "Heat, heat waves, I'm swimmin' in a mirror" },
            { time: 24.5, text: "Road shimmer wigglin' the vision" },
            { time: 26.5, text: "Heat, heat waves, I'm swimmin' in a" },
            { time: 30.1, text: "Sometimes, all I think about is you" },
            { time: 32.5, text: "Late nights in the middle of June" },
            { time: 54.1, text: "Heat waves been fakin' me out" },
            { time: 59.0, text: "Can't make you happier now" },
            { time: 64.2, text: "Sometimes, all I think about is you" },
            { time: 69.3, text: "Late nights in the middle of June" },
            { time: 74.8, text: "Heat waves been fakin' me out" },
            { time: 79.5, text: "Can't make you happier now" },
            { time: 84.7, text: "Usually I put somethin' on TV" },
            { time: 89.9, text: "..." },
            { time: 95.2, text: "..." },
            { time: 100.4, text: "..." },
            { time: 105.6, text: "..." },
            { time: 110.8, text: "..." },
            { time: 116.3, text: "..." },
            { time: 121.5, text: "..." },
            { time: 126.8, text: "..." },
            { time: 132.1, text: "..." },
            { time: 137.4, text: "..." },
            { time: 142.6, text: "..." },
            { time: 148.0, text: "..." },
            { time: 153.2, text: "..." },
            { time: 158.6, text: "..." },
            { time: 164.1, text: "..." },
            { time: 169.5, text: "..." },
            { time: 175.0, text: "..." },
            { time: 180.4, text: "..." },
            { time: 186.0, text: "..." },
            { time: 192.5, text: "..." },
            { time: 199.3, text: "..." },
            { time: 206.0, text: "..." },
            { time: 213.5, text: "..." }
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
            { time: 1.5, text: "You know I want you" },
            { time: 5.2, text: "It's not a secret I try to hide" },
            { time: 100000, text: "You know you want me" },
            { time: 1000, text: "So don't keep sayin' our hands are tied" },
            { time: 1000, text: "You claim it's not in the cards" },
            { time: 1000, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 1000, text: "But you're here in my heart" },
            { time: 1000, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 1000, text: "What if we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "Nothin' could keep us apart" },
            { time: 1000, text: "You'd be the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one can say what we get to be" },
            { time: 1000, text: "So why don't we rewrite the stars?" },
            { time: 1000, text: "Maybe the world could be ours tonight" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You think it's easy" },
            { time: 1000, text: "You think I don't wanna run to you, yeah" },
            { time: 1000, text: "But there are mountains (There are mountains)" },
            { time: 1000, text: "And there are doors that we can't walk through" },
            { time: 1000, text: "I know you're wonderin' why" },
            { time: 1000, text: "Because we're able to be just you and me within these walls" },
            { time: 1000, text: "But when we go outside" },
            { time: 1000, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 1000, text: "No one can rewrite the stars" },
            { time: 1000, text: "How can you say you'll be mine?" },
            { time: 1000, text: "Everything keeps us apart" },
            { time: 1000, text: "And I'm not the one you were meant to find" },
            { time: 1000, text: "It's not up to you, it's not up to me" },
            { time: 1000, text: "When everyone tells us what we can be" },
            { time: 1000, text: "And how can we rewrite the stars?" },
            { time: 1000, text: "Say that the world can be ours tonight" },
            { time: 1000, text: "All I want is to fly with you" },
            { time: 1000, text: "All I want is to fall with you" },
            { time: 1000, text: "So just give me all of you" },
            { time: 1000, text: "It feels impossible" },
            { time: 1000, text: "It's not impossible" },
            { time: 1000, text: "Is it impossible?" },
            { time: 1000, text: "Say that it's possible" },
            { time: 1000, text: "How do we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "And nothin' could keep us apart" },
            { time: 1000, text: "'Cause you are the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one could say what we get to be" },
            { time: 1000, text: "And why don't we rewrite the stars?" },
            { time: 1000, text: "Changin' the world to be ours" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 1000, text: "But I can't have you" },
            { time: 1000, text: "We're bound to break and my hands are tied" }
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
            { time: 0  ,  text: "Cause you could be the one that I love" },
            { time: 4,  text: "I could be the one that you dream of " },
            { time: 8, text: "A message in a bottle is all I can do" },
            { time: 11, text: "Standin' here, hopin' it gets to you" },
            { time: 100, text: "You could be the one that I keep, and Iu" },
            { time: 100, text: "I could be the reason you can't sleep at night" },
            { time: 100, text: "A mеssage in a bottle is all I can do" },
            { time: 100, text: "Standin' herе, hopin' it gets to you" },
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
            { time: 1000, text: "I've been too busy ignoring and hiding" },
            { time: 1000, text: "About what my heart actually say" },
            { time: 1000, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 1000, text: "Sometimes a happiness is just a happiness" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I always pretending and lying" },
            { time: 1000, text: "I got used to feel empty" },
            { time: 1000, text: "'Cause all I got is unhappy" },
            { time: 1000, text: "Happiness, can't I get happiness?" },
            { time: 1000, text: "I've never been enjoying my serenity" },
            { time: 1000, text: "Even if I've got a lot of company" },
            { time: 1000, text: "That makes me happy" },
            { time: 1000, text: "And I don't even feel my own pain" },
            { time: 1000, text: "Whatever when the storms pouring rain" },
            { time: 1000, text: "Feels like a wind" },
            { time: 1000, text: "Soul try to figure it out" },
            { time: 1000, text: "From where I've been escaping" },
            { time: 1000, text: "Running to end all the sin" },
            { time: 1000, text: "Get away from the pressure" },
            { time: 1000, text: "Wondering to get a love that is so pure" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just somebody's pleasure" },
            { time: 1000, text: "I hold imagination" },
            { time: 1000, text: "Cover all of the sadness" },
            { time: 1000, text: "I don't feel something special" },
            { time: 1000, text: "Turn off the phone to get some spatial" },
            { time: 1000, text: "Never thought I'd living in true" },
            { time: 1000, text: "The truth that has been so blue" },
            { time: 1000, text: "It was in a blink of an eye" },
            { time: 1000, text: "Find a way how to say goodbye" },
            { time: 1000, text: "I've got to take me away from all sadness" },
            { time: 1000, text: "Stitch all my wounds, confess all the sins" },
            { time: 1000, text: "And took all my insecurities" },
            { time: 1000, text: "When will I got the love that is so pure?" },
            { time: 1000, text: "Gotta have to always make sure" },
            { time: 1000, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 1000, text: "Gotta have, gotta have to always make sure" },
            { time: 1000, text: "I'm not just somebody's pleasure" }
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
            { time: 1000, text: "I wanna be your vacuum cleaner" },
            { time: 1000, text: "Breathing in your dust" },
            { time: 1000, text: "I wanna be your Ford Cortina" },
            { time: 1000, text: "I will never rust" },
            { time: 1000, text: "If you like your coffee hot" },
            { time: 1000, text: "Let me be your coffee pot" },
            { time: 1000, text: "You call the shots, babe" },
            { time: 1000, text: "I just wanna be yours" },
            
            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },

            { time: 1000, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 1000, text: "Let me be the portable heater that you'll get cold without" },
            { time: 1000, text: "I wanna be your setting lotion (wanna be)" },
            { time: 1000, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 1000, text: "At least as deep as the Pacific Ocean" },
            { time: 1000, text: "I wanna be yours" },

            { time: 1000, text: "Secrets I have held in my heart" },
            { time: 1000, text: "Are harder to hide than I thought" },
            { time: 1000, text: "Maybe I just wanna be yours" },
            { time: 1000, text: "I wanna be yours, I wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 1000, text: "Wanna be yours, wanna be yours" },

            { time: 1000, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 1000, text: "Breathing in your dust (Wanna be yours)" },
            { time: 1000, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 1000, text: "I will never rust (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" },
            { time: 1000, text: "I just wanna be yours (Wanna be yours)" }
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
            { time: 0.2  ,  text: "Floor collapsing Floating" },
            { time: 5,  text: "bouncing back and " },
            { time: 7, text: "One day, I am gonna grow wings" },
            { time: 14.2, text: "A chemical reaction" },
            { time: 17.9, text: "Hysterical and useless" },
            { time: 23, text: "Hysterical and" },
            { time: 26, text: "Let down and hanging around" },
            { time: 33, text: "Crushed like a bug in the ground" },
            { time: 40, text: "Let down and hanging around" }

        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Make sure the page details are hidden
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Hide background video
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
    pauseTrack(); // Pause music when returning home
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
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Show background video

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Empty src if there is no custom video
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Important Changes here ---
        // When a song item is clicked, immediately load & play the song then display the player page
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Jump to the music player page
        });

        // Event listener for hover
        listItem.addEventListener('mouseenter', () => {
            // Only enable background video if we are on the home page
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Add class for body background color
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Hide background video only if we are on home page
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Pause video when mouse leaves
                backgroundVideo.src = ""; // Empty src to prevent playing in the background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Remove body background color class
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>"; // Replace text Content with inner HTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Call the render Lyrics function
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// New function to render lyrics
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Clean the lyrics container
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics are not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Store timestamp in data-attribute
        span.classList.add('lyric-line'); // Add class for styling
        lyricsContainer.appendChild(span);
        // Remove the added <br> manually, using CSS display:block or flexbox
        // lyrics Container.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error while playing:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Update background video
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
       // --- Logic highlight lyrics ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Determine when this line of lyrics ends. If this is the last line, assume it ends at the end of the song.
            // Or, better, assume it ends just before the next line starts.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lyrics only if highlighted line is not visible ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Check if the row is outside the container viewport
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll so that the nearest row appears in the viewport, with a smooth animation
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners for navigation buttons
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From the landing page to the home page

// Event Listener for the play button from the details page (if you want to use it)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Add log for initialization
    console.log("Songs array length:", songs.length); // Check the number of songs
    console.log("songListElement:", songListElement); // Check if song List Element is found

    renderSongList(); // This is what renders the track list
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // This will be displayed if the songs array is empty
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Set the initial speed
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Update speed display
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Start from the playlist page
    console.log("Initialization complete."); // Log completed initialization
}

init();

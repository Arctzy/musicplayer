// Song catalog. Load after lyrics-data.js and before script.js.
let songs = [
    {
        id: 1,
        title: "Fallen",
        artist: "Lola Amour",
        album: "Lola Amour",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273b42607713c1dd129afa9f350",
        audioSrc: "audio/Fallen - Lola Amour.mp3",
        // Lyrics with timestamp in seconds
        lyrics: lyricsBySongId[1]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "One Direction",
        album: "Made in the A.M.",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Perfect - One Direction.mp3",
        // Lyrics with timestamp in seconds
        lyrics: lyricsBySongId[2]
    },    
    {
        id: 3,
        title: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273712701c5e263efc8726b1464",
        audioSrc: "audio/Heat Waves - Glass Animals.mp3",
        // Lyrics with timestamp in seconds
        lyrics: lyricsBySongId[3]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273828789ff08a16218b2ea9445",
        audioSrc: "audio/Rewrite The Stars - James Arthur & Anne-Marie.mp3",
        lyrics: lyricsBySongId[4]
    },
    {
        id: 5,
        title: "Beauty And A Beat",
        artist: "Justin Bieber, Nicki Minaj",
        album: "Believe",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273f1d02a6cec967f8b6b78f76e",
        audioSrc: "audio/Beauty And A Beat - Justin Bieber, Nicki Minaj.mp3",
        lyrics: lyricsBySongId[5]
    },
    {
        id: 6,
        title: "The Day You Said Goodnight",
        artist: "Hale", 
        album: "Hale",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b27389d3628e226a3c7e0d0afbc3", 
        audioSrc: "audio/The Day You Said Goodnight - Hale.mp3",
        lyrics: lyricsBySongId[6]
    },
    {
        id: 7,
        title: "See You Again",
        artist: "Wiz Khalifa, Charlie Puth",
        album: "Furious 7 (Soundtrack)",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2734e5df11b17b2727da2b718d8",
        audioSrc: "audio/See You Again - Wiz Khalifa, Charlie Puth.mp3",
        lyrics: lyricsBySongId[7]
    },
    {
        id: 8,
        title: "Drag Me Down",
        artist: "One Direction",
        album: "Made in the A.M.",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Drag Me Down - One Direction.mp3",
        lyrics: lyricsBySongId[8]
    },
    {
        id: 9,
        title: "Merry Christmas, i miss you",
        artist: "Alex Crichton",
        album: "Merry Christmas, i miss you",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/db/68/80/db6880fb-9032-b17a-d082-6f00620c50c4/3b72e539-6ee5-430b-bea2-4e1c9cddd475.jpg/600x600bb.jpg",
        audioSrc: "audio/Alex Crichton - Merry Christmas, i miss you (Lyrics).mp3",
        lyrics: lyricsBySongId[9]
    },
    {
        id: 10,
        title: "Merry Christmas, Please Don't Call",
        artist: "Bleachers",
        album: "Merry Christmas, Please Don't Call",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ce/63/85/ce638513-9167-2a5c-2c4a-94b4c8f9f88f/198704216732_Cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Bleachers - Merry Christmas, Please Don't Call (Official Music Video).mp3",
        lyrics: lyricsBySongId[10]
    },
    {
        id: 11,
        title: "Roxanne",
        artist: "Chase Atlantic",
        album: "Nostalgia",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/90/d1/3f/90d13fba-4c95-f97a-511c-145a39df9e68/5055834135256.jpg/600x600bb.jpg",
        audioSrc: "audio/CHASE ATLANTIC-ROXANNE (LYRICS).mp3",
        lyrics: lyricsBySongId[11]
    },
    {
        id: 12,
        title: "Umaasa",
        artist: "Calein",
        album: "Umaasa",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/23/30/dc/2330dc81-31f7-e7fb-bb57-0f775dde48c2/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Calein - Umaasa (Official Lyric Video).mp3",
        lyrics: lyricsBySongId[12]
    },
    {
        id: 13,
        title: "HER",
        artist: "Chase Atlantic",
        album: "PHASES",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/d1/a6/63/d1a66336-de0b-d541-df25-3bcd3e14f7ea/4050538506297.jpg/600x600bb.jpg",
        audioSrc: "audio/Chase Atlantic - HER (Official Music Video).mp3",
        lyrics: lyricsBySongId[13]
    },
    {
        id: 14,
        title: "Swim",
        artist: "Chase Atlantic",
        album: "Chase Atlantic",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d1/36/7e/d1367ea2-40e5-c689-5241-290f1b0daaf9/093624914174.jpg/600x600bb.jpg",
        audioSrc: "audio/Chase Atlantic - SWIM (Official Music Video).mp3",
        lyrics: lyricsBySongId[14]
    },
    {
        id: 15,
        title: "Consume",
        artist: "Chase Atlantic, Goon Des Garcons",
        album: "Chase Atlantic",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d1/36/7e/d1367ea2-40e5-c689-5241-290f1b0daaf9/093624914174.jpg/600x600bb.jpg",
        audioSrc: "audio/Chase Atlantic - _Consume_ feat. Goon Des Garcons (Official Audio).mp3",
        lyrics: lyricsBySongId[15]
    },
    {
        id: 16,
        title: "Bags",
        artist: "Clairo",
        album: "Immunity",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f2/47/06/f24706bc-a90c-f730-bd8a-586ddde8af3e/829299184631.jpg/600x600bb.jpg",
        audioSrc: "audio/Clairo - Bags.mp3",
        lyrics: lyricsBySongId[16]
    },
    {
        id: 17,
        title: "Colors",
        artist: "Halsey",
        album: "Complementary Colors",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/ae/44/d8/ae44d802-08b7-06d1-1d01-07cddd157241/00602547864475.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/Halsey - Colors (Lyrics).mp3",
        lyrics: lyricsBySongId[17]
    },
    {
        id: 18,
        title: "Hoodie",
        artist: "Hey Violet",
        album: "From the Outside",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/42/7a/bf/427abf52-04b9-2802-5ce3-82bfb0f938cf/00602557570885.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/Hey Violet - Hoodie (Official Music Video).mp3",
        lyrics: lyricsBySongId[18]
    },
    {
        id: 19,
        title: "Arch & Point",
        artist: "Miguel",
        album: "Kaleidoscope Dream",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a1/56/ac/a156acb2-068e-a616-3e56-86ca656c14ce/886443632943.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - Arch & Point (Audio).mp3",
        lyrics: lyricsBySongId[19]
    },
    {
        id: 20,
        title: "Girl With The Tattoo Enter.lewd",
        artist: "Miguel",
        album: "All I Want Is You",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4b/85/3f/4b853f59-1e43-5e93-54cf-5a799c04ed1d/884977670820.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - Girl With The Tattoo Enter.lewd (Official Audio).mp3",
        lyrics: lyricsBySongId[20]
    },
    {
        id: 21,
        title: "Sure Thing",
        artist: "Miguel",
        album: "All I Want Is You",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/4b/85/3f/4b853f59-1e43-5e93-54cf-5a799c04ed1d/884977670820.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - Sure Thing (Official Video).mp3",
        lyrics: lyricsBySongId[21]
    },
    {
        id: 22,
        title: "damned",
        artist: "Miguel",
        album: "Wildheart (Deluxe)",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/2e/e8/ba/2ee8baac-f1a8-b82d-53be-ab2140d09d14/886445204278.jpg/600x600bb.jpg",
        audioSrc: "audio/Miguel - damned (Official Audio).mp3",
        lyrics: lyricsBySongId[22]
    },
    {
        id: 23,
        title: "Mr. Brightside",
        artist: "The Killers",
        album: "Direct Hits",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/64/9c/11649c80-2066-dba8-77a9-df7eecae26c1/17UM1IM06937.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/The Killers - Mr. Brightside (Official Music Video).mp3",
        lyrics: lyricsBySongId[23]
    },
    {
        id: 24,
        title: "Garden (Say It Like Dat)",
        artist: "SZA",
        album: "Ctrl",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg",
        audioSrc: "audio/SZA - Garden (Say It Like Dat) (Official Video).mp3",
        lyrics: lyricsBySongId[24]
    },
    {
        id: 25,
        title: "Good Days",
        artist: "SZA",
        album: "SOS",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/93/13/6293132e-20ff-67ab-3d1f-96bb6797a6ba/196589564955.jpg/600x600bb.jpg",
        audioSrc: "audio/SZA - Good Days (Official Video).mp3",
        lyrics: lyricsBySongId[25]
    },
    {
        id: 26,
        title: "Normal Girl",
        artist: "SZA",
        album: "Ctrl",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a2/bc/ad/a2bcad46-b389-4be1-8bac-5a0959b0b8e4/886446548449.jpg/600x600bb.jpg",
        audioSrc: "audio/SZA - Normal Girl (Official Audio).mp3",
        lyrics: lyricsBySongId[26]
    },
    {
        id: 27,
        title: "About You",
        artist: "The 1975",
        album: "Being Funny in a Foreign Language",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1f/c7/98/1fc7988e-0a39-5724-1390-e45246250e24/198704825934_Cover.jpg/600x600bb.jpg",
        audioSrc: "audio/The 1975 - About You (Official).mp3",
        lyrics: lyricsBySongId[27]
    },
    {
        id: 28,
        title: "fallingforyou",
        artist: "The 1975",
        album: "The 1975",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1e/bc/71/1ebc7173-6bcd-26d9-3a67-1d3ceffded78/13UAAIM67470.rgb.jpg/600x600bb.jpg",
        audioSrc: "audio/The 1975 - fallingforyou.mp3",
        lyrics: lyricsBySongId[28]
    },
    {
        id: 29,
        title: "Paraluman",
        artist: "Adie",
        album: "Paraluman",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/52/17/89/5217896a-4b66-4f70-f43e-86dfd891a36b/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Adie - Paraluman (Official Lyric Video).mp3",
        lyrics: lyricsBySongId[29]
    },
    {
        id: 30,
        title: "Stop The Wedding!",
        artist: "Ashe",
        album: "The Girl Of Your Dreams",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/1b/86/c9/1b86c988-03b8-ca21-10a5-0963d09f5bcf/075679561893.jpg/600x600bb.jpg",
        audioSrc: "audio/Ashe - Stop The Wedding! (Official Video).mp3",
        lyrics: lyricsBySongId[30]
    },
    {
        id: 31,
        title: "Mahal Magmahal",
        artist: "Esremborak",
        album: "Mahal Magmahal",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cb/32/2d/cb322d8a-9744-d03e-a3d1-61fc0f92108f/196874828038.jpg/600x600bb.jpg",
        audioSrc: "audio/Esremborak - Mahal Magmahal [Official Music Video].mp3",
        lyrics: lyricsBySongId[31]
    },
    {
        id: 32,
        title: "Multo",
        artist: "Cup of Joe",
        album: "Silakbo",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bb/0f/b1/bb0fb116-d017-2a94-dab6-0a82a60ecd29/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Multo - Cup of Joe (Official Music Video).mp3",
        lyrics: lyricsBySongId[32]
    },
    {
        id: 33,
        title: "Panaginip",
        artist: "nicole",
        album: "Panaginip",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6c/58/4e/6c584e9b-7127-2553-bf61-589902ea0fa6/cover.jpg/600x600bb.jpg",
        audioSrc: "audio/Panaginip - nicole (Official Music Video).mp3",
        lyrics: lyricsBySongId[33]
    },
    {
        id: 34,
        title: "Totoong tayo",
        artist: "Jin DC",
        album: "Totoong tayo",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/31/40/f2/3140f2d7-79f5-ef9a-eb9a-a097b27ad3ef/5063992655325.jpg/600x600bb.jpg",
        audioSrc: "audio/Totoong tayo - Jin DC (Official Lyric Video).mp3",
        lyrics: lyricsBySongId[34]
    },
    {
        id: 35,
        title: "Na Para Bang",
        artist: "Mariah Deborah",
        album: "Na Para Bang",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/11/bc/e3/11bce3fa-1306-a5ef-3e6b-65f188fb4853/824296023419_cover.jpg/600x600bb.jpg",
        audioSrc: "audio/_Na Para Bang_ - Mariah Deborah _ Wish 107.5 Bus.mp3",
        // Live Wish 107.5 Bus performance
        lyrics: lyricsBySongId[35]
    },
    {
        id: 36,
        title: "Kalapastangan",
        artist: "fitterkarma",
        album: "Kalapastangan",
        albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2e/aa/28/2eaa2815-af10-fb22-1800-9313c60014ad/0.jpg/600x600bb.jpg",
        audioSrc: "audio/fitterkarma - Kalapastangan (Lyrics).mp3",
        lyrics: lyricsBySongId[36]
    },
    {
        id: 37,
        title: "Pag-Ibig ay Kanibalismo II",
        artist: "fitterkarma",
        album: "Pag-Ibig ay Kanibalismo II",
        albumArtUrl: "https://cdn-images.dzcdn.net/images/cover/79da2d25f41ac9a1054f5a8335de2a3a/600x600-000000-80-0-0.jpg",
        audioSrc: "audio/fitterkarma - Pag-Ibig ay Kanibalismo II (Lyrics).mp3",
        lyrics: lyricsBySongId[37]
    },
];


const dummyTracks = [
    {
        "id": "1",
        "name": "Stay",
        "artist": "The Kid LAROI & Justin Bieber",
        "album": "F*CK LOVE 3: OVER YOU",
        "cover": "https://i.scdn.co/image/ab67616d00001e02b4d59e6fa7e5e7cbc57ac33a",
        "uri": "spotify:track:567e29TDzLwZwfDuEpGTwo"
    },
    {
        "id": "2",
        "name": "Industry Baby",
        "artist": "Lil Nas X & Jack Harlow",
        "album": "MONTERO",
        "cover": "https://i.scdn.co/image/ab67616d00001e02ba26678947112dff3c3158bf",
        "uri": "spotify:track:27NovPIUIRrOZoCHxABJwK"
    },
    {
        "id": "3",
        "name": "Good 4 U",
        "artist": "Olivia Rodrigo",
        "album": "SOUR",
        "cover": "https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a",
        "uri": "spotify:track:4ZtFanR9U6ndgddUvNcjcG"
    },
    {
        "id": "4",
        "name": "Levitating",
        "artist": "Dua Lipa ft. DaBaby",
        "album": "Future Nostalgia",
        "cover": "https://i.scdn.co/image/ab67616d00001e02383ed92279639a6b02e23ba3",
        "uri": "spotify:track:39LLxExYz6ewLAcYrzQQyP"
    },
    {
        "id": "5",
        "name": "Montero (Call Me By Your Name)",
        "artist": "Lil Nas X",
        "album": "MONTERO",
        "cover": "https://i.scdn.co/image/ab67616d00001e02ba26678947112dff3c3158bf",
        "uri": "spotify:track:27NovPIUIRrOZoCHxABJwK"
    },
    {
        "id": "6",
        "name": "Blinding Lights",
        "artist": "The Weeknd",
        "album": "After Hours",
        "cover": "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
        "uri": "spotify:track:0VjIjW4GlUZAMYd2vXMi3b"
    },
    {
        "id": "7",
        "name": "Save Your Tears",
        "artist": "The Weeknd & Ariana Grande",
        "album": "After Hours",
        "cover": "https://i.scdn.co/image/ab67616d00001e02c6af5ffa661a365b77df6ef6",
        "uri": "spotify:track:37BZB0z9T8Xu7U3e65qxFy"
    },
    {
        "id": "8",
        "name": "Heat Waves",
        "artist": "Glass Animals",
        "album": "Dreamland",
        "cover": "https://i.scdn.co/image/ab67616d00001e02b4d59e6fa7e5e7cbc57ac33a",
        "uri": "spotify:track:567e29TDzLwZwfDuEpGTwo"
    },
    {
        "id": "9",
        "name": "Kiss Me More",
        "artist": "Doja Cat ft. SZA",
        "album": "Planet Her",
        "cover": "https://i.scdn.co/image/ab67616d00001e024590660e50300db0015d9b1d",
        "uri": "spotify:track:4tcg6XoxZZ5q7njPUPlDrG"
    },
    {
        "id": "10",
        "name": "Leave The Door Open",
        "artist": "Silk Sonic (Bruno Mars & Anderson .Paak)",
        "album": "An Evening with Silk Sonic",
        "cover": "https://i.scdn.co/image/ab67616d00001e02b4d59e6fa7e5e7cbc57ac33a",
        "uri": "spotify:track:567e29TDzLwZwfDuEpGTwo"
    },
    {
        "id": "11",
        "name": "drivers license",
        "artist": "Olivia Rodrigo",
        "album": "SOUR",
        "cover": "https://i.scdn.co/image/ab67616d00001e02c6af5ffa661a365b77df6ef6",
        "uri": "spotify:track:37BZB0z9T8Xu7U3e65qxFy"
    },
    {
        "id": "12",
        "name": "Watermelon Sugar",
        "artist": "Harry Styles",
        "album": "Fine Line",
        "cover": "https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
        "uri": "spotify:track:6UelLqGlWMcVH1E5c4H7lY"
    },
    {
        "id": "13",
        "name": "positions",
        "artist": "Ariana Grande",
        "album": "Positions",
        "cover": "https://i.scdn.co/image/ab67616d00001e025ef878a782c987d38d82b605",
        "uri": "spotify:track:35mvY5S1H3J2QZyna3TFe0"
    },
    {
        "id": "14",
        "name": "Dákiti",
        "artist": "Bad Bunny & Jhay Cortez",
        "album": "El Último Tour Del Mundo",
        "cover": "https://i.scdn.co/image/ab67616d00001e02b4d59e6fa7e5e7cbc57ac33a",
        "uri": "spotify:track:567e29TDzLwZwfDuEpGTwo"
    },
    {
        "id": "15",
        "name": "Mood",
        "artist": "24kGoldn ft. Iann Dior",
        "album": "El Dorado",
        "cover": "https://upload.wikimedia.org/wikipedia/en/d/d0/Cloud_Nine_coverartwork.jpg",
        "uri": "spotify:track:35mvY5S1H3J2QZyna3TFe0"
    },
    {
        "id": "16",
        "name": "deja vu",
        "artist": "Olivia Rodrigo",
        "album": "SOUR",
        "cover": "https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a",
        "uri": "spotify:track:4ZtFanR9U6ndgddUvNcjcG"
    },
    {
        "id": "17",
        "name": "Roses (Imanbek Remix)",
        "artist": "SAINt JHN",
        "album": "While The World Was Burning",
        "cover": "https://i.scdn.co/image/ab67616d00001e024590660e50300db0015d9b1d",
        "uri": "spotify:track:4tcg6XoxZZ5q7njPUPlDrG"
    },
    {
        "id": "18",
        "name": "Dynamite",
        "artist": "BTS",
        "album": "BE",
        "cover": "https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a",
        "uri": "spotify:track:4ZtFanR9U6ndgddUvNcjcG"
    },
    {
        "id": "19",
        "name": "Adore You",
        "artist": "Harry Styles",
        "album": "Fine Line",
        "cover": "https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
        "uri": "spotify:track:6UelLqGlWMcVH1E5c4H7lY"
    },
    {
        "id": "20",
        "name": "Peaches",
        "artist": "Justin Bieber ft. Daniel Caesar & Giveon",
        "album": "Justice",
        "cover": "https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a",
        "uri": "spotify:track:4ZtFanR9U6ndgddUvNcjcG"
    }
];

export default dummyTracks;
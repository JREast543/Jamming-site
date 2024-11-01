const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = `${window.location.origin}/`;
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // Check session storage for token
        const storedAccessToken = sessionStorage.getItem('accessToken');
        const storedExpirationTime = sessionStorage.getItem('tokenExpirationTime');

        if (storedAccessToken && (new Date().getTime() < storedExpirationTime)) {
            accessToken = storedAccessToken;
            return accessToken;
        }

        // Check for an access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // Save token and expiration time in session storage
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('tokenExpirationTime', (new Date().getTime() + expiresIn * 1000).toString());

            // Clear parameters from the URL, to avoid grabbing the access token after it has expired
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    // Connect search bar to Spotify
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then(response => {
          return response.json();
        }).then(jsonResponse => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
            cover: track.album.images[0].url
          }));
        });
    },

    // Save a playlist
    savePlaylist(playlistName, trackURIs) {
        if (!playlistName || !trackURIs.length) {
            return;
        }

        const accessToken = this.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };
        let userId;

        // 1. Get user's ID
        return fetch('https://api.spotify.com/v1/me', { headers: headers })
        .then(response => {
            console.log('User ID Response:', response);
            return response.json();
        })
        .then(jsonResponse => {
            userId = jsonResponse.id;
            console.log('User ID:', userId);

            // 2. Create a new playlist
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: playlistName })
            })
            .then(response => {
                console.log('Playlist Creation Response:', response);
                return response.json();
            })
            .then(jsonResponse => {
                const playlistId = jsonResponse.id;

                // 3. Add tracks to the new playlist
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ uris: trackURIs })
                })
                .then(response => {
                    console.log('Track Addition Response:', response);
                    return response;
                });
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

};

export default Spotify;
import React, { useState } from 'react';
import './App.css';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './api/Spotify';
import Header from './components/Header/Header';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const addTrack = (track) => {
    if(!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log(trackURIs);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  };

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <Header hasSearched={hasSearched} onSearch={updateSearchResults} onSearchComplete={setHasSearched} />
      {hasSearched && (
                <>
                  <p className="descriptiveText" >Your selected tracks appear at the bottom of the screen, ready to be saved to Spotify with just a click!</p>
                  <SearchResults tracks={searchResults} onAdd={addTrack} />
                  <Playlist playlistTracks={playlistTracks} playlistName={playlistName} onNameChange={setPlaylistName} onRemove={removeTrack} onSave={savePlaylist} />
                </>
            )}
    </div>
  );
}

export default App;
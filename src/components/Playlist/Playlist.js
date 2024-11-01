import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks, onNameChange, onRemove, onSave }) => {

    return (
        <div className="playlistContainer">
            <h2>{playlistName}</h2>
            <div className="playlistHeader">
                <input 
                    className="playlistNameInput" 
                    value={playlistName} 
                    onChange={(e) => onNameChange(e.target.value)}
                    placeholder="Name your playlist here..." 
                />
                <button className="saveButton" onClick={onSave} >
                    Save to Spotify
                </button>
            </div>
            <Tracklist context="playlist" tracks={playlistTracks} onRemove={onRemove} />
        </div>
    );
}

export default Playlist;
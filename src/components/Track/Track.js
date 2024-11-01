import React from 'react';
import './Track.css';
import PlusIcon from "../../assets/icons/plus-icon.svg";
import MinusIcon from "../../assets/icons/minus-icon.svg"

const Track = ({ context, track, onAdd, onRemove }) => {
    return (
        <div className={`trackBox ${context === "searchResult" ? "searchResultTrack" : "playlistTrack"}`}>
            <div className="imageBox">
                <img src={track.cover} alt={track.name} className="albumCover" />
                { context === 'searchResult' ?
                    <button className="addButton" onClick={() => onAdd(track)} >
                        <img src={PlusIcon} alt="Add Button" />
                    </button> :
                    <button className="removeButton" onClick={() => onRemove(track) } >
                        <img src={MinusIcon} alt="Remove Button" />
                    </button>
                }
            </div>
        
            <div className="trackDetails">
                <h3>{track.name}</h3>
                <span>{track.artist}</span>
                <span> • </span>
                <span>{track.album}</span>
            </div>
        </div>
    );
}

export default Track;
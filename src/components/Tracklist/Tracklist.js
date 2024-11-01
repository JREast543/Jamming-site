import React from "react";
import Track from "../Track/Track";
import "./Tracklist.css"

function Tracklist({ context, tracks, onAdd, onRemove }) {
    return (
        <div className="tracklistContainer">
            {tracks.map(track =>
                <Track key= {track.id} context={context} track={track} onAdd={onAdd} onRemove={onRemove} />
            )}
        </div>
    )
}

export default Tracklist;
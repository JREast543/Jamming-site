import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = ({ tracks, onAdd }) => {
    return (
        <div className="searchResultsContainer">
            <h2>Search Results</h2>
            <Tracklist context="searchResult" tracks={tracks} onAdd={onAdd} />
        </div>
    );
}

export default SearchResults;
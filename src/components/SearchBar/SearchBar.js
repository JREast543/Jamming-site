import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '../../assets/icons/SearchIcon.svg';
import Spotify from '../../api/Spotify';

const SearchBar = ({ onSearch, onSearchComplete }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleSearch = () => {
        Spotify.search(searchTerm).then(SearchResults => {
            onSearch(SearchResults);
            onSearchComplete(true);
        });
    };
    return (
        <div className="searchBarContainer">
            <div className="searchBar">
                <input type="text" className="searchInput" placeholder="Search for songs, artists, albums..." value={searchTerm} onChange={handleInputChange} onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        handleSearch();
                    }
                }} />
                <div className ="iconContainer">
                    <img src={SearchIcon} alt="Search" className="searchIcon" onClick={handleSearch} />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
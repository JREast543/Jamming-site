import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import logo from '../../logo.png'

const Header = ({ onSearch, onSearchComplete, hasSearched }) => {
    return (
        <div className={`header ${hasSearched ? 'shrunk-header' : ''}`} >
            <div className="branding" >
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Jammming</h1>
            </div>
            <span>Easily create and save custom playlists to your Spotify account.</span>
            <SearchBar onSearch={onSearch} onSearchComplete={onSearchComplete} className="header-search-bar" />
        </div>
    );
}

export default Header;
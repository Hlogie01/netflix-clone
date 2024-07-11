// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import axios from '../axios';
import SearchResults from './SearchResults';
import requests from '../requests';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const request = await axios.get(
        `/search/multi?api_key=${requests.API_KEY}&language=en-US&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
      setShowResults(true);
    }
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setSearchResults([]);
    setSearchTerm('');
  };

  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      
      <form className="navbar__searchForm" onSubmit={handleSearch}>
        <input
          type="text"
          className="navbar__searchInput"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="navbar__searchButton">Search</button>
      </form>

      <div className="navbar__buttons">
        <button className="navbar__button">Sign Up</button>
        <button className="navbar__button">Login</button>
      </div>

      <img
        className="navbar__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
      {showResults && (
        <button className="navbar__closeButton" onClick={handleCloseResults}>
          Close
        </button>
      )}
      {showResults && <SearchResults results={searchResults} />}
    </div>
  );
}

export default Navbar;

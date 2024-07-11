import React from 'react';
import './SearchResults.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function SearchResults({ results }) {
  return (
    <div className="searchResults">
      {results.map(result => (
        <div key={result.id} className="searchResults__item">
          <img
            src={`${base_url}${result.poster_path || result.backdrop_path}`}
            alt={result.name || result.title}
          />
          <p>{result.name || result.title}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;

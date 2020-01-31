import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {axios
    .get(`https://rickandmortyapi.com/api/character/`
      )
    .then(res => {
      console.log('in search', res.data.results);
      const characters = res.data.results.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setSearchResults(characters);
    });
    }, [searchTerm]);
  return (
    <section className="search-form">
 <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /> 
      {console.log('searchresults', searchResults)}
      </div>
    </section>

  );
}

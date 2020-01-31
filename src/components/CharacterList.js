import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row } from "reactstrap";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [char, charData] = useState([]);
  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
      charData(res.data.results);
    })
    .catch(error => {
      console.log('the data was not returned', error)
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>{char.map(people => {
        return 
      })}
      {/* TODO: `array.map()` over your state here! */}
      </h2>
    </section>
  );
}

import React from "react";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characterList">Characters</Link>
        </nav>
    </header>
  );
}

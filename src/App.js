import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
    </main>

<Route exact path="/">
  <Home />
</Route>

<Route exact path="/characters">
    <CharacterList />
</Route>
  );
}

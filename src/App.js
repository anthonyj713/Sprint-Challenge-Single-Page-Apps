import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <> 
   <main>
  <Header />
 
 <Route exact path="/">
  <WelcomePage />
</Route>

<Route path="/characterList">
  <CharacterList />
</Route>
</main>
</>
  );
}

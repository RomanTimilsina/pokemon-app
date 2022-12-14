import PokemonList from "./PokemonList";
import { useState } from "react";


function App() {

  const [pokemons, setPokemons] = useState(['Bulbasur','pikachu'])
  return (
    <>
      <PokemonList pokemons = {pokemons}/>
    </>
  );
}

export default App;

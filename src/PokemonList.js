import React from 'react'
import Pokemon from './Pokemon'


export default function PokemonList({pokemons}) {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return  <Pokemon key={pokemon} pokemon = {pokemon}/>
      })}
    </div>
  )
}

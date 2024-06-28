import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard';

const pokemonList  = [
  {
    name: 'Pikachu',
    imgSrc: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  },
  {
    name: 'Bulbasaur',
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <PokemonCard pokemon={pokemonList[1]} />
      </div>
  
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  

  return (
    <div>
      <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name} />
      <NavBar pokemonIndex = {pokemonIndex} pokemonList = {pokemonList} setPokemonIndex = {setPokemonIndex} />
    </div>
     
  );
}



export default App;

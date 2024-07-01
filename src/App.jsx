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
  const [pokemonIndex, setPokemonIndex] = useState(0);

      const handleClick = (event) => {
      console.log(event.target)

      return (
        <div>
          <button onClick={handlePrevious} disabled={pokemonIndex === 0}>Précédent</button>
          <button onClick={handleNext} disabled={pokemonIndex === pokemonList.length - 1}>Suivant</button>
        </div>
      );
      
    }

    const handlePrevious = () => {
      setPokemonIndex((prevIndex) => prevIndex - 1);
    };
    
    const handleNext = () => {
      setPokemonIndex((prevIndex) => prevIndex + 1);
    };
   
  

  return (
    <PokemonCard pokemon = {pokemonList[1]} />
  );
}


export default App;



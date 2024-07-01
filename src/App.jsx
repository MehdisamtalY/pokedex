import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard';

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
  
  
  
  const handlePrevClick = () => {
    setPokemonIndex((prevIndex) => (prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1));
  console.log(pokemonIndex)
  };


  const handleNextClick = () => {
    setPokemonIndex((prevIndex) => (prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1));
  };

  let button; let button2;
  if (pokemonIndex < pokemonList.length -1) {
    button = <button onClick={handleNextClick}>Suivant </button>
    if (pokemonIndex != 0){
       button2 =<button onClick={handlePrevClick}>Précédent</button>
      }
  

  } else {
    
      button2 =<button onClick={handlePrevClick}>Précédent</button>
    
    
  }
 

  return (
    <div>
      <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name} />
      <div>
      {button2} 
       {button}
      </div>
    </div>
  );
}



export default App;

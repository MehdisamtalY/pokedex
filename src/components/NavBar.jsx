function NavBar(props) {

const handlePrevClick = () => {
    props.setPokemonIndex((prevIndex) => (prevIndex === 0 ? props.pokemonList.length - 1 : prevIndex - 1));
  };


  const handleNextClick = () => {
    props.setPokemonIndex((prevIndex) => (prevIndex === props.pokemonList.length - 1 ? 0 : prevIndex + 1));
  };

  let button; let button2;
  if ((props.pokemonIndex) < props.pokemonList.length -1) {
    button = <button onClick={handleNextClick}>Suivant </button>
    if ((props.pokemonIndex) != 0){
       button2 =<button onClick={handlePrevClick}>Précédent</button>
      }
  

  } else {
    
      button2 =<button onClick={handlePrevClick}>Précédent</button>
    
      
  }
  
  return (
      <div>
      {button2} 
       {button}
      </div>
  );
}

export default NavBar
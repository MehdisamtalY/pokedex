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

function PokemonCard({pokemon}) {
   

const pokemon = { name: "mew" };

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <p>???</p>
    </div>
  );
}

export default PokemonCard;


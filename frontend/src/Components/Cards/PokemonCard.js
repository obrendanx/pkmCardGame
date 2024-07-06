import { useEffect, useState, useContext } from "react";
import Select from "react-select";
import { AuthContext } from "../User/AuthContext";
import axios from 'axios'
import Label from "../Form/Label";
import { useShowProfile } from "../../Querys/showProfileQuery";

const POKEMON_LIST_API = 'https://pokeapi.co/api/v2/pokemon?limit=500"';
console.clear();

export default function PokemonCard() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({
    name: "",
    image: ""
  });
  const { getUserPokemon, username, userId } = useContext(AuthContext);
  const { data: profile } = useShowProfile(userId);
  const [pokemon, setPokemon] = useState({
    name: "",
    image: ""
  });

  useEffect(() => {
    getAllPokemons();
    fetchPokemon();
  }, [username]);

  const fetchPokemon = async () => {
    setPokemon({ ...pokemon, 
      name: profile.favoritePokemonName, 
      image: profile.favoritePokemonImage 
    });
  };

  const getAllPokemons = async () => {
    try {
        const response = await axios.get(POKEMON_LIST_API);
        const data = response.data.results;

        const pokemons = data.map((pokemon) => {
        return {
            label: pokemon.name,
            value: pokemon.url
        };
        });

        setPokemonList(pokemons);
        getPokemonData(pokemons[0].value);
    } catch (error) {
        console.log(error);
    }
  };    

  const getPokemonData = async (pokemonUrl) => {
    const data = await fetch(pokemonUrl);
    const result = await data.json();
    const { name, id, weight, forms } = result;
    const image = result.sprites.front_default;

    setCurrentPokemon({ id, name, weight, image });
    getUserPokemon(result.name, result.sprites.front_default);
  };

  return (
    <div className='w-2/5 mt-6 ml-4'>
      <Select 
        options={pokemonList} 
        onChange={(e) => getPokemonData(e.value)} 
      />
      <div className='w-full flex flex-row justify-center mt-4'>
        <div className='w-1/2 text-center'>
            <Label htmlFor="currentpkm" text={"Current: " + pokemon.name}/>
            <img className='w-2/5 ml-30p' src={pokemon.image} />
        </div>
        <div className='w-1/2 text-center'>
            <Label htmlFor="updatedpkm" text={"Updated: " + currentPokemon.name}/>
            <img className='w-2/5 ml-30p' src={currentPokemon.image} />
        </div>
      </div>
    </div>
  );
}

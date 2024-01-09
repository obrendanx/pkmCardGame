import { useEffect, useState, useContext } from "react";
import Select from "react-select";
import { css } from "@emotion/css";
import { AuthContext } from "../User/AuthContext";
import axios from 'axios'
import Label from "../Form/Label";

const POKEMON_LIST_API = 'https://pokeapi.co/api/v2/pokemon?limit=500"';
console.clear();

export default function PokemonCard() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const { getUserPokemon, username } = useContext(AuthContext);
  const [pokemon, setPokemon] = useState({
    name: "",
    image: ""
  });

  useEffect(() => {
    getAllPokemons();
    fetchPokemon();
  }, [username]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchpokemon?username=${username}`);

      if (response.status === 200) {
        setPokemon({ ...pokemon, 
          name: response.data.pokemon.name, 
          image: response.data.pokemon.image  
        });
      } else {
        console.error('No pokemon found');
      }
    } catch (error) {
      console.error('No pokemon found here', error);
    }
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
    <div className={css`
        width:100%;
        float:right;
    `}>
      <Select 
        options={pokemonList} 
        onChange={(e) => getPokemonData(e.value)} 
      />
      <div className={css`
        width: 100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        margin-top:20px;
      `}>
        <div className={css`
            width:50%;
            text-align:center;
        `}>
            <Label htmlFor="currentpkm" text={"Current: " + pokemon.name}/>
            <img src={pokemon.image} />
        </div>
        <div className={css`
            width:50%;
            text-align:center;
        `}>
            <Label htmlFor="updatedpkm" text={"Updated: " + currentPokemon.name}/>
            <img src={currentPokemon.image} />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, useContext } from "react";
import Select from "react-select";
import { css } from "@emotion/css";
import { AuthContext } from "../User/AuthContext";

const POKEMON_LIST_API = 'https://pokeapi.co/api/v2/pokemon?limit=500"';
console.clear();

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const { getUserPokemon } = useContext(AuthContext);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      const result = await fetch(POKEMON_LIST_API);
      const { results: data } = await result.json();

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

  const PokemonCard = () => {
    return (
      <div className="card">
        <img src={currentPokemon.image} />
      </div>
    );
  };

  return (
    <div className={css`
        width:100%;
        float:right;
    `}>
      <Select options={pokemonList} onChange={(e) => getPokemonData(e.value)} />
      <PokemonCard />
      {currentPokemon.name}
    </div>
  );
}

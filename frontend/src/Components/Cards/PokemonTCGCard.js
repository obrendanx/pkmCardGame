import { useEffect, useState, useContext } from "react";
import { css } from "@emotion/css";
import { AuthContext } from "../User/AuthContext";
import axios from 'axios'

function PokemonTCGCard() {
    const [card, setCards] = useState([]);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(
              `https://api.tcgdex.net/v2/en/sets/base1`);

          if (response.status === 200) {
            setCards(response.data.cards);
          } else {
            console.log('No pokemon found');
          }

        } catch (error) {
          console.error('No pokemon found here', error);
        }
      };

      useEffect(() => {
        fetchPokemon();
    }, []); 

  return (
    <div className={css`
        width:90%;
        min-height:500px;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:2.5%;
        margin-left:5%;
        margin-top:5%;
    `}>
      {card.map((card, index) => (
        <div key={card.id} className={css`
            display:block;
            height:300px;
            width:22.5%;
            overflow:hidden;
            margin-bottom:2.5%;
        `}>
            <img src={`${card.image}/high.jpg`} className={css`
                width:100%;
                height:100%;
                object-fit:cover;
            `}/>
        </div>
      ))}
    </div>
  )
}

export default PokemonTCGCard
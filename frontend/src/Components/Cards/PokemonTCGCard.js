import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../User/AuthContext";
import axios from 'axios'

function PokemonTCGCard({setGroup}) {
    const [card, setCards] = useState([]);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(
              `https://api.tcgdex.net/v2/en/sets/${setGroup}`);

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
    <div className='w-9/10 min-h-50 flex flex-row flex-wrap gap-98 justify-center mt-10'>
      {card.map((card, index) => (
        <div key={card.id} className='block h-30 w-1/5 md:w-2/5 overflow-hidden mb-4'>
            <img src={`${card.image}/high.jpg`} className='h-full w-full'/>
        </div>
      ))}
    </div>
  )
}

export default PokemonTCGCard
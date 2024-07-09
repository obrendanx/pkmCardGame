import React, {useContext} from 'react'
import PokemonTCGCard from '../Components/Cards/PokemonTCGCard'
import { useShowProfile } from '../Querys/showProfileQuery'
import { AuthContext } from '../Components/User/AuthContext'

function Test() {
  const { userId } = useContext(AuthContext);
  const { data: profile } = useShowProfile(userId);
  console.log(userId);
  console.log(profile);


  return (
    <PokemonTCGCard/>
  )
}

export default Test
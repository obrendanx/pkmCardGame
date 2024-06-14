import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../User/AuthContext';
import ProfileIcon from '../User/Profile/ProfileIcon';
import { useNavigate } from 'react-router-dom';
import { TbPokeball, TbPokeballOff } from "react-icons/tb"

function Navbar() {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showDropdown) {
      const timeout = setTimeout(() => {
        setShowDropdown(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showDropdown]);

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  const handleClick = () => {
    navigate('/editprofile'); 
  };

  const handleHomeClick = () => {
    navigate('./home');
  }

  const handleTestClick = () => {
    navigate('./test');
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return isLoggedIn ? (
    <div className='h-14 w-full bg-[#ffd57b]'>
      <div className='h-14 w-14 absolute left-0 lg:w-20 md:w-30'>
        <button className='block p-3 text-3xl h-14 w-14' onClick={handleHomeClick}><TbPokeball/></button>
      </div>
      <div className='h-14 w-28 absolute right-0 flex z-10 lg:w-32 md:w40'>
        <div className='h-42 w-full relative m-0 flex flex-column'>
          <button className='text-sm text-white h-14 w-14 absolute right-0 border-none font-black uppercase bg-[#ffd57b] pl-2 leading-8' onClick={toggleDropdown}>
            <ProfileIcon h="35px" w="35px" />
          </button>
          <div className={"h-42 w-full mt-14 " + (showDropdown ? 'block' : 'hidden')} >
            <button className='text-sm text-white h-14 w-full border-none font-black uppercase bg-[#de5239] duration-200 hover:border-b-[#ffd57b]' onClick={handleTestClick}>Test</button>
            <button className='text-sm text-white h-14 w-full border-none font-black uppercase bg-[#de5239] duration-200 hover:border-b-[#ffd57b]' onClick={handleClick}>Edit Profile</button>
            <button className='text-sm text-white h-14 w-full border-none font-black uppercase bg-[#de5239] duration-200 hover:border-b-[#ffd57b]' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Navbar;


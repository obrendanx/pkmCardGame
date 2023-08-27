import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { AuthContext } from '../User/AuthContext';
import ProfileIcon from '../User/Profile/ProfileIcon';
import { useNavigate } from 'react-router-dom';
import { TbPokeball, TbPokeballOff } from "react-icons/tb"

const Bar = styled.div`
  height: 50px;
  width: 100%;
  background: #ffd57b;
`;

const BarRight = styled.div`
  height: 50px;
  width: 10%;
  position: absolute;
  right: 0;
  display: flex;
  z-index:2;
  @media (max-width: 1000px) {
    width:15%;
  }
  @media (max-width: 770px) {
    width:40%;
  }
`;

const BarLeft = styled.div`
  height: 50px;
  width: 5%;
  position: absolute;
  left: 0;
  @media (max-width: 1000px) {
    width:15%;
  }
  @media (max-width: 770px) {
    width:40%;
  }
`;

const Group = styled.div`
  height: 150px;
  width: 100%;
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-size: 0.8em;
  color: #fff;
  height: 50px;
  padding:5px;
  width: 80%;
  padding: 5px;
  border: none;
  font-weight: 900;
  text-transform: uppercase;
  background: #de5239;
  cursor: pointer;
  margin-left:20%;
  transition:0.25s;
  &:hover{
    border-bottom:#ffd57b 4px solid;
  }
  @media (max-width: 770px) {
    width:60%;
    margin-left:40%;
  }
`;

const ButtonUser = styled.button`
  font-size: 0.6em;
  color: #fff;
  height: 50px;
  width: 50px;
  position:absolute;
  right:0;
  padding: 5px;
  border: none;
  font-weight: 900;
  text-transform: uppercase;
  background: #ffd57b;
  line-height:35px;
  cursor: pointer;
`

const HomeBtn = styled.span`
  font-size:2em;
  line-height:60px;
  padding-left:5px;
  cursor:pointer;
`

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

  const ShowButtons = styled.div`
    height: 100px;
    width: 100%;
    ${showDropdown ? 'display:block;' : 'display:none;'}
    margin-top:50px;
  `;

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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return isLoggedIn ? (
    <Bar>
      <BarLeft>
        <HomeBtn onClick={handleHomeClick}><TbPokeball/></HomeBtn>
      </BarLeft>
      <BarRight>
        <Group>
          <ButtonUser onClick={toggleDropdown}>
            <ProfileIcon h="35px" w="35px" />
          </ButtonUser>
          <ShowButtons>
            <Button onClick={handleClick}>Edit Profile</Button>
            <Button onClick={handleLogout}>Logout</Button>
          </ShowButtons>
        </Group>
      </BarRight>
    </Bar>
  ) : null;
}

export default Navbar;


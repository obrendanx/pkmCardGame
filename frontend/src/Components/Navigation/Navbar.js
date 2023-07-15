import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { AuthContext } from '../User/AuthContext';
import ProfileIcon from '../User/Profile/ProfileIcon';
import { css } from '@emotion/css';
import { Navigate, useNavigate } from 'react-router-dom';

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
  color: #8b2900;
  height: 50px;
  padding:5px;
  width: 100%;
  padding: 5px;
  border: none;
  font-weight: 900;
  text-transform: uppercase;
  background: #31acee;
  cursor: pointer;
  &:hover{
    border-bottom:#ffd57b 4px solid;
  }
  @media (max-width: 770px) {
    width: 100%;
  }
  transition: 0.5s;
`;

const ButtonUser = styled.button`
  font-size: 0.6em;
  color: #8b2900;
  height: 50px;
  width: 100%;
  padding: 5px;
  border: none;
  font-weight: 900;
  text-transform: uppercase;
  background: #31acee;
  display:flex;
  flex-direction:row;
  line-height:35px;
  transition:0.25s;
  cursor: pointer;
  &:hover{
    border-bottom:#ffd57b 4px solid;
  }
  @media (max-width: 770px) {
    width: 100%;
  }
`

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showDropdown) {
      const timeout = setTimeout(() => {
        setShowDropdown(false);
      }, 1250);
      return () => clearTimeout(timeout);
    }
  }, [showDropdown]);

  const ShowButtons = styled.div`
    height:100px;
    width:100%;
    ${showDropdown ? 'display:block;' : 'display:none;'}
  `

  const handleLogout = () => {
    logout();
  };

  const handleClick = () => {
    navigate('./editprofile');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Bar>
      <BarRight>
        <Group>
          <ButtonUser onClick={toggleDropdown}>
            <span className={css`
                width:70%;
                height:50px;
            `}>
                username
            </span>
            <ProfileIcon h='35px' w='30%'/>
          </ButtonUser>
          <ShowButtons>
            <Button onClick={handleClick}>Edit Profile</Button>
            <Button onClick={handleLogout}>Logout</Button>
          </ShowButtons>
        </Group>
      </BarRight>
    </Bar>
  );
}

export default Navbar;


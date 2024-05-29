import React, {useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import {BsList, BsXLg} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100%;
  width: 30%;
  position: fixed;
  overflow-y: scroll;
  margin-bottom:50px;
  overflow-x: hidden;
  background: #de5239;

  &::-webkit-scrollbar {
    width: 8px; /* width of vertical scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8bc5cd;
    border-radius:3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #297383;
  }

  @media (max-width: 777px) {
    display: ${props => (props.menuVisible ? 'block' : 'none')};
    width:100%;
    z-index: 1;
    padding-top:30px;
  }

  @media (max-width: 1000px) {
    font-size:0.8em;
  }
`;

const MenuButton = styled.div`
  display: block;
  @media (min-width: 778px) {
    display: none;
  }
  position: fixed;
  top: 60px;
  padding: 5px 10px;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
`;

const Heading = styled.h2`
    height:35px;
    line-height:35px;
    padding-left:5px;
    color:#ffffff;
`

const CollectionBlock = styled.div`
   min-height:150px;
`

const Splitter = styled.hr`
    position:absolute;
    width:100%;
    color:#de5239;
    left:0;
`

const List = styled.ul`
    list-style-type:circle;
    padding-top:15px;
    @media (max-width: 777px) {
        padding-right:10px;
    }
`

const CollectionItem = styled.a`
    padding-left:5px;
    font-weight:900;
    text-transform:uppercase;
    font-family: 'Kanit', sans-serif;
    text-decoration:none;
  `

function Sidebar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const collections = [
    [
      "Sword and Shield - lost origin",
      "Pokemon Go",
      "Sword and Shield - Astral Radiance",
      "Sword and Shield - Brilliant Stars",
    ],
    [
      "Sword and Shield - Fusion Strike",
      "Celebrations",
      "Sword and Shield - Evolving Skies",
      "Sword and Shield - Chilling Reign",
      "Sword and Shield - Battle Styles",
      "Shinings Fates"
    ],
    [
        "Sword and Shield - Vivid Voltage",
        "Champions Path",
        "Sword and Shield - Darkness Ablaze",
        "Sword and Shield - Rebel Clash",
        "Sword and Shield"
    ],
    [
        "Sun and Monn - Cosmic Eclipse",
        "Hidden Fates",
        "Sun and Moon - Unified Minds",
        "Sun and Moon - Unbroken Bonds",
        "Detective Pikachu",
        "Sun and Moon - Team Up"
    ],
    [
        "Sun and Moon - Lost Thunder",
        "Dragon Majesty",
        "Sun and Moon - Celestrial Storm",
        "Sun and Moon - Forbiddan Light",
        "Sun and Moon - Ultra Prism"
    ],
    [
        "Sun and Moon - Crimson Invasion",
        "Shining Legends",
        "Sun and Moon - Burning Shadows",
        "Sun and Moon - Guardians Rising",
        "Sun and Moon"
    ],
    [
        "XY - Evolutions",
        "XY - Steam Siege",
        "XY - Fates Collide",
        "Generations",
        "XY - Breakpoint"
    ],
    [
        "XY - Breakthrough",
        "XY - Ancient Origins",
        "XY - Loading Skies",
        "Double Crisis",
        "XY - Primal Clash"
    ],
    [
        "XY - Phantom Forces",
        "XY - Furious Fists",
        "XY - Flash Fire",
        "XY"
    ],
    [
        "XY - Raios Starter Set",
        "Black and White - Legendary Treasures",
        "Black and White - Plasma Blast",
        "Black and White - Plasma Freeze",
        "Black and White - Plasma Storm"
    ],
    [
        "Black and White - Boundaries Crashed",
        "Dragon Vault",
        "Black and White - Dragons Exalted",
        "Black and White - Dark Explorers",
        "Black and White - Next Destinies"
    ],
    [
        "Black and White - Noble Victories",
        "Black and White - Emerging Powers",
        "Black and White",
        "Call of Legends"
    ],
    [
        "HS - Triumphant",
        "HS - Undaunted",
        "HS - Unleashed",
        "Heart Gold and Soul Silver"
    ],
    [
        "Platinum - Arceus",
        "Platinum - Supreme Victors",
        "Platinum - Rising Rivals",
        "Platinum"
    ],
    [
        "Diamond & Pearl - Stormfront",
        "Diamond & Pearl - Legends Awakened",
        "Diamond & Pearl - Majestic Dawn",
        "Diamond & Pearl - Real Encounters",
        "Diamond & Pearl - Secret Wonders",
        "Diamond & Pearl - Mysterious Treasures",
        "Diamond & Pearl"
    ]
  ];

  const [listItems, setListItems] = useState(
    collections.map(yearItems => yearItems.map(item => ({ name: item, status: "incomplete" })))
  );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  function getCollectionItemColor(status) {
    switch (status) {
        case 'incomplete':
        return '#6a627b';
        case 'in-progress':
        return '#FFD54A';
        case 'finished':
        return '#73ac31';
        default:
        return '#ccc';
    }
    }

  return (
    <>  
        <MenuButton onClick={toggleMenu}>{menuVisible ? <BsXLg/> : <BsList/>}</MenuButton>
        <Wrapper menuVisible={menuVisible}>
            {listItems.map((yearItems, yearIndex) => (
            <CollectionBlock key={yearIndex}>
                <Heading>
                {2022 - yearIndex} 
                <Splitter></Splitter>
                </Heading>
                <List>
                {yearItems.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        itemStatus={item.status}
                        to={`/collections/${encodeURIComponent(item.name)}`}
                        style={{ color: getCollectionItemColor(item.status) }}
                      >
                        {item.name}
                      </Link>
                    </li>
                ))}
                </List>
            </CollectionBlock>
            ))}
        </Wrapper>
    </>
  )
}

export default Sidebar
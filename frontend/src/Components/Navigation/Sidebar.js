import React, {useState} from 'react';
import {BsList, BsXLg} from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
    console.log("clicked!");
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
        <div className='md:block hidden fixed top-20 left-4 text-lg z-20' onClick={toggleMenu}>
          {menuVisible ? <BsXLg/> : <BsList/>}
        </div>
        <div className={"h-full w-2/5 fixed overflow-y-scroll mb-10 overflow-x-hidden bg-[#de5239] scrollStyles pl-10 md:w-full md:z-10 md:p-10 lg:text-md pb-16 " + ( menuVisible ? 'md:block' : 'md:hidden' )} menuVisible={menuVisible}>
            {listItems.map((yearItems, yearIndex) => (
            <div className='min-h-10' key={yearIndex}>
                <h2 className='h-10 leading-8 pl-2 text-white'>
                {2022 - yearIndex} 
                <hr className='absolute w-full text-[#de5239] left-0'></hr>
                </h2>
                <ul className='pt-4 md:pr-4'>
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
                </ul>
            </div>
            ))}
        </div>
    </>
  )
}

export default Sidebar
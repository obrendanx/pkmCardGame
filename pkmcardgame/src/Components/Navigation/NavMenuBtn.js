import React, {useState} from 'react'
import clsx from "clsx"


function NavMenuBtn() {
  const [open, setOpen] = useState('false');
  return (
    <div>
        <nav>
        <button onClick={() => setOpen(!open)} className="openStyle menuBtn"><i class="fa fa-bars"></i></button>
        <ul className={clsx(open ? "closeStyle" : "openStyle")}>
          <h3>2022</h3>
          <ol>
            <li>Sword and Shield - Lost Orogin</li>
            <li>Pokemon Go</li>
            <li>Sword and Shield - Astral Radiance</li>
            <li>Sword and Shield - Brilliant Stars</li>
          </ol>
          <br></br>
          <h3>2021</h3>
          <ol>
            <li>Sword and Shield - Fusion Strike</li>
            <li>Celebrations</li>
            <li>Sword and Shield - Evolving Skies</li>
            <li>Sword and Shield - Battle Styles</li>
            <li>Shining Fates</li>
          </ol>
          <br></br>
          <h3>2020</h3>
          <ol>
            <li>Sword and Shield - Vivid Voltage</li>
            <li>Champions Path</li>
            <li>Sword and Shield - Darkness Ablaze</li>
            <li>Sword and Shield - Rebel Clash</li>
            <li>Sword and Shield</li>
          </ol>
          <br></br>
          <h3>2019</h3>
          <ol>
            <li>Sun and Moon - Cosmic Eclipse</li>
            <li>Hidden Fates</li>
            <li>Sun and Moon - Unified Minds</li>
            <li>Sun and Moon - Unbroken Bonds</li>
            <li>Detective Pikachu</li>
            <li>Sun and Moon - Team Up</li>
          </ol>
          <br></br>
          <h3>2018</h3>
          <ol>
            <li>Sun and Moon - Lost Thunder</li>
            <li>Dragon Majesty</li>
            <li>Sun and Moon - Celestial Storm</li>
            <li>Sun and Moon - Forbiddan Light</li>
            <li>Sun and Moon - Ultra Prism</li>
          </ol>
          <br></br>
          <h3>2017</h3>
          <ol>
            <li>Sun and Moon - Crismon Invasion</li>
            <li>Shining Legends</li>
            <li>Sun and Moon - Burning Shadows</li>
            <li>Sun and Moon - Guardians Rising</li>
            <li>Sun and Moon</li>
          </ol>
          <br></br>
          <h3>2016</h3>
          <ol>
            <li>XY - Evolutions</li>
            <li>XY - Steam Siege</li>
            <li>XY - Fates Collide</li>
            <li>Generations</li>
            <li>XY - Breakpoint</li>
          </ol>
          <br></br>
          <h3>2015</h3>
          <ol>
            <li>XY - Breakthrough</li>
            <li>XY - Ancient Orogins</li>
            <li>XY - Roaring Skies</li>
            <li>Double Crisis</li>
            <li>XY - Primal Clash</li>
          </ol>
          <br></br>
          <h3>2014</h3>
          <ol>
            <li>XY - Phantom Forces</li>
            <li>XY - Furious Fists</li>
            <li>XY - Flash Fire</li>
            <li>XY</li>
          </ol>
          <br></br>
          <h3>2013</h3>
          <ol>
            <li>XY - Raios Starter Set</li>
            <li>Black and White - Legendary Treasures</li>
            <li>Black and White - Plasma Blast</li>
            <li>Black and White - Plasma Freeze</li>
            <li>Black and White - Plasma Storm</li>
          </ol>
          <br></br>
          <h3>2012</h3>
          <ol>
          <li>Black and White - Boundaries Crossed</li>
          <li>Dragon Vault</li>
          <li>Black and White - Dragons Exalted</li>
          <li>Black and White - Dark Explorers</li>
          <li>Black and White - Next Destinies</li>
          </ol>
          <br></br>
          <h3>2011</h3>
          <ol>
          <li>Black and White - Noble Victories</li>
          <li>Black and White - Emerging Powers</li>
          <li>Black and White</li>
          <li>Call Of Legends</li>
          </ol>
          <br></br>
          <h3>2010</h3>
          <ol>
            <li>HS - Triumphant</li>
            <li>HS - Undaunted</li>
            <li>HS - Unleashed</li>
            <li>Heart Gold and Soul Silver</li>
          </ol>
          <br></br>
          <h3>2009</h3>
          <ol>
            <li>Platinum - Arceus</li>
            <li>Platinum - Supreme Victors</li>
            <li>Platinum - Rising Rivals</li>
            <li>Platinum</li>
          </ol>
          <br></br>
          <h3>2008</h3>
          <ol>
            <li>Diamond and Pearl - Stormfront</li>
            <li>Diamond and Pearl - Legends Awakened</li>
            <li>Diamond and Pearl - Majestic Dawn</li>
            <li>Diamond and Pearl - Heal Encounters</li>
            <li>Diamond and Pearl - Secret Wonders</li>
            <li>Diamond and Pearl - Mysterious Treasures</li>
            <li>Diamond and Pearl</li>
          </ol>
          <br></br>
        </ul>
      </nav>
    </div>
  )
}

export default NavMenuBtn
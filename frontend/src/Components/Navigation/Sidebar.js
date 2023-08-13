import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    height:100%;
    width:30%;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
    background:#de5239;
`

const Heading = styled.h2`
    height:35px;
    line-height:35px;
    padding-left:5px;
    color:#ffffff;
`

const CollectionItem = styled.a`
    padding-left:5px;
    color:#6a627b;
    font-weight:900;
    text-transform:uppercase;
    font-family: 'Kanit', sans-serif;
    text-decoration:none;
`

const CollectionBlock = styled.div`
    
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
`

function Sidebar() {
  return (
    <Wrapper>
        <CollectionBlock>
            <Heading>
                2022 
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Sword and Shield - lost origin</CollectionItem></li>
                <li><CollectionItem href="#">Pokemon Go</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield - Astral Radiance</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield - Brilliant Stars</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2021
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Sword and Shield - Fusion Strike</CollectionItem></li>
                <li><CollectionItem href="#">Celebrations</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield - Evolving Skies</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield - Chilling Reign</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield - Battle Styles</CollectionItem></li>
                <li><CollectionItem href="#">Shinings Fates</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2020
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Sword and Shield - Vivid Voltage</CollectionItem></li>
                <li><CollectionItem href="#">Champions Path</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield - Darkness Ablaze</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield - Rebel Clash</CollectionItem></li>
                <li><CollectionItem href="#">Sword and Shield</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2019
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Sun and Monn - Cosmic Eclipse</CollectionItem></li>
                <li><CollectionItem href="#">Hidden Fates</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Unified Minds</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Unbroken Bonds</CollectionItem></li>
                <li><CollectionItem href="#">Detective Pikachu</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Team Up</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2018
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Sun and Moon - Lost Thunder</CollectionItem></li>
                <li><CollectionItem href="#">Dragon Majesty</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Celestrial Storm</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Forbiddan Light</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Ultra Prism</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2017
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Sun and Moon - Crimson Invasion</CollectionItem></li>
                <li><CollectionItem href="#">Shining Legends</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Burning Shadows</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon - Guardians Rising</CollectionItem></li>
                <li><CollectionItem href="#">Sun and Moon</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2016
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">XY - Evolutions</CollectionItem></li>
                <li><CollectionItem href="#">XY - Steam Siege</CollectionItem></li>
                <li><CollectionItem href="#">XY - Fates Collide</CollectionItem></li>
                <li><CollectionItem href="#">Generations</CollectionItem></li>
                <li><CollectionItem href="#">XY - Breakpoint</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2015
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">XY - Breakthrough</CollectionItem></li>
                <li><CollectionItem href="#">XY - Ancient Origins</CollectionItem></li>
                <li><CollectionItem href="#">XY - Loading Skies</CollectionItem></li>
                <li><CollectionItem href="#">Double Crisis</CollectionItem></li>
                <li><CollectionItem href="#">XY - Primal Clash</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2014
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">XY - Phantom Forces</CollectionItem></li>
                <li><CollectionItem href="#">XY - Furious Fists</CollectionItem></li>
                <li><CollectionItem href="#">XY - Flash Fire</CollectionItem></li>
                <li><CollectionItem href="#">XY</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2013
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">XY - Raios Starter Set</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Legendary Treasures</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Plasma Blast</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Plasma Freeze</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Plasma Storm</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2012
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Black and White - Boundaries Crashed</CollectionItem></li>
                <li><CollectionItem href="#">Dragon Vault</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Dragons Exalted</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Dark Explorers</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Next Destinies</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2011
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Black and White - Noble Victories</CollectionItem></li>
                <li><CollectionItem href="#">Black and White - Emerging Powers</CollectionItem></li>
                <li><CollectionItem href="#">Black and White</CollectionItem></li>
                <li><CollectionItem href="#">Call of Legends</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2010
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">HS - Triumphant</CollectionItem></li>
                <li><CollectionItem href="#">HS - Undaunted</CollectionItem></li>
                <li><CollectionItem href="#">HS - Unleashed</CollectionItem></li>
                <li><CollectionItem href="#">Heart Gold and Soul Silver</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2009
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Platinum - Arceus</CollectionItem></li>
                <li><CollectionItem href="#">Platinum - Supreme Victors</CollectionItem></li>
                <li><CollectionItem href="#">Platinum - Rising Rivals</CollectionItem></li>
                <li><CollectionItem href="#">Platinum</CollectionItem></li>
            </List>
        </CollectionBlock>

        <CollectionBlock>
            <Heading>
                2008
                <Splitter></Splitter>
            </Heading>

            <List>
                <li><CollectionItem href="#">Diamond & Pearl - Stormfront</CollectionItem></li>
                <li><CollectionItem href="#">Diamond & Pearl - Legends Awakened</CollectionItem></li>
                <li><CollectionItem href="#">Diamond & Pearl - Majestic Dawn</CollectionItem></li>
                <li><CollectionItem href="#">Diamond & Pearl - Real Encounters</CollectionItem></li>
                <li><CollectionItem href="#">Diamond & Pearl - Secret Wonders</CollectionItem></li>
                <li><CollectionItem href="#">Diamond & Pearl - Mysterious Treasures</CollectionItem></li>
                <li><CollectionItem href="#">Diamond & Pearl</CollectionItem></li>
            </List>
        </CollectionBlock>
    </Wrapper>
  )
}

export default Sidebar
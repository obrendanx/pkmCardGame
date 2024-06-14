import React from 'react';
import { useParams } from 'react-router-dom';
import AstralRadiance from './Collections/SwordandShield/AstralRadiance';
import BattleStyles from './Collections/SwordandShield/BattleStyles';
import BrilliantStars from './Collections/SwordandShield/BrilliantStars';
import ChillingReign from './Collections/SwordandShield/ChillingReign';
import EvolvingSkies from './Collections/SwordandShield/EvolvingSkies';
import FusionStrike from './Collections/SwordandShield/FusionStrike';
import LostOrigin from './Collections/SwordandShield/LostOrigin';
import PokemonGo from './Collections/Misc/PokemonGo';
import ShiningsFates from './Collections/Misc/ShiningsFates';
import VividVoltage from './Collections/SwordandShield/VividVoltage';
import ChampionsPath from './Collections/Misc/ChampionsPath';
import DarknessAblaze from './Collections/SwordandShield/DarknessAblaze';
import RebelClash from './Collections/SwordandShield/RebelClash';
import SwordandShield from './Collections/SwordandShield/SwordandShield';
import CosmicEclipse from './Collections/SunandMoon/CosmicEclipse';
import HiddenFates from './Collections/Misc/HiddenFates';
import UnifiedMinds from './Collections/SunandMoon/UnifiedMinds';
import UnbrokenBonds from './Collections/SunandMoon/UnbrokenBonds';
import DetectivePikachu from './Collections/Misc/DetectivePikachu';
import TeamUp from './Collections/SunandMoon/TeamUp';
import LostThunder from './Collections/SunandMoon/LostThunder';
import DragonMajesty from './Collections/Misc/DragonMajesty';
import CelestrialStorm from './Collections/SunandMoon/CelestrialStorm';
import ForbiddanLight from './Collections/SunandMoon/ForbiddanLight';
import UltraPrism from './Collections/SunandMoon/UltraPrism';
import CrimsonInvasion from './Collections/SunandMoon/CrimsonInvasion';
import ShiningLegends from './Collections/Misc/ShiningLegends';
import BurningShadows from './Collections/SunandMoon/BurningShadows';
import GuardiansRising from './Collections/SunandMoon/GuardiansRising';
import SunandMoon from './Collections/SunandMoon/SunandMoon';
import Evolutions from './Collections/XY/Evolutions';
import SteamSiege from './Collections/XY/SteamSiege';
import FatesCollide from './Collections/XY/FatesCollide';
import Generations from './Collections/Misc/Generations';
import Breakpoint from './Collections/XY/Breakpoint';
import Breakthrough from './Collections/XY/Breakthrough';
import AncientOrigins from './Collections/XY/AncientOrigins';
import LoadingSkies from './Collections/XY/LoadingSkies';
import DoubleCrisis from './Collections/Misc/DoubleCrisis';
import PrimalClash from './Collections/XY/PrimalClash';
import PhantomForces from './Collections/XY/PhantomForces';
import FuriousFists from './Collections/XY/FuriousFists';
import FlashFire from './Collections/XY/FlashFire';
import XY from './Collections/XY/XY';
import RaiosStarterSet from './Collections/XY/RaiosStarterSet';
import LegendaryTreasures from './Collections/BlackandWhite/LegendaryTreasures';
import PlasmaBlast from './Collections/BlackandWhite/PlasmaBlast';
import PlasmaFreeze from './Collections/BlackandWhite/PlasmaFreeze';
import PlasmaStorm from './Collections/BlackandWhite/PlasmaStorm';
import BoundariesCrashed from './Collections/BlackandWhite/BoundariesCrashed';
import DragonVault from './Collections/Misc/DragonVault';
import DragonsExalted from './Collections/BlackandWhite/DragonsExalted';
import DarkExplorers from './Collections/BlackandWhite/DarkExplorers';
import NextDestinies from './Collections/BlackandWhite/NextDestinies';
import NobleVictories from './Collections/BlackandWhite/NobleVictories';
import EmerginPowers from './Collections/BlackandWhite/EmergingPowers';
import BlackandWhite from './Collections/BlackandWhite/BlackandWhite';
import CallofLegends from './Collections/Misc/CallofLegends';
import Triumphant from './Collections/HS/Triumphant';
import Undaunted from './Collections/HS/Undaunted';
import Unleashed from './Collections/HS/Unleashed';
import HS from './Collections/HS/HeartGoldSoulSilver';
import Arceus from './Collections/Platinum/Arceus';
import SupremeVictors from './Collections/Platinum/SupremeVictors';
import RisingRivals from './Collections/Platinum/RisingRivals';
import Platinum from './Collections/Platinum/Platinum';
import Stormfront from './Collections/DiamondandPearl/Stormfront';
import LegendsAwawkended from './Collections/DiamondandPearl/LegendsAwakened';
import MajesticDawn from './Collections/DiamondandPearl/MajesticDawn';
import RealEncounters from './Collections/DiamondandPearl/RealEncounters';
import SecretWonders from './Collections/DiamondandPearl/SecretWonders';
import MysteriousTreasures from './Collections/DiamondandPearl/MysteriousTreasures'
import DiamondandPearl from './Collections/DiamondandPearl/DiamondandPearl';
import Celebrations from './Collections/Misc/Celebrations'
 
function CollectionPage() {
  let { collectionName } = useParams();

  // Render the appropriate component based on collectionName
  switch(collectionName) {
    case "Sword and Shield - Astral Radiance":
      return <AstralRadiance />;
    case "Sword and Shield - Battle Styles":
      return <BattleStyles />;
      case "Sword and Shield - lost origin":
      return <LostOrigin />;
      case "Pokemon Go":
      return <PokemonGo />;
      case "Sword and Shield - Brilliant Stars":
      return <BrilliantStars />;
      case "Sword and Shield - Fusion Strike":
      return <FusionStrike />;
      case "Celebrations":
      return <Celebrations />;
      case "Sword and Shield - Evolving Skies":
      return <EvolvingSkies />;
      case "Sword and Shield - Chilling Reign":
      return <ChillingReign />;
      case "Shinings Fates":
      return <ShiningsFates />;
      case "Sword and Shield - Vivid Voltage":
      return <VividVoltage />;
      case "Champions Path":
      return <ChampionsPath />;
      case "Sword and Shield - Darkness Ablaze":
      return <DarknessAblaze />;
      case "Sword and Shield - Rebel Clash":
      return <RebelClash />;
      case "Sword and Shield":
      return <SwordandShield />;
      case "Sun and Monn - Cosmic Eclipse":
      return <CosmicEclipse />;
      case "Hidden Fates":
      return <HiddenFates />;
      case "Sun and Moon - Unified Minds":
      return <UnifiedMinds />;
      case "Sun and Moon - Unbroken Bonds":
      return <UnbrokenBonds />;
      case "Detective Pikachu":
      return <DetectivePikachu />;
      case "Sun and Moon - Team Up":
      return <TeamUp />;
      case "Sun and Moon - Lost Thunder":
      return <LostThunder />;
      case "Dragon Majesty":
      return <DragonMajesty />;
      case "Sun and Moon - Celestrial Storm":
      return <CelestrialStorm />;
      case "Sun and Moon - Forbiddan Light":
      return <ForbiddanLight />;
      case "Sun and Moon - Ultra Prism":
      return <UltraPrism />;
      case "Sun and Moon - Crimson Invasion":
      return <CrimsonInvasion />;
      case "Shining Legends":
      return <ShiningLegends />;
      case "Sun and Moon - Burning Shadows":
      return <BurningShadows />;
      case "Sun and Moon - Guardians Rising":
      return <GuardiansRising />;
      case "Sun and Moon":
      return <SunandMoon />;
      case "XY - Evolutions":
      return <Evolutions />;
      case "XY - Steam Siege":
      return <SteamSiege />;
      case "XY - Fates Collide":
      return <FatesCollide />;
      case "Generations":
      return <Generations />;
      case "XY - Breakpoint":
      return <Breakpoint />;
      case "XY - Breakthrough":
      return <Breakthrough />;
      case "XY - Ancient Origins":
      return <AncientOrigins />;
      case "XY - Loading Skies":
      return <LoadingSkies />;
      case "Double Crisis":
      return <DoubleCrisis />;
      case "XY - Primal Clash":
      return <PrimalClash />;
      case "XY - Phantom Forces":
      return <PhantomForces />;
      case "XY - Furious Fists":
      return <FuriousFists />;
      case "XY - Flash Fire":
      return <FlashFire />;
      case "XY":
      return <XY />;
      case "XY - Raios Starter Set":
      return <RaiosStarterSet />;
      case "Black and White - Legendary Treasures":
      return <LegendaryTreasures />;
      case "Black and White - Plasma Blast":
      return <PlasmaBlast />;
      case "Black and White - Plasma Freeze":
      return <PlasmaFreeze />;
      case "Black and White - Plasma Storm":
      return <PlasmaStorm />;
      case "Black and White - Boundaries Crashed":
      return <BoundariesCrashed />;
      case "Dragon Vault":
      return <DragonVault />;
      case "Black and White - Dragons Exalted":
      return <DragonsExalted />;
      case "Black and White - Dark Explorers":
      return <DarkExplorers />;
      case "Black and White - Next Destinies":
      return <NextDestinies />;
      case "Black and White - Noble Victories":
      return <NobleVictories />;
      case "Black and White - Emerging Powers":
      return <EmerginPowers />;
      case "Black and White":
      return <BlackandWhite />;
      case "Call of Legends":
      return <CallofLegends />;
      case "HS - Triumphant":
      return <Triumphant />;
      case "HS - Undaunted":
      return <Undaunted />;
      case "HS - Unleashed":
      return <Unleashed />;
      case "Heart Gold and Soul Silver":
      return <HS />;
      case "Platinum - Arceus":
      return <Arceus />;
      case "Platinum - Supreme Victors":
      return <SupremeVictors />;
      case "Platinum - Rising Rivals":
      return <RisingRivals />;
      case "Platinum":
      return <Platinum />;
      case "Diamond & Pearl - Stormfront":
      return <Stormfront />;
      case "Diamond & Pearl - Legends Awakened":
      return <LegendsAwawkended />;
      case "Diamond & Pearl - Majestic Dawn":
      return <MajesticDawn />;
      case "Diamond & Pearl - Real Encounters":
      return <RealEncounters />;
      case "Diamond & Pearl - Secret Wonders":
      return <SecretWonders />;
      case "Diamond & Pearl - Mysterious Treasures":
      return <MysteriousTreasures />;
      case "Diamond & Pearl":
      return <DiamondandPearl />;
    // Add cases for other collections...
    default:
      return <div>Collection not found</div>;
  }
}

export default CollectionPage;
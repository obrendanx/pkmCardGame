import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider, AuthContext } from './Components/User/AuthContext';
import './App.css';
import Home from './Pages/Home';
import Login from './Components/User/Auth/Login';
import Register from './Components/User/Auth/Register';
import Splashscreen from './Pages/Splashscreen';
import Logout from './Components/User/Auth/Logout';
import Navbar from './Components/Navigation/Navbar';
import EditProfile from './Pages/EditProfile';
import Test from './Pages/Test';
import AstralRadiance from './Pages/Collections/SwordandShield/AstralRadiance';
import BattleStyles from './Pages/Collections/SwordandShield/BattleStyles';
import BrilliantStars from './Pages/Collections/SwordandShield/BrilliantStars';
import ChillingReign from './Pages/Collections/SwordandShield/ChillingReign';
import EvolvingSkies from './Pages/Collections/SwordandShield/EvolvingSkies';
import FusionStrike from './Pages/Collections/SwordandShield/FusionStrike';
import LostOrigin from './Pages/Collections/SwordandShield/LostOrigin';
import { ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import CollectionPage from './Pages/Collections';

function App() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <div>
      <Router>
        <AuthProvider>
              <Navbar />
              <Routes>
                <Route path="/logout" element={<Logout />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Splashscreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/test" element={<Test/>} />
                <Route path="/collections/:collectionName" element={<CollectionPage />} />
              </Routes>
              <ToastContainer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
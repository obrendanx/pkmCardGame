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
import { ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";

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
              </Routes>
              <ToastContainer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
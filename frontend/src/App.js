import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/User/AuthContext';
import './App.css';
import PrivateRoute from './Components/User/PrivateRoute';
import Home from './Pages/Home';
import Login from './Components/User/Auth/Login';
import Register from './Components/User/Auth/Register';
import Splashscreen from './Pages/Splashscreen';
import Logout from './Components/User/Auth/Logout';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Splashscreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
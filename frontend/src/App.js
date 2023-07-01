import './App.css';
import Splashscreen from "./Pages/Splashscreen";
import Login from './Components/User/Auth/Login';
import Register from './Components/User/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/User/AuthContext';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Splashscreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

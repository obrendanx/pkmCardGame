import './App.css';
import Splashscreen from "./Pages/Splashscreen";
import Login from './Components/User/Auth/Login';
import Register from './Components/User/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splashscreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
import React, { useContext } from 'react'
import SplashscreenLg from '../Images/splashscreen-lg.png'
import PikachuRun from '../Components/Animations/PikachuRun'
import Button from '../Components/Form/Buttons/Button'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/User/AuthContext'

function Splashscreen() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      {isLoggedIn ? (
        navigate('../home')
      ) : (
        <div className="bg-cover bg-center bg-fixed overflow-hidden h-lvh w-lvw" style={{ backgroundImage: `url(${SplashscreenLg})`}}>
          <PikachuRun width='40%' left='20%' top='37.5vh' />
          <div className='max-w-4xl mx-auto p-4 bg-black bg-opacity-70 h-40p mt-8 relative top-40p pt-20'>
            <h1 className='text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Welcome</h1>
            <div className="flex flex-row justify-center gap-5 align-center">
              <Button text="Login" handleClick={handleLoginClick}>Login</Button>
              <Button text="Register" handleClick={handleRegisterClick}>Register</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Splashscreen
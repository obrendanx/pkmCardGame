import React, { useContext } from 'react'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import SplashscreenLg from '../Images/splashscreen-lg.png'
import PikachuRun from '../Components/Animations/PikachuRun'
import Button from '../Components/Form/Buttons/Button'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/User/AuthContext'

const Wrapper = styled.div`
  height:40%;
  width:60%;
  margin-left:20%;
  background:rgba(0, 0, 0, 0.7);
  border-radius:20px;
  margin-top:50vh;
  @media only screen and (max-width: 770px){
    width:100%;
    margin-left:0;
    border-radius:0;
  }
`

const Header = styled.h1`
  font-size:4em;
  text-align:center;
  height:30%;
  width:90%;
  padding:5%;
  line-height:130%;
  text-transform:uppercase;
  font-family: 'Oswald', sans-serif;
  color:#fff;
`

const SubWrapper = styled.div`
  height:70%;
  width:100%;
  text-align:center;
  display:flex;
  flex-direction:row;
  justify-content:center;
  gap:10px;
`


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
        <div className={css`
          height:100vh;
          width:100vw;
          background-image: url(${SplashscreenLg});
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
          overflow:hidden;
        `}>
          <PikachuRun width='60%' left='20%' top='40vh' />
          <Wrapper>
            <Header>Welcome</Header>
            <SubWrapper>
              <Button text="Login" handleClick={handleLoginClick}>Login</Button>
              <Button text="Register" handleClick={handleRegisterClick}>Register</Button>
            </SubWrapper>
          </Wrapper>
        </div>
      )}
    </div>
  )
}

export default Splashscreen
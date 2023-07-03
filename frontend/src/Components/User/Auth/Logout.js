import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext';
import Button from '../../Form/Buttons/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/css';

function Logout() {
const { isLoggedIn, logout } = useContext(AuthContext);
const navigate = useNavigate();

const handleLogout = () => {
    if(isLoggedIn) {
        logout();
        navigate('/Home');
    } else {
        toast.error('You are already logged out!');
    }
  };

  return (
    <div className={css`
        width: 100%;
        height:100vh;
        overflow-x:hidden;
        background:#de5239;
    `}>
        <div className={css`
            width:40%;
            text-align:center;
            margin-left:30%;
            margin-top:40%;
        `}>
            <Button text="Logout" handleClick={handleLogout}>Logout</Button>
            <ToastContainer />
        </div>
    </div>
  )
}

export default Logout
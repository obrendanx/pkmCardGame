import React, { useState, useContext } from 'react';
import Input from '../../Form/Input'
import Label from '../../Form/Label';
import Submit from '../../Form/Submit';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import MediumHeader from '../../Headers/MediumHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(username);

    if (username.length === 0 || password.length === 0) {
        toast.error("username or password is missing!");
    }

    try {
      const response = await axios.post('http://localhost:5001/login', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 15000, 
      });

      const data = response.data;

      if (data.user) {
        console.log(data.user);
        /*
            If data matches:
            - Set a unique token for the user in their local storage
            - Dispatch the login state to Redux state to use in other components
        */
        // Set a cookie to keep the user signed in
        const now = new Date();
        now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
        document.cookie = `token=${data.user.token}; userId=${data.user.id}; username=${username}; expires=${now.toUTCString()}; path=/`;

        console.log('Login successful');
        login(data.user.token, data.user.userId, username);

        // Use navigate to navigate without full page reload
        navigate('/home');
      } else {
        // If incorrect, notify the user
        toast.error('Please check your username and password');
      }

      console.log(data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request timed out');
        toast.error('Request timed out');
      } else {
        console.error('An error occurred:', error);
        toast.error('Please check your username and password');
      }
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        navigate('../home')
      ) : (
        <div className={css`
            width: 100%;
            height:100vh;
            overflow-x:hidden;
            background:#de5239;
        `}>
          <div className={css`
              width:45%;
              margin-left:27.5%;
              min-height: 460px;
              margin-top:10%;
              border-radius:15px;
              background:#ffd57b;
              padding-bottom:20px;
              @media (max-width: 770px) {
                width:90%;
                margin-left:5%;
              }
            `}>
            <form
              onSubmit={handleSubmit}
              className={css`
              width:100%;
              padding-left:12.5%;
              padding-top:20px;
            `}
            data-testid="login-form"
            >
              <MediumHeader text="Login" />
              <Label htmlFor="username" text="Username" primary />
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onValueChange={setUsername}
              />

              <Label htmlFor="password" text="Password" primary />
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onValueChange={setPassword}
              />

              <Submit value="Login" />

              <div>
                <input
                  className={css`
                  height:20px;
                  width:20px;
                `}
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={setRememberMe}
                />
                <label
                  htmlFor="rememberMe"
                  className={css`
                  height:20px;
                  color:#8b2900;
                  font-size:1em;
                `}
                >
                  Remember Me
                </label>
              </div>

              <div>
                <p className={css`
                  color:#8b2900;
                `}>
                  Not registered? Sign up <Link to="/register">here</Link>
                </p>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
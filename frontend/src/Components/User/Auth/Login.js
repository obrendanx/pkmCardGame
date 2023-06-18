import React, { useState } from 'react';
import Input from '../../Form/Input'
import Label from '../../Form/Label';
import Submit from '../../Form/Submit';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import MediumHeader from '../../Headers/MediumHeader';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
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
        >
        <MediumHeader text="Login"/>
        <Label htmlFor="username" text="Username" primary />
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onValueChange={handleUsernameChange}
        />

        <Label htmlFor="password" text="Password" primary />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onValueChange={handlePasswordChange}
        />

        <Submit/>

        <div>
          <input
            className={css`
              height:20px;
              width:20px;
            `}
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
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

      </form>
      </div>
    </div>
  );
}

export default Login;
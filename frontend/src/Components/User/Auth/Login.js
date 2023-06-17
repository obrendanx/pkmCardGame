import React, { useState } from 'react';
import Input from '../../Form/Input'
import Label from '../../Form/Label';
import Submit from '../../Form/Submit';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

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
    <div>
      <form onSubmit={handleSubmit}>
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

        <div>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <Submit/>

        <div>
            <p>Sign up <Link to="/register">here</Link></p>
        </div>

      </form>
    </div>
  );
}

export default Login;
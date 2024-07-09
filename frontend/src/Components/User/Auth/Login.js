import React, { useState, useContext } from 'react';
import Input from '../../Form/Input'
import Submit from '../../Form/Submit';
import { Link } from 'react-router-dom';
import MediumHeader from '../../Headers/MediumHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../../Querys/loginQuery';

function Login() {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const addLoginMutation = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(username);
    //Fetching the users login information from mongo
    const data = await addLoginMutation.mutateAsync({
        username,
        password,
      });

    console.log(data);

    if (data) {
      console.log(data);
      /*
          If data matches:
          - Set a unique token for the user in there local storage
          - Dispatch the login state to Redux state to use
          in other components
      */
      // Set a cookie to keep the user signed in
      const now = new Date();
      now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
      document.cookie = `token=${data.userId}; userId=${data.userId}; username=${username}; expires=${now.toUTCString()}; path=/`;


      console.log('Login successful');
      login(data.userId, data.userId, username, data.email, data.dateofbirth);

      // Use navigate to navigate without full page reload
      navigate('/home');
    } else {
      //if incorrect notify the user
      toast.error('Please check your username and password');
    }
    console.log(data)
  };

  return (
    <div>
      {isLoggedIn ? (
        navigate('../home')
      ) : (
        <div className="w-full h-lvh overflow-x-hidden bg-[#de5239]">
          <div className='h-full mt-56 flex justify-center'>
            <form
              onSubmit={handleSubmit}
              className="w-1/2 h-1/2 bg-[#ffd57b]">
              <div className='w-3/6 mx-auto pt-10'> 
                <MediumHeader text="Login" />
                
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onValueChange={setUsername}
                />

                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onValueChange={setPassword}
                />

                <Submit value="Login" />

                <div>
                  <input
                    className='h-4 w-4'
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={setRememberMe}
                  />
                  <label
                    htmlFor="rememberMe"
                    className='h-4 text-[#8b2900] text-base ml-2'>
                    Remember Me
                  </label>
                </div>

                <div>
                  <p className='text-[#8b2900]'>
                    Not registered? Sign up <Link to="/register"><span className='font-bold'>here</span></Link>
                  </p>
                </div>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
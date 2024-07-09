import React, { useState, useContext } from 'react';
import Input from '../../Form/Input';
import Label from '../../Form/Label';
import Submit from '../../Form/Submit';
import { Link } from 'react-router-dom';
import MediumHeader from '../../Headers/MediumHeader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import styled from '@emotion/styled';
import useSignup from '../../../Querys/signupQuery';

const Error = styled.span`
    font-size:0.8em;
    color:#F44336;
    margin-left:2.5%;
`

function Register() {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [announcements, setAnnouncements] = useState(false);
  const [errors, setErrors] = useState({});
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const addSignupMutation = useSignup();

  const handleSignUp = async (event) => {
    event.preventDefault();
    // Validate form inputs
    const formErrors = {};

    if (username.trim() === '') {
      formErrors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      formErrors.username = 'Username can only contain letters and numbers';
    }

    if (fullName.trim() === '') {
      formErrors.fullName = 'Full Name is required';
    } else if (!/^[a-zA-Z ]+$/.test(fullName)) {
      formErrors.fullName = 'Full Name can only contain letters and spaces';
    }

    if (password.trim() === '') {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().]).{6,}/.test(password)
    ) {
      formErrors.password =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol';
    }

    if (password !== retypePassword) {
      formErrors.retypePassword = 'Passwords do not match';
    }

    if (email.trim() === '') {
      formErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      formErrors.email = 'Invalid email format';
    }

    if (dateOfBirth.trim() === '') {
      formErrors.dateOfBirth = 'Date of Birth is required';
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateOfBirth)) {
      formErrors.dateOfBirth = 'Date of Birth must be in the format dd/mm/yyyy';
    } else {
      const dob = new Date(dateOfBirth);
      const now = new Date();
      const age = Math.floor((now - dob) / (365.25 * 24 * 60 * 60 * 1000));
      if (age < 12) {
        formErrors.dateOfBirth = 'You must be at least 12 years old';
      }
    } 

    setErrors(formErrors);

    // Proceed with sign-up logic if there are no errors
    if (Object.keys(formErrors).length === 0) {
      try {
        const dateTime = new Date(); 
        // const dob = moment(dateOfBirth, 'DD/MM/YYYY').format('YYYY-MM-DD');

        var isGlobalAdmin = false;

        const registered = {
          username,
          fullName,
          password,
          email,
          dateOfBirth,
          announcements,
          isGlobalAdmin,
          dateTime
        };

        await addSignupMutation.mutateAsync(registered);

      } catch (error) {
        console.error(error.response); 
        if (
          error.response &&
          error.response &&
          error.response.message
        ) {
          toast.error(error.response.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error('An unexpected error occurred', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        navigate('../home')
      ) : (
        <div className='w-full h-lvh overflow-x-hidden bg-[#de5239]'>
          <div className='w-1/2 mx-auto min-h-1/2 mt-20 mb-6 rounded bg-[#ffd57b] pb-2'>
            <form
              onSubmit={handleSignUp}
              className='w-3/4 pt-3 pb-4 mx-auto'>
              <MediumHeader text="Register" />
              <div>
                <Label htmlfor="username" text="Username" />
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onValueChange={setUsername}
                />
                {errors.username && <Error>{errors.username}</Error>}
              </div>

              <div>
                <Label htmlfor="fullName" text="Full Name" />
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onValueChange={setFullName}
                />
                {errors.fullName && <Error>{errors.fullName}</Error>}
              </div>

              <div>
                <Label htmlfor="password" text="Password" />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onValueChange={setPassword}
                />
                {errors.password && <Error>{errors.password}</Error>}
              </div>

              <div>
                <Label htmlfor="retypePassword" text="Retype Password" />
                <Input
                  type="password"
                  placeholder="Retype your password"
                  value={retypePassword}
                  onValueChange={setRetypePassword}
                />
                {errors.retypePassword && <Error>{errors.retypePassword}</Error>}
              </div>

              <div>
                <Label htmlfor="email" text="Email" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onValueChange={setEmail}
                />
                {errors.email && <Error>{errors.email}</Error>}
              </div>

              <div>
                <Label htmlfor="dateOfBirth" text="Date of Birth" />
                <Input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  value={dateOfBirth}
                  onValueChange={setDateOfBirth}
                />
                {errors.dateOfBirth && <Error>{errors.dateOfBirth}</Error>}
              </div>

              <div>
                <label
                  htmlFor="announcements"
                  className='h-4 text-[#8b2900] text-sm'>
                  <input
                    className='h-4 w-4 mr-2'
                    type="checkbox"
                    id="announcements"
                    checked={announcements}
                    onChange={(event) => setAnnouncements(event.target.checked)}
                  />
                  Receive announcements
                </label>
              </div>

              <div>
                <Submit small={false} left={null} value="Register" />
              </div>

              <div>
                <p className='text-[#8b2900]'>
                  Already Signed up? Login <Link to="/login"><span className='font-bold'>here</span></Link>
                </p>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
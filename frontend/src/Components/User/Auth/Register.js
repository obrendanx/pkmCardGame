import React, { useState, useContext } from 'react';
import Input from '../../Form/Input';
import Label from '../../Form/Label';
import Submit from '../../Form/Submit';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import MediumHeader from '../../Headers/MediumHeader';
import axios from 'axios';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

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
        const dob = moment(dateOfBirth, 'DD/MM/YYYY').toDate();

        const response = await axios.post('http://localhost:5001/signup', {
          fullName,
          username,
          email,
          password,
          dob,
          announcements
        });

        // Handle successful signup
        console.log(response.data); // do something with the response

        window.location = './Login'

      } catch (error) {
        // Handle signup error
        console.error(error.response.data); // or error.message

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          // Display toast alert for the error message
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          // Display a generic error message
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
        <div className={css`
          width: 100%;
          height:100vh;
          overflow-x:hidden;
          background:#de5239;
        `}>
          <div className={css`
            width:45%;
            margin-left:27.5%;
            min-height: 750px;
            margin-top:5%;
            margin-bottom:7.5%;
            border-radius:15px;
            background:#ffd57b;
            padding-bottom:20px;
            @media (max-width: 770px) {
              width:90%;
              margin-left:5%;
            }
          `}>
            <form
              onSubmit={handleSignUp}
              className={css`
              width:100%;
              padding-left:12.5%;
              padding-top:20px;
            `}>
              <MediumHeader text="Register" />
              <div>
                <Label htmlfor="username" text="Username" />
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onValueChange={setUsername}
                />
                {errors.username && <span>{errors.username}</span>}
              </div>

              <div>
                <Label htmlfor="fullName" text="Full Name" />
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onValueChange={setFullName}
                />
                {errors.fullName && <span>{errors.fullName}</span>}
              </div>

              <div>
                <Label htmlfor="password" text="Password" />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onValueChange={setPassword}
                />
                {errors.password && <span>{errors.password}</span>}
              </div>

              <div>
                <Label htmlfor="retypePassword" text="Retype Password" />
                <Input
                  type="password"
                  placeholder="Retype your password"
                  value={retypePassword}
                  onValueChange={setRetypePassword}
                />
                {errors.retypePassword && <span>{errors.retypePassword}</span>}
              </div>

              <div>
                <Label htmlfor="email" text="Email" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onValueChange={setEmail}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>

              <div>
                <Label htmlfor="dateOfBirth" text="Date of Birth" />
                <Input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  value={dateOfBirth}
                  onValueChange={setDateOfBirth}
                />
                {errors.dateOfBirth && <span>{errors.dateOfBirth}</span>}
              </div>

              <div>
                <label
                  htmlFor="announcements"
                  className={css`
                  height:20px;
                  color:#8b2900;
                  font-size:1em;
                `}>
                  <input
                    className={css`
                    height:20px;
                    width:20px;
                  `}
                    type="checkbox"
                    id="announcements"
                    checked={announcements}
                    onChange={(event) => setAnnouncements(event.target.checked)}
                  />
                  Receive announcements
                </label>
              </div>

              <div>
                <Submit small={false} left={null} />
              </div>

              <div>
                <p className={css`
                  color:#8b2900;
                `}>
                  Already Signed up? Login <Link to="/login">here</Link>
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
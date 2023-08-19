import React, {useContext, useState, useEffect} from 'react'
import styled from '@emotion/styled'
import { AuthContext } from '../Components/User/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Form/Input';
import Submit from '../Components/Form/Submit';
import Label from '../Components/Form/Label';
import TextArea from '../Components/Form/TextArea'
import { SketchPicker } from 'react-color';
import axios from 'axios'

function EditProfile() {
  const { isLoggedIn, username } = useContext(AuthContext);
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [passwordRetype, setPasswordRetype] = useState('');
  const [updateFullName, setUpdateFullName] = useState('');
  const [bio, setBio] = useState('');
  const [profileIconColor, setProfileIconColor] = useState('#3F51B5'); // Default color
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [currentFullname, setCurrentFullname] = useState('');
  const [currentBio, setCurrentBio] = useState('');
  const [currentGender, setCurrentGender] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isLoadingUsername, setLoadingUsername] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  /*
    using a promise and if statement to check that the username is not NULL
    as errors are formed due to trying to fetch data but username hasnt been 
    fetched from auth context yet
  */

  useEffect(() => {
    if (username !== null) {
      Promise.all([
        fetchEmail(),
        fetchDob(),
        fetchFullname(),
        fetchBio(),
        fetchGender(),
      ]).finally(() => setLoading(false));
    } else {
      setLoadingUsername(false); // Set loading to false if username is not found
    }
  }, [username]);

  const fetchEmail = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/fetchemail?username=${username}`);

      if (response.status === 200) {
        setEmail(response.data.email);
      } else {
        console.error('No email found');
      }
    } catch (error) {
      console.error('No email found here', error);
    }
  };

  const fetchDob = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchdob?username=${username}`);

      if (response.status === 200) {
        setDob(response.data.dateOfBirth);
      } else {
        console.error('No date of birth found');
      }
    } catch (error) {
      console.error('No date of birth found here', error);
    }
  };

  const fetchFullname = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/fetchfullname?username=${username}`);

      if (response.status === 200) {
        setCurrentFullname(response.data.fullName);
      } else {
        console.error('No icon found');
      }
    } catch (error) {
      console.error('No icon found here', error);
    }
  };

  const fetchBio = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchbio?username=${username}`);

      if (response.status === 200) {
        setCurrentBio(response.data.bio);
      } else {
        console.error('No bio found');
      }
    } catch (error) {
      console.error('No bio found here', error);
    }
  };

  const fetchGender = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchgender?username=${username}`);

      if (response.status === 200) {
        setCurrentGender(response.data.gender);
      } else {
        console.error('No gender found');
      }
    } catch (error) {
      console.error('No gender found here', error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    // Validate form inputs
    const formErrors = {};

    if (updateFullName.trim() === '') {
        formErrors.updateFullName = 'Full Name is required';
    } else if (!/^[a-zA-Z ]+$/.test(updateFullName)) {
        formErrors.updateFullName = 'Full Name can only contain letters and spaces';
    }

    if (updatedPassword.trim() === '') {
        formErrors.updatedPassword = 'Password is required';
    } else if (updatedPassword.length < 6) {
        formErrors.updatedPassword = 'Password must be at least 6 characters long';
    } else if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().]).{6,}/.test(updatedPassword)
    ) {
        formErrors.updatedPassword =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol';
    }

    if (updatedPassword !== passwordRetype) {
        formErrors.passwordRetype = 'Passwords do not match';
    }

    setErrors(formErrors);

    const authUpdateData = {
        username,
        updatedPassword,
        updateFullName,
    };

    const userUpdateData = {
        username,
        profileIconColor,
        bio,
        gender,
    };

    try {
        let authUpdated = false;
        let userUpdated = false;

        if (updatedPassword || updateFullName) {
        await axios.put('http://localhost:5001/updateauthprofile', authUpdateData);
        authUpdated = true;
        }

        if (profileIconColor || bio || gender) {
        await axios.put('http://localhost:5002/updateprofile', userUpdateData);
        userUpdated = true;
        }

        // Handle success or show a success message
        if (authUpdated || userUpdated) {
        console.log('Profile updated successfully!');
        // You can set a state variable to show a success message to the user
        }
    } catch (error) {
        console.log(error);
        // Handle error or show an error message
        console.log('Profile update failed.');
        // You can set a state variable to show an error message to the user
    }
    };

  return (
    <div>
        {isLoggedIn ? (
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <form onSubmit={handleUpdate}>
                        <div>
                                <Label htmlFor="username" text="Username"/>
                                <span>{username}</span>
                        </div> 

                        <div>
                                <Label htmlFor="email" text="Email"/>
                                <span>{email}</span>
                        </div>

                        <div>
                                <Label htmlFor='dateofbirth' text="Date of Birth"/>
                                <span>{dob}</span>
                        </div>

                        <div>
                                <Label htmlFor="fullName" text="Full Name"/>
                                <span>{currentFullname}</span>
                                <Input 
                                    type="text"
                                    placeholder="Please enter your name"
                                    value={updateFullName}
                                    onValueChange={setUpdateFullName}
                                />
                                {errors.updateFullName && <span>{errors.updateFullName}</span>}
                        </div>

                        <div>
                                <Label htmlFor="password" text="Update Password"/>
                                <Input 
                                    type="password"
                                    placeholder="Please enter a password"
                                    value={updatedPassword}
                                    onValueChange={setUpdatedPassword}
                                />
                                {errors.updatedPassword && <span>{errors.updatedPassword}</span>}
                        </div>

                        <div>
                                <Label htmlFor="password" text="Retype Password"/>
                                <Input 
                                    type="password"
                                    placeholder="Please enter your password again"
                                    value={passwordRetype}
                                    onValueChange={setPasswordRetype}
                                />
                                {errors.passwordRetype && <span>{errors.passwordRetype}</span>}
                        </div>

                        <div>
                                <Label htmlFor="bio" text="Bio" />
                                <span>{currentBio}</span>
                                <TextArea
                                    type="text"
                                    placeholder="Bio"
                                    value={bio}
                                    onValueChange={setBio}
                                />
                        </div>

                        <div>
                                <Label htmlFor="profileIconColor" text="Profile Icon Color" />
                                <SketchPicker
                                color={profileIconColor}
                                onChange={(color) => setProfileIconColor(color.hex)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="gender" text="Gender" />
                                <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option>Select a Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                </select>
                            </div>
                        <Submit />
                    </form>
                )}
            </div>
        ) 
        : (navigate('../login'))}
    </div>
  )
}

export default EditProfile
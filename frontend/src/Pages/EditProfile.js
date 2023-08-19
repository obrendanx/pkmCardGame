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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
      await axios.post('http://localhost:5001/updateAuthProfile', authUpdateData); // Replace with your route
      // Handle success or show a success message
    } catch (error) {
      // Handle error or show an error message
    }

    // Send the update request for user profile (icon color, bio, and gender)
    try {
      await axios.post('http://localhost:5002/updateProfile', userUpdateData); // Replace with your route
      // Handle success or show a success message
    } catch (error) {
      // Handle error or show an error message
    }
  };

  return (
    <div>
        {isLoggedIn ? (
            <div>
               <form onSubmit={handleUpdate}>
                   <div>
                        <Label htmlFor="username" text="Username"/>
                        <span>{username}</span>
                   </div> 

                   <div>
                        <Label htmlFor="email" text="Email"/>
                        <span>Emal Here</span>
                   </div>

                   <div>
                        <Label htmlFor='dateofbirth' text="Date of Birth"/>
                        <span>DOB</span>
                   </div>

                   <div>
                        <Label htmlFor="fullName" text="Full Name"/>
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
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        </select>
                    </div>
                   <Submit />
               </form>
            </div>
        ) 
        : (navigate('../login'))}
    </div>
  )
}

export default EditProfile
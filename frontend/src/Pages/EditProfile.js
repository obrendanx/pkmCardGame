import React, {useContext, useState, useEffect} from 'react'
import styled from '@emotion/styled'
import { AuthContext } from '../Components/User/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Form/Input';
import Submit from '../Components/Form/Submit';
import Label from '../Components/Form/Label';
import TextArea from '../Components/Form/TextArea'
import { TwitterPicker } from 'react-color';
import axios from 'axios';
import { css } from '@emotion/css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs';
import PokemonCard from '../Components/Cards/PokemonCard';
import useUpdateAuth from '../Querys/updateAuthQuery';
import useUpdateUser from '../Querys/updateUserQuery';
import { useShowEmail } from '../Querys/showEmailQuery';
import { useShowSocials } from '../Querys/showSocialsQuery';
import { useShowDob } from '../Querys/showDobQuery';
import { useShowFullname } from '../Querys/showFullnameQuery';
import { useShowBio } from '../Querys/showBioQuery';
import { useShowGender } from '../Querys/showGenderQuery';
import { useShowInterests } from '../Querys/showInterestsQuery';

function EditProfile() {
  const { isLoggedIn, username, pokemon } = useContext(AuthContext);
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [passwordRetype, setPasswordRetype] = useState('');
  const [updateFullName, setUpdateFullName] = useState('');
  const [bio, setBio] = useState('');
  const [profileIconColor, setProfileIconColor] = useState('#3F51B5'); // Default color
  const [gender, setGender] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [socialMedia, setSocialMedia] = useState({
    twitter: "",
    facebook: "",
    instagram: "",
  });
  const [interests, setInterests] = useState([]);
  const [isLoadingUsername, setLoadingUsername] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const addUserMutation = useUpdateUser();
  const addAuthMutation = useUpdateAuth();
  const { data: currentEmail } = useShowEmail(username);
  const { data: socials } = useShowSocials(username);
  const { data: currentDob } = useShowDob(username);
  const { data: fullname } = useShowFullname(username);
  const { data: currentBio } = useShowBio(username);
  const { data: curGender } = useShowGender(username);
  const { data: currentInterests } = useShowInterests(username);


  useEffect(() => {
    if (username !== null) {
      if((currentEmail || socials || currentDob || fullname || currentBio || curGender || currentInterests) !== undefined){
        setLoading(false)
      }
    } else {
      setLoadingUsername(false); // Set loading to false if username is not found
    }
  }, [username, currentEmail, socials, currentDob, currentBio, fullname, curGender, currentInterests]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formErrors = {};

    //Check to see if a correct 'Full Name' is entered
    if (updateFullName.trim() === '') {
        formErrors.updateFullName = 'Full Name is required';
    } else if (!/^[a-zA-Z ]+$/.test(updateFullName)) {
        formErrors.updateFullName = 'Full Name can only contain letters and spaces';
    }

    //Check to see if a correct 'Password' is entered and matched correctly
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
        interests,
        socialMedia,
        pokemon
    };

        let authUpdated = false;
        let userUpdated = false;


        //Routes to update information to 
        //Routes split due to different information in different microservices
        if (updatedPassword || updateFullName) {
        await addAuthMutation.mutateAsync(authUpdateData);
        authUpdated = true;
        }

        if (profileIconColor || bio || gender) {
        await addUserMutation.mutateAsync(userUpdateData);
        userUpdated = true;
        }

        if(!authUpdateData && !userUpdateData){
            toast.error("No changes have been made");
        }
    };

  return (
    <div>
        {isLoggedIn ? (
            <div className='h-full w-full overflow-x-hidden'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <form className='h-full w-full ml-7p flex flex-row flex-wrap relative mt-6 mb-4 md:w-full' onSubmit={handleUpdate} id="updateform">
                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor="username" text="Username"/>
                                <span className='min-h-4 w-full m-4 p-2'>{username}</span>
                        </div> 

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor="email" text="Email"/>
                                <span className='min-h-4 w-full m-4 p-2'>{currentEmail.email}</span>
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor='dateofbirth' text="Date of Birth"/>
                                <span className='min-h-4 w-full m-4 p-2'>{currentDob.dateOfBirth}</span>
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                            <Label htmlFor="gender" text="Gender" />
                            <select className='border-none h-10 p-2 ml-4 mt-2 mb-2' name="gender" value={curGender.gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Select a Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor="password" text="Update Password"/>
                                <Input 
                                    type="password"
                                    placeholder="Please enter a password"
                                    value={updatedPassword}
                                    onValueChange={setUpdatedPassword}
                                    left="2.5%"
                                />
                                {errors.updatedPassword && <span className='font-sm text-[#f44336] ml-4'>{errors.updatedPassword}</span>}
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor="password" text="Retype Password"/>
                                <Input 
                                    type="password"
                                    placeholder="Please enter your password again"
                                    value={passwordRetype}
                                    onValueChange={setPasswordRetype}
                                    left="2.5%"
                                />
                                {errors.passwordRetype && <span className='font-sm text-[#f44336] ml-4'>{errors.passwordRetype}</span>}
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor="fullName" text="Full Name"/>
                                <span className='min-h-4 w-full m-4 p-2'>{fullname.fullName}</span>
                                <Input 
                                    type="text"
                                    placeholder="Please enter your name"
                                    value={fullname.fullName}
                                    onValueChange={setUpdateFullName}
                                    left="2.5%"
                                />
                                {errors.updateFullName && <span className='font-sm text-[#f44336] ml-4'or>{errors.updateFullName}</span>}
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="twitter" text={<BsTwitter/>} />
                          <Input
                            type="text"
                            placeholder="Twitter profile URL"
                            value={socials.socials.twitter}
                            onValueChange={(value) => setSocialMedia({ ...socialMedia, twitter: value })}
                            left="2.5%"
                          />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="facebook" text={<BsFacebook/>} />
                          <Input
                            type="text"
                            placeholder="Facebook profile URL"
                            value={socials.socials.facebook}
                            onValueChange={(value) => setSocialMedia({ ...socialMedia, facebook: value })}
                            left="2.5%"
                          />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="instagram" text={<BsInstagram/>} />
                          <Input
                            type="text"
                            placeholder="Instagram profile URL"
                            value={socials.socials.instagram}
                            onValueChange={(value) => setSocialMedia({ ...socialMedia, instagram: value })}
                            left="2.5%"
                          />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="interests" text="Interests" />
                          <span className='min-h-4 w-full m-4 p-2'>{currentInterests.interests}</span>
                          <TextArea
                            type="text"
                            placeholder="Your interests"
                            value={currentInterests.interests.join(", ")}
                            onValueChange={(value) => setInterests(value.split(",").map((item) => item.trim()))}
                            width="90%"
                          />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor="bio" text="Bio" />
                                <span className='min-h-4 w-full m-4 p-2'>{currentBio.bio}</span>
                                <TextArea
                                    type="text"
                                    placeholder="Bio"
                                    value={bio}
                                    onValueChange={setBio}
                                    width="90%"
                                />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                            <Label htmlFor="profileIconColor" text="Profile Icon Color" />
                            <TwitterPicker
                            color={profileIconColor}
                            onChange={(color) => setProfileIconColor(color.hex)}
                            className='mt-4 ml-6 p-4 md:mb-4'/>
                        </div>
                        <PokemonCard/>
                        <div className='w-1/5 absolute bottom-[-60px] ml-8 md:2-1/2'>
                            <Submit value="Update Profile" form="updateform"/>
                        </div>
                        <ToastContainer/>
                    </form>
                )}
            </div>
        ) 
        : (navigate('../login'))}
    </div>
  )
}

export default EditProfile
import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from '../Components/User/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Form/Input';
import Submit from '../Components/Form/Submit';
import Label from '../Components/Form/Label';
import TextArea from '../Components/Form/TextArea'
import { TwitterPicker } from 'react-color';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs';
import PokemonCard from '../Components/Cards/PokemonCard';
import useUpdateUser from '../Querys/updateProfileQuery';
import { useShowProfile } from '../Querys/showProfileQuery';
import { useShowUser } from '../Querys/showUserQuery';
import useUpdateUserAuth from '../Querys/updateAuthQuery';

function EditProfile() {
  const { isLoggedIn, username, pokemon, userId} = useContext(AuthContext);

  //update profile
  const [Bio, setBio] = useState(null);
  const [profileIconColor, setProfileIconColor] = useState('#3F51B5'); // Default color
  const [Gender, setGender] = useState(null);
  const [Twitter, setTwitter] = useState(null);
  const [Facebook, setFacebook] = useState(null);
  const [Instagram, setInstagram] = useState(null);
  const [FavoritePokemonName, setPokemonName] = useState(null);
  const [FavoritePokemonImage, setPokemonImage] = useState(null);

  //update user
  const [FullName, setUpdateFullName] = useState(null);
  const [Password, setPassword] = useState(null);
  const [passwordRetype, setPasswordRetype] = useState(null);

  const [userUpdated, setUserUpdated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingUsername, setLoadingUsername] = useState(true);

  const [errors, setErrors] = useState({});

  const addUserMutation = useUpdateUser();
  const addUserAuthMutation = useUpdateUserAuth();

  const navigate = useNavigate();

  //get profile data
  const { data: profile } = useShowProfile(userId);
  const { data: user } = useShowUser(userId);

  useEffect(() => {
    if (username !== null) {
      if((profile) !== undefined){
        setLoading(false)
      }
    } else {
      setLoadingUsername(false); // Set loading to false if username is not found
    }

    setPokemonName(pokemon.name);
    setPokemonImage(pokemon.image);
  }, [username, profile, pokemon]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formErrors = {};

    //Check to see if a correct 'Full Name' is entered
    if(FullName != null){
      if (FullName.trim() === '') {
        formErrors.updateFullName = 'Full Name is required';
      } else if (!/^[a-zA-Z ]+$/.test(FullName)) {
          formErrors.updateFullName = 'Full Name can only contain letters and spaces';
      }
    }

    //Check to see if a correct 'Password' is entered and matched correctly
    if(Password != null){
      if (Password.trim() === '') {
        formErrors.Password = 'Password is required';
      } else if (Password.length < 6) {
          formErrors.Password = 'Password must be at least 6 characters long';
      } else if (
          !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().]).{6,}/.test(Password)
      ) {
          formErrors.Password =
          'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol';
      }
    }

    if (Password !== passwordRetype) {
        formErrors.passwordRetype = 'Passwords do not match';
    }

    setErrors(formErrors);

    const userUpdateData = {
        userId,
        profileIconColor,
        Bio,
        Gender,
        Twitter,
        Facebook,
        Instagram,
        FavoritePokemonName,
        FavoritePokemonImage
    };

    const userUpdateAuthData = {
      userId,
      FullName,
      Password
    }

    if (userUpdateAuthData.FullName != null || userUpdateAuthData.Password != null) {
      await addUserAuthMutation.mutateAsync(userUpdateAuthData);
      setUserUpdated(true);
    }

    if (userUpdateData.Bio != null || userUpdateData.Facebook != null || userUpdateData.FavoritePokemonImage != null || userUpdateData.FavoritePokemonName != null || userUpdateData.Gender != null || userUpdateData.Instagram != null || userUpdateData.Twitter != null || userUpdateData.profileIconColor != null) {
      await addUserMutation.mutateAsync(userUpdateData);
      setUserUpdated(true);
    }

    if(!userUpdateData && !userUpdateAuthData){
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
                                <span className='min-h-4 w-full m-4 p-2'>{user.email}</span>
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor='dateofbirth' text="Date of Birth"/>
                                <span className='min-h-4 w-full m-4 p-2'>{user.dateOfBirth}</span>
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                            <Label htmlFor="gender" text="Gender" />
                            <select className='border-none h-10 p-2 ml-4 mt-2 mb-2' name="gender" value={profile.gender} onChange={(e) => setGender(e.target.value)}>
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
                                    value={Password}
                                    onValueChange={setPassword}
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
                                <span className='min-h-4 w-full m-4 p-2'>{user.fullName}</span>
                                <Input 
                                    type="text"
                                    placeholder="Please enter your name"
                                    onValueChange={setUpdateFullName}
                                    left="2.5%"
                                />
                                {errors.updateFullName && <span className='font-sm text-[#f44336] ml-4'or>{errors.updateFullName}</span>}
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="twitter" text={<BsTwitter/>} />
                          <span className='min-h-4 w-full m-4 p-2'><a href={profile.twitter}>{profile.twitter}</a></span>
                          <Input
                            type="text"
                            placeholder="Twitter profile URL"
                            onValueChange={setTwitter}
                            left="2.5%"
                          />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="facebook" text={<BsFacebook/>} />
                          <span className='min-h-4 w-full m-4 p-2'><a href={profile.facebook}>{profile.facebook}</a></span>
                          <Input
                            type="text"
                            placeholder="Facebook profile URL"
                            onValueChange={setFacebook}
                            left="2.5%"
                          />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="instagram" text={<BsInstagram/>} />
                          <span className='min-h-4 w-full m-4 p-2'><a href={profile.instagram}>{profile.instagram}</a></span>
                          <Input
                            type="text"
                            placeholder="Instagram profile URL"
                            onValueChange={setInstagram}
                            left="2.5%"
                          />
                        </div>
                        {/*}
                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                          <Label htmlFor="interests" text="Interests" />
                          <span className='min-h-4 w-full m-4 p-2'></span>
                          <TextArea
                            type="text"
                            placeholder="Your interests"
                            
                            width="90%"
                          />
                        </div>
                        */}
                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                                <Label htmlFor="bio" text="Bio" />
                                <span className='min-h-4 w-full m-4 p-2'>{profile.bio}</span>
                                <TextArea
                                    type="text"
                                    placeholder="Bio"
                                    value={Bio}
                                    onValueChange={setBio}
                                    width="90%"
                                />
                        </div>

                        <div className='min-h-24 w-2/5 m-4 p-4 rounded-xl bg-[#ffd57b] md:w-full'>
                            <Label htmlFor="profileIconColor" text="Profile Icon Color" />
                            <TwitterPicker
                            color={profile.profileIconColor}
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
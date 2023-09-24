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
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs'
import PokemonCard from '../Components/Cards/PokemonCard'

const PageWrapper = styled.div`
    height:100%;
    width:100%;
    overflow-x:hidden;
`

const Wrapper = styled.form`
    height:100%;
    width:80%;
    margin-left:10%;
    margin-top:2.5%;
    margin-bottom:70px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    position:relative;
    @media (max-width: 770px) {
        width:100%;
        margin-left:0;
    }
`

const LabelGroup = styled.div`
    min-height:50px;
    width:42%;
    margin:1% 2% 1% 2%;
    padding:2%;
    border-radius:15px;
    background:#FFD57B;
    @media (max-width: 770px) {
        width:96%;
    }
`

const DisplayText = styled.span`
    min-height:35px;
    width:100%;
    margin:3% 2% 2% 3%;
    padding:2.5px;
`

const Error = styled.span`
    font-size:0.8em;
    color:#F44336;
    margin-left:2.5%;
`

const Select = styled.select`
    border:none;
    height:30px;
    padding:5px;
    margin-left:2.5%;
    margin-top:5px;
    margin-bottom:5px;
`

function EditProfile() {
  const { isLoggedIn, username, pokemon } = useContext(AuthContext);
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
  const [socialMedia, setSocialMedia] = useState({
    twitter: "",
    facebook: "",
    instagram: "",
  });
  const [interests, setInterests] = useState([]);
  const [isLoadingUsername, setLoadingUsername] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      Promise.all([
        fetchEmail(),
        fetchDob(),
        fetchFullname(),
        fetchBio(),
        fetchGender(),
        fetchInterests(),
        fetchSocials(),
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

  const fetchInterests = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchinterests?username=${username}`);

      if (response.status === 200) {
        setInterests(response.data.interests);
      } else {
        console.error('No interests found');
      }
    } catch (error) {
      console.error('No interests found here', error);
    }
  };

  const fetchSocials = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchsocials?username=${username}`);

      if (response.status === 200) {
        setSocialMedia({ ...socialMedia, 
          instagram: response.data.socials.instagram, 
          twitter: response.data.socials.twitter, 
          facebook: response.data.socials.facebook 
        });
      } else {
        console.error('No socials found');
      }
    } catch (error) {
      console.error('No socials found here', error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formErrors = {};

    // Check to see if a correct 'Full Name' is entered
    if(updateFullName.length > 0) {
      if (!/^[a-zA-Z ]+$/.test(updateFullName)) {
        formErrors.updateFullName = 'Full Name can only contain letters and spaces';
      }
    }

    // Check to see if a correct 'Password' is entered and matched correctly
    if (updatedPassword.length > 0 && updatedPassword.length <= 6) {
      formErrors.updatedPassword = 'Password must be at least 6 characters long';
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().]).{6,}/.test(updatedPassword) && updatedPassword.length > 6
    ) {
      formErrors.updatedPassword =
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol';
    }

    if (updatedPassword !== passwordRetype) {
      formErrors.passwordRetype = 'Passwords do not match';
    }

    // Check for valid social media links
    const socialMediaErrors = {};
    const socialMediaLinks = Object.values(socialMedia);

    for (const link of socialMediaLinks) {
      if (link.trim() !== '' && !/^https:\/\/.+/i.test(link)) {
        socialMediaErrors.invalidLink = 'Social media links must start with "https://"';
        break; // Break if any invalid link is found
      }
    }

    setErrors({ ...formErrors, ...socialMediaErrors });

    // Prepare the update data excluding empty values
    const authUpdateData = {
      username,
      ...(updatedPassword.trim() && { updatedPassword }),
      ...(updateFullName.trim() && { updateFullName }),
    };

    const userUpdateData = {
      username,
      ...(profileIconColor && { profileIconColor }),
      ...(bio && { bio }),
      ...(gender && { gender }),
      interests: interests.filter((interest) => interest.trim() !== ''),
      socialMedia: {
        ...(socialMedia.twitter && { twitter: socialMedia.twitter }),
        ...(socialMedia.facebook && { facebook: socialMedia.facebook }),
        ...(socialMedia.instagram && { instagram: socialMedia.instagram }),
      },
      pokemon,
    };

    if (Object.keys(formErrors).length === 0 && Object.keys(socialMediaErrors).length === 0) {
      // No validation errors, proceed with updating data
      try {
        let authUpdated = false;
        let userUpdated = false;

        // Routes to update information to
        // Routes split due to different information in different microservices
        if (authUpdateData.updatedPassword || authUpdateData.updateFullName) {
          await axios.put('http://localhost:5001/updateauthprofile', authUpdateData);
          authUpdated = true;
        }

        if (
          userUpdateData.profileIconColor ||
          userUpdateData.bio ||
          userUpdateData.gender ||
          userUpdateData.interests.length > 0 ||
          Object.values(userUpdateData.socialMedia).some((link) => link !== '')
        ) {
          await axios.put('http://localhost:5002/updateprofile', userUpdateData);
          userUpdated = true;
        }

        // Handle success and failure of updating profile
        if (authUpdated || userUpdated) {
          toast.success('Profile Updated Successfully!');
        }

        if (!authUpdateData.updatedPassword && !authUpdateData.updateFullName && !userUpdated) {
          toast.error('No changes have been made');
        }
      } catch (error) {
        console.log(error);
        toast.error('Error Updating Profile!');
      }
    }
  }; 

  return (
    <div>
        {isLoggedIn ? (
            <PageWrapper>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <Wrapper onSubmit={handleUpdate} id="updateform">
                        <LabelGroup>
                                <Label htmlFor="username" text="Username"/>
                                <DisplayText>{username}</DisplayText>
                        </LabelGroup> 

                        <LabelGroup>
                                <Label htmlFor="email" text="Email"/>
                                <DisplayText>{email}</DisplayText>
                        </LabelGroup>

                        <LabelGroup>
                                <Label htmlFor='dateofbirth' text="Date of Birth"/>
                                <DisplayText>{dob}</DisplayText>
                        </LabelGroup>

                        <LabelGroup>
                            <Label htmlFor="gender" text="Gender" />
                            <Select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option>Select a Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            </Select>
                        </LabelGroup>

                        <LabelGroup>
                                <Label htmlFor="password" text="Update Password"/>
                                <Input 
                                    type="password"
                                    placeholder="Please enter a password"
                                    value={updatedPassword}
                                    onValueChange={setUpdatedPassword}
                                    left="2.5%"
                                />
                                {errors.updatedPassword && <Error>{errors.updatedPassword}</Error>}
                        </LabelGroup>

                        <LabelGroup>
                                <Label htmlFor="password" text="Retype Password"/>
                                <Input 
                                    type="password"
                                    placeholder="Please enter your password again"
                                    value={passwordRetype}
                                    onValueChange={setPasswordRetype}
                                    left="2.5%"
                                />
                                {errors.passwordRetype && <Error>{errors.passwordRetype}</Error>}
                        </LabelGroup>

                        <LabelGroup>
                                <Label htmlFor="fullName" text="Full Name"/>
                                <DisplayText>{currentFullname}</DisplayText>
                                <Input 
                                    type="text"
                                    placeholder="Please enter your name"

                                    onValueChange={setUpdateFullName}
                                    left="2.5%"
                                />
                                {errors.updateFullName && <Error>{errors.updateFullName}</Error>}
                        </LabelGroup>

                        <LabelGroup>
                          <Label htmlFor="twitter" text={<BsTwitter/>} />
                          <Input
                            type="text"
                            placeholder="Twitter profile URL"
                            value={socialMedia.twitter}
                            onValueChange={(value) => setSocialMedia({ ...socialMedia, twitter: value })}
                            left="2.5%"
                          />
                        </LabelGroup>

                        <LabelGroup>
                          <Label htmlFor="facebook" text={<BsFacebook/>} />
                          <Input
                            type="text"
                            placeholder="Facebook profile URL"
                            value={socialMedia.facebook}
                            onValueChange={(value) => setSocialMedia({ ...socialMedia, facebook: value })}
                            left="2.5%"
                          />
                        </LabelGroup>

                        <LabelGroup>
                          <Label htmlFor="instagram" text={<BsInstagram/>} />
                          <Input
                            type="text"
                            placeholder="Instagram profile URL"
                            value={socialMedia.instagram}
                            onValueChange={(value) => setSocialMedia({ ...socialMedia, instagram: value })}
                            left="2.5%"
                          />
                        </LabelGroup>

                        <LabelGroup>
                          <Label htmlFor="interests" text="Interests" />
                          <DisplayText>{interests}</DisplayText>
                          <TextArea
                            type="text"
                            placeholder="Your interests"
                            value={interests.join(", ")}
                            onValueChange={(value) => setInterests(value.split(",").map((item) => item.trim()))}
                            width="90%"
                          />
                        </LabelGroup>

                        <LabelGroup>
                                <Label htmlFor="bio" text="Bio" />
                                <DisplayText>{currentBio}</DisplayText>
                                <TextArea
                                    type="text"
                                    placeholder="Bio"
                                    value={bio}
                                    onValueChange={setBio}
                                    width="90%"
                                />
                        </LabelGroup>

                        <LabelGroup>
                            <Label htmlFor="profileIconColor" text="Profile Icon Color" />
                            <TwitterPicker
                            color={profileIconColor}
                            onChange={(color) => setProfileIconColor(color.hex)}
                            className={css`
                                margin-top:20px;
                                margin-left:3%;
                                padding:15px;
                                @media (max-width: 770px) {
                                    margin-bottom:15px;
                                }
                            `}
                            />
                        </LabelGroup>
                        <PokemonCard/>
                        <div className={css`
                            width:20%;
                            position:absolute;
                            bottom:-60px;
                            margin-left:2.5%;
                            @media (max-width: 770px) {
                                width:50%;
                            }
                        `}>
                            <Submit value="Update Profile" form="updateform"/>
                        </div>
                        <ToastContainer/>
                    </Wrapper>
                )}
            </PageWrapper>
        ) 
        : (navigate('../login'))}
    </div>
  )
}

export default EditProfile
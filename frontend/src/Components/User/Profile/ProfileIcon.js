import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';

function ProfileIcon({ h, w }) {
  const [profileIcon, setProfileIcon] = useState();
  const { username, userId } = useContext(AuthContext);

  useEffect(() => {
    fetchIcon();
  }, [username]);

  const fetchIcon = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchprofileicon?username=${username}`);

      if (response.status === 200) {
        setProfileIcon(response.data.profileIconColor.toLowerCase());
      } else {
        console.error('No icon found');
      }
    } catch (error) {
      console.error('No icon found here', error);
    }
  };

  return (
    <div className={`h-[${h}] w-[${w}] rounded-full text-small bg-[${profileIcon}]`}>
      be
    </div>
  );
}

export default ProfileIcon;
import React, { useState, useContext, useEffect } from 'react';
import { css } from '@emotion/css';
import { AuthContext } from '../AuthContext';
import axios from 'axios';

function ProfileIcon({ h, w }) {
  const [profileIcon, setProfileIcon] = useState();
  const { username } = useContext(AuthContext);

  useEffect(() => {
    fetchIcon();
  }, [username]);

  const fetchIcon = async () => {
    try {
      const response = await axios.get(`http://localhost:5002/fetchprofileicon?username=${username}`);

      if (response.status === 200) {
        setProfileIcon(response.data.profileIconColor);
      } else {
        console.error('No icon found');
      }
    } catch (error) {
      console.error('No icon found here', error);
    }
  };

  return (
    <div
      className={css`
        height:${h};
        width:${w};
        border-radius:100%;
        background: ${profileIcon};
        font-size:0.7em;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      `}
    >
      be
    </div>
  );
}

export default ProfileIcon;
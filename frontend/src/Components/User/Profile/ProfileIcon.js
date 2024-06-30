import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { useShowProfile } from '../../../Querys/showProfileQuery';
import { useShowUser } from '../../../Querys/showUserQuery';

function ProfileIcon({ h, w }) {
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const { userId } = useContext(AuthContext);
  const { data: profile } = useShowProfile(userId);
  const { data: user } = useShowUser(userId);

  useEffect(() => {
    if(profile != null && user != null){
      const namesArray = user.fullName.trim().split(' ');
      const initials = namesArray.map(name => name.charAt(0).toUpperCase()).join('');
      setName(initials);
      setIcon(profile.profileIconColor);
    }
  }, [profile, user]);

  console.log(icon);
  console.log(name);

  return (
    <div style={{ backgroundColor: icon }} className={`h-[${h}] w-[${w}] rounded-full text-small mr-4`}>
      {name}
    </div>
  );
}

export default ProfileIcon;
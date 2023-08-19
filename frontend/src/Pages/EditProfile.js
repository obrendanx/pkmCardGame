import React, {useContext} from 'react'
import styled from '@emotion/styled'
import { AuthContext } from '../Components/User/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Form/Input';
import Submit from '../Components/Form/Submit';
import Label from '../Components/Form/Label';

function EditProfile() {
  const {isLoggedIn, username} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
        {isLoggedIn ? (
            <div>
               <form>
                   <div>
                        <Label htmlFor="username" text="Username"/>
                        <span>{username}</span>
                   </div> 

                   <div>
                        <Label htmlFor="fullName" text="Full Name"/>
                        <span></span>
                   </div>
               </form>
            </div>
        ) 
        : (navigate('../login'))}
    </div>
  )
}

export default EditProfile
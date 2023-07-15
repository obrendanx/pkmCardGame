import {React, useContext} from 'react'
import styled from '@emotion/styled'
import { AuthContext } from '../User/AuthContext'

const Bar =styled.div`
    height:50px;
    width:7.5%;
    background:green;
    position:absolute;
    right:0;
    display:flex;
`

const Group = styled.div`
    height:150px;
    width:100%;
    position:relative;
    background:orange;
    margin:0;
    display:flex;
    flex-direction:column;
`

const SubGroup = styled.ul`
    width:100%;
    height:100px;
    position:relative;
    left:0;
    background:orange;
    list-style:none;
    margin:0;
`


const Button = styled.button`
    height:50px;
    width:100%;
    background:yellow;
    text-align:center;
    margin:0;
`

function NavRight() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Bar>
        <Group>
                <Button>username</Button>
                <SubGroup>
                    <Button>Edit Profile</Button>
                    <Button onClick={handleLogout()}>Logout</Button>
                </SubGroup>
        </Group>
    </Bar>
  )
}

export default NavRight
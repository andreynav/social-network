import React from "react";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";

export default function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarItem>
                <NavLink to='/profile' active>Profile</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/massages' active>Dialogs</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/users' active>Users</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/news' active>News</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/music' active>Music</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/settings' active>Settings</NavLink>
            </NavbarItem>
        </NavbarWrapper>
    );
}

const NavbarWrapper = styled.nav`
  display: grid;
  grid-area: nav;
  grid-column: 1;
  margin: 20px 10px 0 20px;
  padding: 20px;
  border-radius: 8px;
  align-self: start;
  background-color: ${props => props.theme.bgColorSecondary};
`

const NavbarItem = styled.div`
  margin: 5px 0;
  
  & a {
    font-size: 20px;
    color: ${props => props.theme.colorPrimary};
    text-decoration: none;
  }

  & a.active {
    color: ${props => props.theme.colorSecondary};
  }
`

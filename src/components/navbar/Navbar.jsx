import React from "react";
import {NavLink} from 'react-router-dom'
import style from './Navbar.module.css'
import {setActive} from "../../utils/utills";
import styled from "styled-components";

export default function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarItem>
                <NavLink to='/profile' className={setActive(style.activeLink)}>Profile</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/massages' className={setActive(style.activeLink)}>Dialogs</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/users' className={setActive(style.activeLink)}>Users</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/news' className={setActive(style.activeLink)}>News</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/music' className={setActive(style.activeLink)}>Music</NavLink>
            </NavbarItem>
            <NavbarItem>
                <NavLink to='/settings' className={setActive(style.activeLink)}>Settings</NavLink>
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
    //color: #000000e6;
    //  color: ${props => props.theme.textColorSecondary};
    text-decoration: none;
  }

  // & a.activeLink {
  //   color: ${props => props.theme.textColorSecondary};
  // }
`

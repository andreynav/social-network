import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
    return (
        <NotFoundWrapper>
            <p>404 page not found</p>
            <p>Go <NavLink to='/profile'>Profile</NavLink></p>
        </NotFoundWrapper>
    );
}

const NotFoundWrapper = styled.div`
  background-color: ${props => props.theme.bgColorSecondary};
  color: ${props => props.theme.colorPrimary};

  & a {
    color: ${props => props.theme.colorPrimary};
    text-decoration: none;
  }

  & a.active {
    color: ${props => props.theme.colorSecondary};
  }
`
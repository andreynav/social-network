import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
    return (
        <NotFoundWrapper>
            <div>404 page not found</div>
            <div>Go to <NavLink to='/profile'>Profile</NavLink></div>
        </NotFoundWrapper>
    );
}

const NotFoundWrapper = styled.div`
  display: grid;
  grid-template-rows: 24px 24px;
  justify-content: center;
  background-color: ${props => props.theme.bgColorSecondary};
  color: ${props => props.theme.colorPrimary};
  
  & div:first-child {
    font-weight: bold;
  }
  
  & a {
    color: ${props => props.theme.colorSecondary};
    text-decoration: none;
  }

  & a.active {
    color: ${props => props.theme.colorSecondary};
  }
`
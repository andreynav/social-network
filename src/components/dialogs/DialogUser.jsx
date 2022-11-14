import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function DialogUser({ userName, userId }) {
    return (
        <DialogUserWrapper>
            <NavLink to={`/massages/${userId}`} active>{userName}</NavLink>
        </DialogUserWrapper>
    );
}

const DialogUserWrapper = styled.div`
  margin: 5px 0;
  
  &  a {
    color: ${props => props.theme.colorPrimary};
    text-decoration: none;
  }
  
  & a.active {
    color: ${props => props.theme.colorSecondary};
  }
`
import React from "react";
import { avatar } from "../../assets";
import styled from "styled-components";

export default function DialogMessage({ message }) {
    return (
        <MessageWrapper>
            <UserAvatar>
                <img src={avatar} alt='avatar'/>
            </UserAvatar>
            <Message>{message}</Message>
        </MessageWrapper>
    );
}

const MessageWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  margin-bottom: 10px;
`

const UserAvatar = styled.div`
  border-radius: 35px;
  height: 70px;
  width: 70px;
  align-self: start;
  align-items: start;

  img {
    height: 70px;
    width: 70px;
  }
`

const Message = styled.div`
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 5px;
`
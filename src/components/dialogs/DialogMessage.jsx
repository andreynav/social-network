import React from "react";
import styled from "styled-components";
import {Avatar} from "../common/Avatar/Avatar";

export default function DialogMessage({ message }) {
    return (
        <MessageWrapper>
            <Avatar />
            <Message>{message}</Message>
        </MessageWrapper>
    )
}

const MessageWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  margin-bottom: 10px;
`

const Message = styled.div`
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 5px;
`
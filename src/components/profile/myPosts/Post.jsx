import React from "react";
import { like } from "../../../assets"
import styled from "styled-components";
import {Avatar} from "../../index";

export default function Post({message, likeCount}) {
    return (
        <PostWrapper>
            <Avatar />
            <PostSection>{message}</PostSection>
            <PostLike>
                <img src={like} alt='like'/>
                <div>{likeCount}</div>
            </PostLike>
        </PostWrapper>
    );
}

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 70px;
  grid-template-rows: minmax(100px, auto) auto;
  margin: 20px 0;
`

const PostSection = styled.div`
  display: grid;
  grid-column: 2/4;
  grid-row: 1/2;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 5px;
`

const PostLike = styled.div`
  display: grid;
  grid-column: 3/4;
  grid-row: 2/3;
  justify-self: end;
  margin: 5px 0;
  color: ${props => props.theme.colorLike};
  font-size: 14px;

  & img {
    grid-row: 1/1;
    height: 14px;
    width: 14px;
    align-self: center;
  }

  & div {
    grid-row: 1/1;
    padding: 0 0 0 3px;
    color: ${props => props.theme.colorPrimary};
  }
`


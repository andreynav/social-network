import React from "react";
import { avatar, like } from "../../../assets"
import styled from "styled-components";

export default function Post({message, likeCount}) {
    return (
        <PostWrapper>
            <Avatar>
                <img src={avatar} alt='avatar'/>
            </Avatar>
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
  margin: 20px 0;
  grid-template-columns: 80px 1fr 70px;
  grid-template-rows: minmax(100px, auto) auto;
  grid-template-areas:
        "avatar myPost myPost"
        ". . myPostLike";
`

const Avatar = styled.div`
  grid-area: avatar;
  border-radius: 35px;
  height: 70px;
  width: 70px;
  align-self: start;
  align-items: start;

  & img {
    height: 70px;
    width: 70px;
  }
`

const PostSection = styled.div`
  grid-area: myPost;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 5px;
`

const PostLike = styled.div`
  grid-area: myPostLike;
  justify-self: end;
  margin: 5px 0;
  color: ${props => props.theme.colorLike};
  font-size: 14px;
  display: grid;

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


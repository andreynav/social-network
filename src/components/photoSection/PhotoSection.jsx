import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {avatar} from "../../assets/";
import {Button} from "../common/button/Button";

export const PhotoSection = (props) => {
    const srcData = props.photos.small !== null ? props.photos.small : avatar;

    return (
        <StyledUserSection {...props}>
            <ImageWrapper {...props}>
                {
                    props.isOwner
                        ? <img src={srcData} alt={`${props.name}`}/>
                        : (
                            <NavLink to={`/profile/${props.id}`}>
                                <img src={srcData} alt={`${props.name}`}/>
                            </NavLink>
                        )
                }

            </ImageWrapper>
            <ButtonWrapper {...props}>
                {
                    props.isOwner
                        ? (
                            <FileInput type="file"
                                       title=" "
                                       name="avatar"
                                       onChange={props.onChange}/>
                        ) : (
                            <Button id={props.id}
                                    followInProgress={props.followInProgress}
                                    followed={props.followed}
                                    toggleFollow={props.toggleFollow}
                                    onClick={() => props.toggleFollow(props.id)}
                                    disabled={props.followInProgress.some(userId => userId === props.id)}
                                    height={'26px'}
                                    minWidth={'50%'}
                                    width={'70px'}
                                    fontSize='10px'>
                                {props.followed ? "Follow" : "Unfollow"}
                            </Button>
                        )
                }
            </ButtonWrapper>
        </StyledUserSection>
    )
}

const StyledUserSection = styled.div`
  display: grid;
  grid-template-areas:
    "ImageWrapper"
    "ButtonWrapper";
  grid-gap: 10px;
  align-self: start;
  justify-self: start;

  & img {
    border: 2px solid #ffc300;
    height: ${({height = '70'}) => height}px;
    width: ${({width = '70'}) => width}px;
    border-radius: ${({brRadius = '35'}) => brRadius}px;

  }
`

const ImageWrapper = styled.div`
  display: grid;
  grid-area: ImageWrapper;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-area: ButtonWrapper;
`

const FileInput = styled.input`
  display: grid;

  &::file-selector-button {
    background-color: ${({bgColor = 'transparent'}) => bgColor};
    border: 2px solid #ffc300;
    border-radius: 5px;
    color: black;
    font-size: 10px;
    outline: none;
    padding: 10px;
    text-transform: uppercase;
    transition: all 1s ease;
    cursor: ${({cursor = 'pointer'}) => cursor};
    width: ${({width = 100}) => width}px;
  }

  &[type='file'] {
    color: transparent
  }

  &:hover {
    opacity: ${({opacity = 0.8}) => opacity};
    transition: 0.51s;
  }
`

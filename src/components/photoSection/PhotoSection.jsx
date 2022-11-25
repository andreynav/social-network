import React from "react";
import styled from "styled-components";
import {NavLink, useParams} from "react-router-dom";
import {avatar} from "../../assets/";
import {Button} from "../common/button/Button";
import {useTranslation} from "react-i18next";

export const PhotoSection = (props) => {
    const params = useParams()
    const isNotUserProfilePage = !params.id
    const srcData = props.photos.small !== null ? props.photos.small : avatar
    const {t} = useTranslation()

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
                            isNotUserProfilePage &&
                            <Button id={props?.id}
                                    followInProgress={props?.followInProgress}
                                    followed={props?.followed}
                                    toggleFollow={props?.toggleFollow}
                                    onClick={() => props?.toggleFollow(props?.id)}
                                    disabled={props?.followInProgress?.some(userId => userId === props?.id)}
                                    height='26px'
                                    minWidth='50%'
                                    width='70px'
                                    fontSize='9px'>
                                {props?.followed ? t("users.follow") : t("users.unfollow")}
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
    border: 1px solid ${props => props.theme.borderSecondary};
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
    display: grid;
    background-color: ${({bgColor = 'transparent'}) => bgColor};
    border: 1px solid ${props => props.theme.borderPrimary};
    border-radius: 5px;
    color: ${props => props.theme.colorPrimary};;
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

  &::file-selector-button:hover {
    opacity: ${({opacity = 0.8}) => opacity};
    color: ${props => props.theme.colorSecondary};
    border-color: ${props => props.theme.borderSecondary};
    transition: 0.51s;
  }
`

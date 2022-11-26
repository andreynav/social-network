import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {Button} from "../common/button/Button";
import {useTranslation} from "react-i18next";
import {Avatar} from "../common/Avatar/Avatar";

export const PhotoSection = (props) => {
    const {photos, name, id, isOwner, onChange, followInProgress, followed, toggleFollow, isNavLink} = props
    const params = useParams()
    const isNotUserProfilePage = !params.id
    const {t} = useTranslation()

    return (
        <StyledUserSection {...props}>
            <Avatar src={photos?.small} alt={name} id={id} isOwner={isOwner} isNavLink={isNavLink} />
            <ButtonWrapper {...props}>
                {
                    isOwner
                        ? (
                            <FileInput type="file"
                                       title=" "
                                       name="avatar"
                                       onChange={onChange}/>
                        ) : (
                            isNotUserProfilePage &&
                            <Button id={id}
                                    followInProgress={followInProgress}
                                    followed={followed}
                                    toggleFollow={toggleFollow}
                                    onClick={() => toggleFollow(id)}
                                    disabled={followInProgress?.some(userId => userId === id)}
                                    height='26px'
                                    minWidth='50%'
                                    width='70px'
                                    fontSize='9px'>
                                {followed ? t("users.follow") : t("users.unfollow")}
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

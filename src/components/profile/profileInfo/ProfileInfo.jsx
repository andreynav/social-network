import React, {memo, useState, useEffect} from "react";
import {Loader, PhotoSection, ProfileInfoStatus, FormProfileInfo, Button, UserInfoItem} from "../../index";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

export const ProfileInfo = memo((props) => {
    const {
        profileInfo,
        profileStatus,
        updateProfileStatus,
        currentUserId,
        userId,
        onSavePhoto,
        onSaveUpdateProfile,
        profileInfoUpdateError,
        updateProfileInfo
    } = props;

    const isOwner = currentUserId === userId

    const [editMode, setEditMode] = useState(false)

    const {t} = useTranslation()

    const {
        register,
        handleSubmit,
        formState: {errors},
        setError,
        clearErrors
    } = useForm();

    useEffect(() => {
        profileInfoUpdateError && setError('server', {message: profileInfoUpdateError});
    }, [profileInfoUpdateError]);

    if (!profileInfo) return <Loader/>

    const profileData = [
        {itemName: t("profile.fullName"), itemData: profileInfo.fullName, inputName: 'fullName', itemType: 'text'},
        {itemName: t("profile.aboutMe"), itemData: profileInfo.aboutMe, inputName: 'aboutMe', itemType: 'text'},
        {
            itemName: t("profile.lookingForAJobStatus"),
            itemData: profileInfo.lookingForAJob,
            inputName: 'lookingForAJob',
            itemType: 'checkbox'
        },
        {
            itemName: t("profile.lookingForAJobDescription"),
            itemData: profileInfo.lookingForAJobDescription,
            inputName: 'lookingForAJobDescription',
            itemType: 'text'
        },
        {itemName: t("profile.website"), itemData: profileInfo.contacts?.website, inputName: 'website', itemType: 'text'},
        {itemName: t("profile.facebook"), itemData: profileInfo.contacts?.facebook, inputName: 'facebook', itemType: 'text'},
        {itemName: t("profile.vk"), itemData: profileInfo.contacts?.vk, inputName: 'vk', itemType: 'text'},
        {itemName: t("profile.instagram"), itemData: profileInfo.contacts?.instagram, inputName: 'instagram', itemType: 'text'},
        {itemName: t("profile.youtube"), itemData: profileInfo.contacts?.youtube, inputName: 'youtube', itemType: 'text'},
        {itemName: t("profile.github"), itemData: profileInfo.contacts?.github, inputName: 'github', itemType: 'text'},
        {itemName: t("profile.mainLink"), itemData: profileInfo.contacts?.mainLink, inputName: 'mainLink', itemType: 'text'},
    ]

    const profileItems = profileData.map((item, index) => <UserInfoItem key={index}
                                                                           itemData={item.itemData}
                                                                           itemName={item.itemName}
                                                                           itemType={item.itemType} />)

    const onEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    }

    const onFormSubmit = (data) => {
        updateProfileInfo({ // dispatch?
            userId: userId,
            fullName: data.fullName,
            aboutMe: data.aboutMe,
            lookingForAJob: data.lookingForAJob,
            lookingForAJobDescription: data.lookingForAJobDescription,
            contacts: {
                facebook: data.facebook,
                website: data.website,
                vk: data.vk,
                twitter: data.twitter,
                instagram: data.instagram,
                youtube: data.youtube,
                github: data.github,
                mainLink: data.facebook
            }
        }).then((response) => { // refactor
            if (!response.error)  {
                setEditMode(prevEditMode => !prevEditMode);
            }
        })
    }

    const onClearErrors = () => {
        errors.server && clearErrors()
    }

    return (
        <ProfileInfoWrapper>
            <PhotoBackground></PhotoBackground>
            <UserDataWrapper>
                <PhotoSection isOwner={isOwner}
                              height='100'
                              width='100'
                              brRadius='50'
                              photos={profileInfo.photos}
                              name={profileInfo.fullName}
                              onChange={onSavePhoto} />
                <UserInfo>
                    <ProfileInfoStatus itemData={profileStatus || " - "}
                                       itemName={t("profile.status")}
                                       isPointer
                                       updateProfileStatus={updateProfileStatus}
                                       currentUserId={currentUserId}
                                       userId={userId} />
                    {
                        editMode ?
                            <FormProfileInfo onSubmit={handleSubmit(onFormSubmit)}
                                             register={register}
                                             registerCheckbox={register("lookingForAJob")}
                                             errors={errors}
                                             onClearErrors={onClearErrors}
                                             profileData={profileData}
                            /> :
                            <div>
                                {profileItems}
                                {
                                    isOwner &&
                                    <Button fontSize='12px'
                                            onClick={onEditMode}
                                            height='30px'>
                                        {t("profile.editProfileBtn")}
                                    </Button>
                                }

                            </div>
                    }
                </UserInfo>
            </UserDataWrapper>
        </ProfileInfoWrapper>
    );
})

const ProfileInfoWrapper = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
`

const PhotoBackground = styled.div`
  background-color: ${props => props.bgColor || props.theme.borderSecondary};
  border-radius: 8px 8px 0 0;
`

const UserDataWrapper = styled.div`
  display: grid;
  margin: 20px 0 10px 0;
  grid-template-columns: 120px 1fr;
`
const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderPrimary};
  border-radius: 8px;
  padding: 10px;
  grid-row-gap: 8px;
`
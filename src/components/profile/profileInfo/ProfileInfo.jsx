import React, {memo, useState} from "react";
import {Loader, PhotoSection, ProfileInfoItem, FormProfileInfo, Button} from "../../index";
import styled from "styled-components";
import {useForm} from "react-hook-form";

export const ProfileInfo = memo((props) => {
    const {
        profileInfo,
        profileStatus,
        updateProfileStatus,
        currentUserId,
        userId,
        onSavePhoto,
        onSaveUpdateProfile
    } = props;

    const [editMode, setEditMode] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    if (!profileInfo) return <Loader/>

    const profileData = [
        {itemName: "Full name", itemData: profileInfo.fullName, inputName: 'fullName'},
        {itemName: "About me", itemData: profileInfo.aboutMe, inputName: 'aboutMe'},
        {
            itemName: "Looking for a job status",
            itemData: profileInfo.lookingForAJob ? 'Yes' : 'No',
            inputName: 'lookingForAJob'
        },
        {
            itemName: "Looking for a job description",
            itemData: profileInfo.lookingForAJobDescription,
            inputName: 'lookingForAJobDescription'
        },
        {itemName: "Website", itemData: profileInfo.contacts?.website, inputName: 'website'},
        {itemName: "Facebook", itemData: profileInfo.contacts?.facebook, inputName: 'facebook'},
        {itemName: "Vk", itemData: profileInfo.contacts?.vk, inputName: 'vk'},
        {itemName: "Instagram", itemData: profileInfo.contacts?.instagram, inputName: 'instagram'},
        {itemName: "Youtube", itemData: profileInfo.contacts?.youtube, inputName: 'youtube'},
        {itemName: "Github", itemData: profileInfo.contacts?.github, inputName: 'github'},
        {itemName: "MainLink", itemData: profileInfo.contacts?.mainLink, inputName: 'mainLink'},
    ]

    const profileItems = profileData.map((item, index) => <ProfileInfoItem key={index}
                                                                           itemData={item.itemData || " - "}
                                                                           itemName={item.itemName}
                                                                           currentUserId={currentUserId}
                                                                           userId={userId}/>);

    const onEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    }

    const onFormSubmit = (data) => {
        //console.log(data)
        onSaveUpdateProfile({
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
        })
        setEditMode(prevEditMode => !prevEditMode);
    }

    return (
        <ProfileInfoWrapper>
            <PhotoBackground></PhotoBackground>
            <UserDataWrapper>
                <PhotoSection isOwner
                              height='100'
                              width='100'
                              brRadius='50'
                              photos={profileInfo.photos}
                              name={profileInfo.fullName}
                              onChange={onSavePhoto}/>
                <UserInfo>
                    <ProfileInfoItem itemData={profileStatus || " - "}
                                     itemName={"My status"}
                                     isPointer
                                     updateProfileStatus={updateProfileStatus}
                                     currentUserId={currentUserId}
                                     userId={userId}/>
                    {
                        editMode ?
                            <FormProfileInfo onSubmit={handleSubmit(onFormSubmit)}
                                             register={register}
                                             errors={errors}
                                             profileData={profileData}
                            /> :
                            <div>
                                {profileItems}
                                <Button fontSize='14px' onClick={onEditMode}>Edit Profile</Button>
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
  background-color: #ffc300;
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
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  grid-row-gap: 8px;
`
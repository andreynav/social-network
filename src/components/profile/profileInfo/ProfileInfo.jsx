import React, {memo} from "react";
import {Loader, PhotoSection, ProfileInfoItem} from "../../index";
import styled from "styled-components";

export const ProfileInfo = memo((props) => {
    const {profileInfo, profileStatus, updateProfileStatus, currentUserId, userId, onSavePhoto} = props;

    if (!profileInfo) return <Loader/>

    const {aboutMe, photos, fullName, lookingForAJob, lookingForAJobDescription, contacts} = profileInfo;

    const profileData = [
        {itemName: "Full name", itemData: fullName},
        {itemName: "About me", itemData: aboutMe},
        {itemName: "Looking for a job status", itemData: lookingForAJob ? 'Yes' : 'No'},
        {itemName: "Looking for a job description", itemData: lookingForAJobDescription},
        {itemName: "Website", itemData: contacts?.website},
        {itemName: "Facebook", itemData: contacts?.facebook},
        {itemName: "Vk", itemData: contacts?.vk},
        {itemName: "Twitter", itemData: contacts?.twitter},
        {itemName: "Instagram", itemData: contacts?.instagram},
        {itemName: "Youtube", itemData: contacts?.youtube},
        {itemName: "Github", itemData: contacts?.github},
        {itemName: "MainLink", itemData: contacts?.mainLink},
    ]

    const profileItems = profileData.map((item, index) => <ProfileInfoItem key={index}
                                                                           itemData={item.itemData || " - "}
                                                                           itemName={item.itemName}
                                                                           currentUserId={currentUserId}
                                                                           userId={userId}/>);

    return (
        <ProfileInfoWrapper>
            <PhotoBackground></PhotoBackground>
            <UserDataWrapper>
                <PhotoSection isOwner
                              height='100'
                              width='100'
                              brRadius='50'
                              photos={photos}
                              name={fullName}
                              onChange={onSavePhoto} />
                <UserInfo>
                    <ProfileInfoItem itemData={profileStatus || " - "}
                                     itemName={"My status"}
                                     isPointer
                                     updateProfileStatus={updateProfileStatus}
                                     currentUserId={currentUserId}
                                     userId={userId} />
                    {profileItems}
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
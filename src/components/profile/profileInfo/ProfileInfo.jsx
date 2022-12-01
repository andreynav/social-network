import React, {memo, useState, useEffect} from "react";
import {Loader, PhotoSection, ProfileInfoStatus, FormProfileInfo, Button, UserInfoItem} from "../../index";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {getProfileSchemeData} from "../../../utils/getProfileSchemeData";
import {getProfileInfoSchemeData} from "../../../utils/getProfileInfoSchemeData";

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

    const profileData = getProfileSchemeData(profileInfo).map(item => ({...item, itemName: t(item["itemName"])}))

    const profileItems = profileData.map((item, index) => <UserInfoItem key={index}
                                                                        itemData={item.itemData}
                                                                        itemName={item.itemName}
                                                                        itemType={item.itemType}/>)

    const onEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    }

    const onFormSubmit = (data) => {
        const updatedInfo = getProfileInfoSchemeData(data)
        updateProfileInfo(updatedInfo).then((response) => { // dispatch? // refactor then
            if (!response.error) {
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
                              height={100}
                              width={100}
                              brRadius={50}
                              photos={profileInfo.photos}
                              name={profileInfo.fullName}
                              onChange={onSavePhoto}/>
                <UserInfo>
                    <ProfileInfoStatus itemData={profileStatus || " - "}
                                       itemName={t("profile.status")}
                                       isPointer
                                       updateProfileStatus={updateProfileStatus}
                                       currentUserId={currentUserId}
                                       userId={userId}/>
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
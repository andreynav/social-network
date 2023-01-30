import { ProfileInfoAPI } from 'api/api'
import { Loader, MyPostsContainer, ProfileInfo } from 'components/index'
import { ChangeEvent } from 'react'
import styled from 'styled-components'

import { ProfileContainerT } from './ProfileContainer'

export type ProfileT = {
  onSavePhoto: (e: ChangeEvent<HTMLInputElement>) => void
  updateProfileInfo: (profile: ProfileInfoAPI) => void
} & Partial<ProfileContainerT>

export const Profile = (props: ProfileT) => {
  const {
    profileInfo,
    profileStatus,
    updateProfileStatus,
    currentUserId,
    userId,
    onSavePhoto,
    profileInfoUpdateError,
    updateProfileInfo
  } = props

  if (!profileInfo) return <Loader />

  return (
    <ProfileWrapper>
      <ProfileInfo
        profileInfo={profileInfo}
        profileStatus={profileStatus}
        updateProfileStatus={updateProfileStatus}
        currentUserId={currentUserId}
        userId={userId}
        onSavePhoto={onSavePhoto}
        profileInfoUpdateError={profileInfoUpdateError}
        updateProfileInfo={updateProfileInfo}
      />
      <MyPostsContainer />
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  overflow: visible auto;
`

import { compose } from '@reduxjs/toolkit'
import { ProfileInfoAPI } from 'api/api'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { withRouter } from 'hoc/withRouter'
import { useAppDispatch } from 'hook/hooks'
import { ChangeEvent, FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  getProfileInfo,
  getProfileStatus,
  selectProfileInfo,
  selectProfileInfoError,
  selectProfileInfoStatus,
  selectProfileInfoUpdateError,
  selectProfileInfoUpdateStatus,
  selectProfileStatus,
  updateProfileInfo,
  updateProfilePhoto,
  updateProfileStatus
} from 'store/profileReducer'
import { RootState } from 'store/store'

import { Profile } from './Profile'

export type ProfileContainerT = {
  currentUserId: number
  userId: number
  getProfileInfo: (userId: number) => void
  getProfileStatus: (userId: number) => void
  profileInfo: ProfileInfoAPI
  profileStatus: string
  updateProfileStatus: (status: string | boolean) => void
  profileInfoUpdateError: string
}

const ProfileContainer = (props: ProfileContainerT) => {
  const { currentUserId, userId, getProfileInfo, getProfileStatus } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    const id = currentUserId || userId
    getProfileInfo(id)
    getProfileStatus(id)
  }, [currentUserId, userId, getProfileInfo, getProfileStatus])

  const onSavePhoto = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      dispatch(updateProfilePhoto(file))
    }
  }

  return (
    <Profile
      onSavePhoto={onSavePhoto}
      updateProfileInfo={updateProfileInfo}
      {...props}
    />
  )
}

const mapStateToProps = (state: RootState) => ({
  profileInfo: selectProfileInfo(state),
  profileInfoStatus: selectProfileInfoStatus(state),
  profileInfoError: selectProfileInfoError(state),
  profileStatus: selectProfileStatus(state),
  profileInfoUpdateStatus: selectProfileInfoUpdateStatus(state),
  profileInfoUpdateError: selectProfileInfoUpdateError(state)
})

const ProfileContainerWithProps = compose(
  connect(mapStateToProps, {
    getProfileInfo,
    getProfileStatus,
    updateProfileStatus,
    updateProfilePhoto,
    updateProfileInfo
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer)

export default ProfileContainerWithProps as FunctionComponent

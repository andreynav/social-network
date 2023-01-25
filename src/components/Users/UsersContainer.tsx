import { compose } from '@reduxjs/toolkit'
import { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'

import { PhotosT } from '../../api/api'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { RootState } from '../../store/store'
import {
	GetUsersT,
	ToggleFollowUnfollowT,
	UserT,
	getUsers,
	selectCurrentPage,
	selectError,
	selectFollowInProgress,
	selectIsFetching,
	selectTotalCount,
	selectUsers,
	selectUsersOnPage,
	toggleFollowUnfollow,
	userActions
} from '../../store/usersReducer'
import { Users } from '../index'

type UsersContainerT = {
	totalCount: number
	usersOnPage: number
	isFetching: boolean
	followInProgress?: Array<number>
	users: Array<UserT & { photos: Partial<PhotosT> }>
	setCurrentPage: (page: number) => void
	getUsers: ({ usersOnPage, page }: GetUsersT) => void
	toggleFollowUnfollow: ({ user, id }: ToggleFollowUnfollowT) => void
	currentPage: number
}

const UsersContainer = (props: UsersContainerT) => {
	const {
		setCurrentPage,
		getUsers,
		usersOnPage,
		users,
		toggleFollowUnfollow,
		totalCount,
		isFetching,
		followInProgress
	} = props

	const selectPage = (page: number) => {
		setCurrentPage(page)
		getUsers({ usersOnPage: usersOnPage, page })
	}

	const onChangeFollow = (id: number) => {
		const currentUser = users.find((user) => user.id === id)
		if (currentUser) {
			toggleFollowUnfollow({ user: currentUser, id })
		}
	}

	useEffect(() => {
		setCurrentPage(1)
		getUsers({ usersOnPage: usersOnPage, page: 1 })
	}, [setCurrentPage, getUsers, usersOnPage])

	return (
		<Users
			totalCount={totalCount}
			usersOnPage={usersOnPage}
			users={users}
			selectPage={selectPage}
			onChangeToggle={onChangeFollow}
			isFetching={isFetching}
			followInProgress={followInProgress}
		/>
	)
}

const mapStateToProps = (state: RootState) => ({
	users: selectUsers(state),
	currentPage: selectCurrentPage(state),
	totalCount: selectTotalCount(state),
	usersOnPage: selectUsersOnPage(state),
	isFetching: selectIsFetching(state),
	followInProgress: selectFollowInProgress(state),
	error: selectError(state)
})

const setCurrentPage = userActions.setCurrentPageAC

const UsersContainerWithProps = compose(
	connect(mapStateToProps, {
		setCurrentPage,
		getUsers,
		toggleFollowUnfollow
	}),
	withAuthRedirect
)(UsersContainer)

export default UsersContainerWithProps as FunctionComponent

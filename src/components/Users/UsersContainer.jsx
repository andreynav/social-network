import { compose } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
	getUsers,
	selectCurrentPage,
	selectError,
	selectFollowInProgress,
	selectIsFetching,
	selectTotalCount,
	selectUsers,
	selectUsersOnPage,
	setCurrentPageAC,
	toggleFollowUnfollow
} from '../../store/usersReducer'
import { Users } from '../index'

const UsersContainer = (props) => {
	const {
		setCurrentPageAC,
		getUsers,
		usersOnPage,
		users,
		toggleFollowUnfollow,
		totalCount,
		currentPage,
		isFetching,
		followInProgress
	} = props

	const selectPage = (page) => {
		setCurrentPageAC({ page })
		getUsers({ usersOnPage: usersOnPage, page })
	}

	const onChangeFollow = (id) => {
		let currentUser = users.find((user) => user.id === id)
		toggleFollowUnfollow({ user: currentUser, id })
	}

	useEffect(() => {
		setCurrentPageAC({ page: 1 })
		getUsers({ usersOnPage: usersOnPage, page: 1 })
	}, [])

	return (
		<Users
			totalCount={totalCount}
			usersOnPage={usersOnPage}
			currentPage={currentPage}
			users={users}
			selectPage={selectPage}
			onChangeToggle={onChangeFollow}
			isFetching={isFetching}
			followInProgress={followInProgress}
		/>
	)
}

let mapStateToProps = (state) => ({
	users: selectUsers(state),
	currentPage: selectCurrentPage(state),
	totalCount: selectTotalCount(state),
	usersOnPage: selectUsersOnPage(state),
	isFetching: selectIsFetching(state),
	followInProgress: selectFollowInProgress(state),
	error: selectError(state)
})

export default compose(
	connect(mapStateToProps, {
		setCurrentPageAC,
		getUsers,
		toggleFollowUnfollow
	}),
	withAuthRedirect
)(UsersContainer)

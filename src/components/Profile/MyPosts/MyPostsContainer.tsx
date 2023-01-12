import React from 'react'
import { connect } from 'react-redux'

import { addNewPostAC, selectMyPosts } from '../../../store/profileReducer'
import { RootState } from '../../../store/store'
import { MyPosts } from '../../index'

const mapStateToProps = (state: RootState) => ({
	myPosts: selectMyPosts(state)
})

const MyPostsContainer = connect(mapStateToProps, { addNewPostAC })(MyPosts)

export default MyPostsContainer

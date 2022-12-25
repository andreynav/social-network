import React from 'react'
import { connect } from 'react-redux'

import { addNewPostAC, selectMyPosts } from '../../../store/profileReducer'
import { MyPosts } from '../../index'

let mapStateToProps = (state) => ({
	myPosts: selectMyPosts(state)
})

const MyPostsContainer = connect(mapStateToProps, { addNewPostAC })(MyPosts)

export default MyPostsContainer

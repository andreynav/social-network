import { connect } from 'react-redux'
import { profileActions, selectMyPosts } from 'store/profileReducer'
import { RootState } from 'store/store'

import { MyPosts } from './MyPosts'

const mapStateToProps = (state: RootState) => ({
	myPosts: selectMyPosts(state)
})

const addNewPost = profileActions.addNewPostAC

const MyPostsContainer = connect(mapStateToProps, { addNewPost })(MyPosts)

export default MyPostsContainer

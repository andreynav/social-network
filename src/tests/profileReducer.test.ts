import { profileActions, profileReducers } from 'store/profileReducer'

const stateProfileReducer = {
	myPosts: [
		{ id: 1, message: 'Hey, how are you?', like: 105 },
		{ id: 2, message: 'You shell not pass, fellow!', like: 304 },
		{ id: 3, message: "It's my life", like: 118 },
		{ id: 4, message: "Nice day, let's learn React", like: 257 }
	],
	profileInfo: null,
	profileStatus: null,
	profileInfoStatus: null,
	profileInfoError: null,
	profileInfoUpdateStatus: null,
	profileInfoUpdateError: null
}

const infoData = {
	aboutMe: null,
	fullName: 'AndyN',
	userId: 26100,
	lookingForAJob: false,
	lookingForAJobDescription: null,
	contacts: {
		facebook: null,
		website: null,
		vk: null,
		twitter: null,
		instagram: null,
		youtube: null,
		github: null,
		mainLink: null
	},
	photos: {
		small: null,
		large: null
	}
}

const newPostAction = profileActions.addNewPostAC('New post test message')
const profileStatus = profileActions.setProfileStatusAC('Test status')

describe('Profile reducer tests', () => {
	test('New post should be added', () => {
		const newState = profileReducers(stateProfileReducer, newPostAction)
		expect(newState.myPosts.length).toBe(5)
	})

	test('New post text message should be correct', () => {
		const newState = profileReducers(stateProfileReducer, newPostAction)
		expect(newState.myPosts[4]!.message).toEqual('New post test message')
	})

	test('Profile status should not be null', () => {
		const newState = profileReducers(stateProfileReducer, profileStatus)
		expect(newState.profileStatus).not.toEqual(null)
	})

	test('Profile status text should be correct', () => {
		const newState = profileReducers(stateProfileReducer, profileStatus)
		expect(newState.profileStatus).toEqual('Test status')
	})

	test('Profile info should be added', () => {
		const profileInfo = profileActions.setProfileInfoAC(infoData)
		const newState = profileReducers(stateProfileReducer, profileInfo)
		expect(newState.profileInfo).not.toEqual(null)
	})
})

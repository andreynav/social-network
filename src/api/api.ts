import axios from 'axios'

import { AuthDataT } from '../store/authReducer'
import { PhotosT, ProfileInfoT } from '../store/profileReducer'
import { UserT } from '../store/usersReducer'

const samuraiApi = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'b055b506-f05b-42fe-928f-891da5e27dea'
	}
})

export enum ResultCodes {
	SUCCESS = 0,
	ERROR = 1,
	CAPTCHA_REQUIRED = 10
}

export type GetUsersAPI = {
	error: null | string
	items: Array<UserT>
	totalCount: number
}

export type FollowUserUnfollowUserUserAPI = {
	data: object
	messages: Array<string>
	resultCode: ResultCodes
}

export type MeAPI = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: ResultCodes
	messages: Array<string>
}

export type LoginLogoutAPI = {
	data: object
	messages: Array<string>
	resultCode: ResultCodes
}

export type GetProfileInfoAPI = {
	aboutMe: string
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: {
		facebook: string
		website: string
		vk: string
		twitter: string
		instagram: string
		youtube: string
		github: string
		mainLink: string
	}
	photos: PhotosT
}

export type UpdateProfileStatusAPI = {
	data: object
	messages: Array<string>
	resultCode: ResultCodes
}

export type UpdateProfilePhotoAPI = {
	data: {
		photos: PhotosT
	}
	messages: Array<string>
	resultCode: ResultCodes
}

export type UpdateProfileInfoAPI = {
	data: object
	messages: Array<string>
	resultCode: ResultCodes
}

export type GetCaptchaURL = {
	url: string
}

export const userAPI = {
	getUsers: (userOnPage: number, pageNumber = 1) => {
		return samuraiApi
			.get<GetUsersAPI>(`users?count=${userOnPage}&page=${pageNumber}`)
			.then((response) => response.data)
	},
	followUser: (id: number) => {
		return samuraiApi
			.post<FollowUserUnfollowUserUserAPI>(`follow/${id}`)
			.then((response) => response.data)
	},
	unfollowUser: (id: number) => {
		return samuraiApi
			.delete<FollowUserUnfollowUserUserAPI>(`follow/${id}`)
			.then((response) => response.data)
	}
}

export const authAPI = {
	me: () => {
		return samuraiApi.get<MeAPI>(`auth/me`).then((response) => response.data)
	},
	login: (data: AuthDataT) => {
		return samuraiApi
			.post<LoginLogoutAPI>(`/auth/login`, {
				email: data.email,
				password: data.password,
				rememberMe: data.rememberMe || false,
				captcha: data.captcha || false
			})
			.then((response) => response.data)
	},
	logout: () => {
		return samuraiApi
			.delete<LoginLogoutAPI>(`/auth/login`)
			.then((response) => response.data)
	}
}

export const profileAPI = {
	getProfileInfo: (userId: number) => {
		return samuraiApi
			.get<GetProfileInfoAPI>(`profile/${userId}`)
			.then((response) => response.data)
	},
	getProfileStatus: (id: number) => {
		return samuraiApi
			.get<string>(`profile/status/${id}`)
			.then((response) => response.data)
	},
	updateProfileStatus: (status: string) => {
		return samuraiApi
			.put<UpdateProfileStatusAPI>(`profile/status`, {
				status: status
			})
			.then((response) => response.data)
	},
	updateProfilePhoto: (file: File) => {
		const formData = new FormData()
		formData.append('image', file)
		return samuraiApi
			.put<UpdateProfilePhotoAPI>(`profile/photo`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((response) => response.data)
	},
	updateProfileInfo: (profile: ProfileInfoT) => {
		return samuraiApi
			.put<UpdateProfileInfoAPI>(`profile`, profile)
			.then((response) => response.data)
	}
}

export const securityAPI = {
	getCaptchaURL: () => {
		return samuraiApi
			.get<GetCaptchaURL>(`security/get-captcha-url`)
			.then((response) => response.data)
	}
}

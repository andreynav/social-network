import axios from 'axios'
import { AuthDataT } from 'store/authReducer'
import { UserT } from 'store/usersReducer'

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
	items: Array<UserT>
	totalCount: number
	error: string | null
}

export type PhotosT = {
	large: string | null
	small: string | null
}

export type ContactsT = {
	facebook: string | null
	github: string | null
	instagram: string | null
	mainLink: string | null
	twitter: string | null
	vk: string | null
	website: string | null
	youtube: string | null
}

export type ProfileInfoAPI = {
	aboutMe: string | null
	fullName: string
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	contacts: ContactsT
	photos: PhotosT
}

export type GetCaptchaURL = {
	url: string
}

type ResponseT<T> = {
	data: T
	messages: Array<string>
	resultCode: ResultCodes
}

export type FollowUserUnfollowUserUserAPI = ResponseT<object>
export type LoginLogoutAPI = ResponseT<object>
export type UpdateProfileStatusAPI = ResponseT<object>
export type UpdateProfileInfoAPI = ResponseT<object>
export type MeAPI = ResponseT<{ id: number; email: string; login: string }>
export type UpdateProfilePhotoAPI = ResponseT<{ photos: PhotosT }>

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
		return samuraiApi
			.get<MeAPI>(`auth/me`)
			.then((response) => response.data)
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
			.get<ProfileInfoAPI>(`profile/${userId}`)
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
	updateProfileInfo: (profile: ProfileInfoAPI) => {
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

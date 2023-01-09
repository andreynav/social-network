import { ContactsT, ProfileInfoT } from '../store/profileReducer'

export const getProfileInfoSchemeData = (data: ProfileInfoT & ContactsT) => {
	return {
		fullName: data.fullName,
		aboutMe: data.aboutMe,
		lookingForAJob: data.lookingForAJob,
		lookingForAJobDescription: data.lookingForAJobDescription,
		contacts: {
			facebook: data.facebook,
			website: data.website,
			vk: data.vk,
			twitter: data.twitter,
			instagram: data.instagram,
			youtube: data.youtube,
			github: data.github,
			mainLink: data.facebook
		}
	}
}

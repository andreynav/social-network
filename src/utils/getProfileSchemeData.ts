import { ProfileInfoAPI } from 'api/api'

export type ProfileSchemeDataT = ReturnType<typeof getProfileSchemeData>
export const getProfileSchemeData = (profileInfo: ProfileInfoAPI) => {
  return [
    {
      itemName: 'profile.fullName',
      itemData: profileInfo.fullName,
      inputName: 'fullName',
      itemType: 'text'
    },
    {
      itemName: 'profile.aboutMe',
      itemData: profileInfo.aboutMe,
      inputName: 'aboutMe',
      itemType: 'text'
    },
    {
      itemName: 'profile.lookingForAJobStatus',
      itemData: profileInfo.lookingForAJob,
      inputName: 'lookingForAJob',
      itemType: 'checkbox'
    },
    {
      itemName: 'profile.lookingForAJobDescription',
      itemData: profileInfo.lookingForAJobDescription,
      inputName: 'lookingForAJobDescription',
      itemType: 'text'
    },
    {
      itemName: 'profile.website',
      itemData: profileInfo.contacts?.website,
      inputName: 'website',
      itemType: 'text'
    },
    {
      itemName: 'profile.facebook',
      itemData: profileInfo.contacts?.facebook,
      inputName: 'facebook',
      itemType: 'text'
    },
    {
      itemName: 'profile.vk',
      itemData: profileInfo.contacts?.vk,
      inputName: 'vk',
      itemType: 'text'
    },
    {
      itemName: 'profile.instagram',
      itemData: profileInfo.contacts?.instagram,
      inputName: 'instagram',
      itemType: 'text'
    },
    {
      itemName: 'profile.youtube',
      itemData: profileInfo.contacts?.youtube,
      inputName: 'youtube',
      itemType: 'text'
    },
    {
      itemName: 'profile.github',
      itemData: profileInfo.contacts?.github,
      inputName: 'github',
      itemType: 'text'
    },
    {
      itemName: 'profile.mainLink',
      itemData: profileInfo.contacts?.mainLink,
      inputName: 'mainLink',
      itemType: 'text'
    }
  ]
}

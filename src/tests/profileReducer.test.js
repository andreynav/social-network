import profileReducer, {addNewPostAC, setProfileInfoAC, setProfileStatusAC} from "../store/profileReducer";

const stateProfileReducer = {
    myPosts: [
        {id: 1, message: "Hey, how are you?", like: 105},
        {id: 2, message: "You shell not pass, fellow!", like: 304},
        {id: 3, message: "It\'s my life", like: 118},
        {id: 4, message: "Nice day, let's learn React", like: 257},
    ],
    profileInfo: null,
    profileStatus: null,
}

const infoData = {
    "aboutMe": null,
    "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
    },
    "lookingForAJob": false,
    "lookingForAJobDescription": null,
    "fullName": "AndyN",
    "userId": 26100,
    "photos": {
        "small": null,
        "large": null
    }
}

const newPostAction = addNewPostAC({message: 'New post test message'})
const profileStatus = setProfileStatusAC({profileStatus: 'Test status'})

describe('Profile reducer tests', () => {
    test('New post should be added', () => {
        const newState = profileReducer(stateProfileReducer, newPostAction)
        expect(newState.myPosts.length).toBe(5)
    });

    test('New post text message should be correct', () => {
        const newState = profileReducer(stateProfileReducer, newPostAction)
        expect(newState.myPosts[4].message).toEqual('New post test message')
    });

    test('Profile status should not be null', () => {
        const newState = profileReducer(stateProfileReducer, profileStatus)
        expect(newState.profileStatus).not.toEqual(null)
    });

    test('Profile status text should be correct', () => {
        const newState = profileReducer(stateProfileReducer, profileStatus)
        expect(newState.profileStatus).toEqual('Test status')
    });

    test('Profile info should be added', () => {
        const profileInfo = setProfileInfoAC({profileInfo: infoData})
        const newState = profileReducer(stateProfileReducer, profileInfo)
        expect(newState.profileInfo).not.toEqual(null)
    });
})



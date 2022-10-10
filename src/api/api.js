import axios from "axios";

const samuraiApi = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
            'API-KEY': 'b055b506-f05b-42fe-928f-891da5e27dea'
        }
});

export const userAPI = {
    getUsers: (userOnPage, pageNumber = 1) => {
        return samuraiApi.get(`users?count=${userOnPage}&page=${pageNumber}`)
            .then(response => response.data);
    },
    followUser: (id) => {
        return samuraiApi.post(`follow/${id}`)
            .then(response => response.data);
    },
    unfollowUser: (id) => {
        return samuraiApi.delete(`follow/${id}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    me: () => {
        return samuraiApi.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfileInfo: (userId) => {
        return samuraiApi.get(`profile/${userId}`)
            .then(response => response.data);
    }
}

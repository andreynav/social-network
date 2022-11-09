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
    },
    login: (data) => {
        return samuraiApi.post(`/auth/login`, {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe || false,
            captcha: data.captcha  || false
        })
            .then(response => response.data)
    },
    logout: () => {
        return samuraiApi.delete(`/auth/login`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileInfo: (userId) => {
        return samuraiApi.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getProfileStatus: (id) => {
        return samuraiApi.get(`profile/status/${id}`)
            .then(response => response.data);
    },
    updateProfileStatus: (status) => {
        return samuraiApi.put(`profile/status`, {
            status: status
        })
            .then(response => response.data);
    },
    updateProfilePhoto: (file) => {
        const formData = new FormData();
        formData.append('image', file)
        return samuraiApi.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => response.data);
    },
    updateProfileInfo: (profile) => {
        return samuraiApi.put(`profile`, profile)
            .then(response => response.data);
    }
}

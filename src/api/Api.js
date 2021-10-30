import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0a095b9c-46e3-4733-815d-46b9cd45babd"
    }

});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})

    },

    getProfile(userId) {
        console.warn('Obselete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)

    },

    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)

    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});

    },
    logout() {
        return instance.delete(`auth/login`);

    }
}

export const profileAPI = {

    getProfile(userId) {

        return instance.get(`profile/${userId}`, {})

    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }

}






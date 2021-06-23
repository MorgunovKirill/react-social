import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "7156a42a-a0ca-4173-80e0-2276dbe8cf49"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
             return response.data
         });
     },

     unFollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        });
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        });
    },

    getAuthProfileData() {
        return instance.get(`auth/me`).then(response => { return response.data });
    },

    getProfileData(userId) {
        return instance.get(`profile/${userId}`).then(response => { return response.data });
    }
} 
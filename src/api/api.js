import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9000/api/1.0',
    headers: {
        'With-Credential': true
    }
})

export const authApi = {
    authMe() {
        return instance.get('/auth/me').then(response => response.data)
    }
}

export const usersApi = {
    getUsers(pageNumber, pageSize) {
        return instance
            .get(`/users?_page=${pageNumber}&_limit=${pageSize}`)
            .then(response => {
                return {
                    users: response.data,
                    totalUsersCount: parseInt(response.headers['x-total-count'])
                }
            })
    },
    getUser(userId) {
        return instance.get(`/users/${userId}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`, {})
    },
    unfollow(userId) {
        return instance.post(`/unfollow/${userId}`, {})
    }
}
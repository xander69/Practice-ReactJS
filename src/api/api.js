import axios from 'axios'
import Cookies from 'js-cookie'

const SESSION_GUID_COOKIE = 'Session-Guid'

const instance = axios.create({
    baseURL: 'http://localhost:9000/api/1.0'
})

instance.interceptors.request.use((config) => {
    config.headers.common['With-Credential'] = Cookies.get(SESSION_GUID_COOKIE)
    return config
})

export const authApi = {
    authMe() {
        return instance.get('/auth/me').then(response => response.data)
    },
    login(username, password) {
        return instance.post('/login', {username, password}).then(response => {
            Cookies.set(SESSION_GUID_COOKIE,
                response.data.sessionGuid,
                {sameSite: 'None', secure: true})
            return response.data
        })
    },
    logout() {
        return instance.get('/logout').then(response => {
            Cookies.remove(SESSION_GUID_COOKIE)
            return response.data
        })
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
    follow(userId) {
        return instance.post(`/follow/${userId}`, {})
    },
    unfollow(userId) {
        return instance.post(`/unfollow/${userId}`, {})
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`/users/${userId}`).then(response => response.data)
    },
    updateStatus(userId, status) {
        return instance.patch(`/users/${userId}`, {status: status}).then(response => response.data)
    }
}
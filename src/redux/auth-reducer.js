import {authApi, profileApi, usersApi} from '../api/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    isAuth: false,
    followingInProgress: [],
    data: {
        id: null,
        gender: null,
        fullName: null,
        avatar: null,
        title: null,
        followed: [],
        country: null,
        city: null,
        email: null,
        status: null
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                isAuth: true,
                data: action.data
            }
        }
        case FOLLOW: {
            return {
                ...state,
                data: {
                    ...state.data,
                    followed: [
                        ...state.data.followed,
                        action.userId
                    ]
                }
            }
        }
        case UNFOLLOW: {
            const index = state.data.followed.indexOf(action.userId)
            return {
                ...state,
                data: {
                    ...state.data,
                    followed: [
                        ...state.data.followed.slice(0, index),
                        ...state.data.followed.slice(index + 1)
                    ]
                }
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                data: {
                    ...state.data,
                    status: action.status
                }
            }
        }
        default:
            return state
    }
}

const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data})
const doFollow = (userId) => ({type: FOLLOW, userId})
const doUnfollow = (userId) => ({type: UNFOLLOW, userId})
const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getAuthUserData = () => {
    return (dispatch) => {
        authApi.authMe()
            .then(data => {
                dispatch(setAuthUserData(data))
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.follow(userId).then(() => {
            dispatch(doFollow(userId))
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.unfollow(userId).then(() => {
            dispatch(doUnfollow(userId))
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const updateStatus = (userId, status) =>
    (dispatch) => {
        profileApi.updateStatus(userId, status).then(response => {
            dispatch(setStatus(response.status))
        })
    }

export default authReducer


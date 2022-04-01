const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
        email: null
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
        default:
            return state
    }
}

export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export default authReducer


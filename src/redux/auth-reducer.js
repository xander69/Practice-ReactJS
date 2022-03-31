const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    isAuth: false,
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
        default:
            return state
    }
}

export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export default authReducer


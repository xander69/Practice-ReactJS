const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

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
        default:
            return state
    }
}

export const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA, data})
export default authReducer


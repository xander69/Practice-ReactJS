import {createSelector} from 'reselect'

const getUsersPrimitiveSelector = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getCurrentUser = (state) => {
    return state.auth.data
}

export const getFollowingInProgress = (state) => {
    return state.auth.followingInProgress
}

export const getUsers = createSelector(getUsersPrimitiveSelector, getIsFetching, (users, isFetching) => {
    return users.filter(u => u.id !== 100 || isFetching) // dummy filter for test reselector only
})
import {combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

const store = createStore(reducers)
window.store = store

export default store
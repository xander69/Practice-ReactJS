import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer'

const reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
import {combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import sidebarReducer from './sidebar-reducer'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers)

export default store
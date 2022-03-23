import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import {addPost} from './state'

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
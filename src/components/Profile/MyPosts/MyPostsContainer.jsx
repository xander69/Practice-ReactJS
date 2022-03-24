import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {

    const state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updatePostText = (messageText) => {
        props.store.dispatch(updateNewPostTextActionCreator(messageText))
    }

    return (<MyPosts addPost={addPost}
                     updatePostText={updatePostText}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;
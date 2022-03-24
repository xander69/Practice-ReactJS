import React from 'react'
import StoreContext from '../../../StoreContext'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let updatePostText = (messageText) => {
                        store.dispatch(updateNewPostTextActionCreator(messageText))
                    }

                    return <MyPosts addPost={addPost}
                                    updatePostText={updatePostText}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>;
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
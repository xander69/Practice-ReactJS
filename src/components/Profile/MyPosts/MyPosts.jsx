import React from 'react';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../state'

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(post => <Post message={post.message}
                           dateTime={post.dateTime}
                           likeCount={post.likeCount}
                           avatar={post.avatar}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        // let text = document.getElementById('new-post').value
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let messageText = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(messageText))
    }

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}
                          cols={60} rows={1}/>
            </div>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;
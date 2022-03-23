import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.state
        .map(post => <Post message={post.message}
                           dateTime={post.dateTime}
                           likeCount={post.likeCount}
                           avatar={post.avatar}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        // let text = document.getElementById('new-post').value
        let messageText = newPostElement.current.value
        props.addPost(messageText)
        newPostElement.current.value = ''
    }

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} cols={60} rows={1}/>
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
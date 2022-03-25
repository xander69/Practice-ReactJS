import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(post => <Post key={post.id}
                           message={post.message}
                           dateTime={post.dateTime}
                           likeCount={post.likeCount}
                           avatar={post.avatar}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        const text = newPostElement.current.value
        props.updatePostText(text)
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
            <button onClick={onAddPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;
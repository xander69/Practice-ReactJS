import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.state
        .map(post => <Post message={post.message}
                           dateTime={post.dateTime}
                           likeCount={post.likeCount}
                           avatar={post.avatar}/>)

    return <div>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea cols={60} rows={1}/>
            </div>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;
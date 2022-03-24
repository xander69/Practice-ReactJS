import React from 'react';
import About from './About/About'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return <div>
        <h1>My Profile</h1>
        <About/>
        <MyPostsContainer store={props.store}/>
    </div>
}

export default Profile;
import React from 'react';
import About from './About/About'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = () => {
    return <div>
        <h1>My Profile</h1>
        <About/>
        <MyPostsContainer/>
    </div>
}

export default Profile;
import React from 'react';
import About from './About/About'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return <div>
        <h1>{props.profile.fullName}</h1>
        <About profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;
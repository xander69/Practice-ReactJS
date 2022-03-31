import React from 'react';
import About from './About/About'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return <div>
        <About profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;
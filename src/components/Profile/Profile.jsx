import React from 'react';
import s from './Profile.module.css'
import About from "./About/About";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return <div>
        <h1>My Profile</h1>
        <About/>
        <MyPosts state={props.state.posts}/>
    </div>
}

export default Profile;
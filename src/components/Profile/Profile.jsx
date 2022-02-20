import React from 'react';
import s from './Profile.module.css'
import About from "./About/About";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <h1>My Profile</h1>
        <About/>
        <MyPosts/>
    </div>
}

export default Profile;
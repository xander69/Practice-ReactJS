import React from 'react';
import s from './Profile.module.css'
import About from "./About/About";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return <div>
        <h1>My Profile</h1>
        <About/>
        <MyPosts posts={props.state.posts}
                 newPostText={props.state.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;
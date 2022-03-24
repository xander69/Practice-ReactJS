import React from 'react';
import About from "./About/About";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return <div>
        <h1>My Profile</h1>
        <About/>
        <MyPosts posts={props.state.posts}
                 newPostText={props.state.newPostText}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;
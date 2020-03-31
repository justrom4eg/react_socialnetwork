import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Avatar_Descriptions from "./Avatar_Descriptions/Avatar_Descriptions";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <Avatar_Descriptions/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     changeNewPostText={props.changeNewPostText}/>
        </div>
    )
}

export default Profile
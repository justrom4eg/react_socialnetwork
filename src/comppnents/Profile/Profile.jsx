import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Avatar_Descriptions from "./Avatar_Descriptions/Avatar_Descriptions";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Avatar_Descriptions/>
            <MyPosts/>
        </div>
    )
}

export default Profile
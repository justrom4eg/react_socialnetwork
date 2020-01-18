import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.profile}>
        <div className={classes.header_picture}>

        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rIHEq4QPVPjFKZHCIyM4fGLOZH6x-0jF80NPPjlKHPQPoXdYMA&s"/>
          Descriptions
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile
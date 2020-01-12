import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.profile}>
        <div>
          <img src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
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
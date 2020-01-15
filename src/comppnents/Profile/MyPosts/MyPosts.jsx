import React from 'react';
import classes from './MyPosts.module.css'
import MyPost from './MyPost/MyPost';

const MyPosts = () => {
    return (
      <div>
        <div>
          <p>New Post</p>
          <div>
            <textarea></textarea>
          </div>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
        <div>
          <MyPost message="My second message" like="23"/>
          <MyPost message="My first message" like="37"/>
        </div>
      </div>
    )
}

export default MyPosts
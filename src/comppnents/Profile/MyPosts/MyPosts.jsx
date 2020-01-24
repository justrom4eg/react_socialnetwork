import React from 'react';
import classes from './MyPosts.module.css'
import MyPost from './MyPost/MyPost';

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <MyPost message={post.message} like={post.like}/>)

    return (
        <div className={classes.postBlock}>
            <div>
                <p>New Post</p>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}


export default MyPosts
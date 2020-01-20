import React from 'react';
import classes from './MyPosts.module.css'
import MyPost from './MyPost/MyPost';

const MyPosts = () => {

    let posts = [
        {id: "1", message: "How are you", like:"23"},
        {id: "2", message: "My first message", like:"47"}
    ];

    let postElements = posts.map(post => <MyPost message={post.message} like={post.like}/>)

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
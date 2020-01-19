import React from 'react';
import classes from './MyPosts.module.css'
import MyPost from './MyPost/MyPost';

const MyPosts = () => {

    let postsData = [
        {id: "1", message: "How are you", like:"23"},
        {id: "2", message: "My first message", like:"47"}
    ];

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
                <MyPost message={postsData[0].message} like={postsData[0].like}/>
                <MyPost message={postsData[1].message} like={postsData[1].like}/>
            </div>
        </div>
    )
}

export default MyPosts
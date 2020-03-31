import React from 'react';
import classes from './MyPosts.module.css'
import MyPost from './MyPost/MyPost';

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <MyPost message={post.message} like={post.like}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let postOnChange = () => {
        let text1 = newPostElement.current.value;
        props.changeNewPostText(text1)
    };

    return (
        <div className={classes.postBlock}>
            <div>
                <p>New Post</p>
                <div>
                    <textarea ref={newPostElement} onChange={postOnChange} value={props.newPostText}/>
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}


export default MyPosts
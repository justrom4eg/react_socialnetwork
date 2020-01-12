import React from 'react';
import classes from './MyPosts.module.css'

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
          My posts
          <div className={classes.item}>
            <img src="https://lastfm.freetls.fastly.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg"/>
            <p>Post 1</p>
          </div>
          <div className={classes.item}>
            Post 2
          </div>
          <div className={classes.item}>
            Post 3
          </div>
          <div className={classes.item}>
            Post 4
          </div>
          <div className={classes.item}>
            Post 5
          </div>
          <div className={classes.item}>
            Post 6
          </div>
        </div>
      </div>
    )
}

export default MyPosts
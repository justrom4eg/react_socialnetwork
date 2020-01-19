import React from 'react';
import classes from './MyPost.module.css'

const MyPost = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src="https://lastfm.freetls.fastly.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg"/>
                <p>{props.message}</p>
                <div>
                    <span>like {props.like}</span>
                </div>
            </div>
        </div>
    )
}

export default MyPost
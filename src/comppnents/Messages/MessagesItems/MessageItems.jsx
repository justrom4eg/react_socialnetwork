import React from "react";
import classes from "./MessageItems.module.css"

const MessageItems = (props) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}

export default MessageItems
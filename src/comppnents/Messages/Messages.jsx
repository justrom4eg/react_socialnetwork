import React from "react";
import classes from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs";
import MessageItems from "./MessagesItems/MessageItems";

const Messages = (props) => {

    let dialogsElements = props.dialogs.map(user => <Dialogs name={user.name} id={user.id}/>);
    let messagesElements = props.messages.map(message => <MessageItems text={message.text}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Messages
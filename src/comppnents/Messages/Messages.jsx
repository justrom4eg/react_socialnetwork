import React from "react";
import classes from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs";
import MessageItems from "./MessagesItems/MessageItems";

const Messages = (props) => {

    let dialogsElements = props.state.dialogs.map(user => <Dialogs name={user.name} id={user.id}/>);
    let messagesElements = props.state.messages.map(message => <MessageItems text={message.text}/>);

    let text = React.createRef();

    let addMessages = () => {
        let text1 = text.current.value
        alert(text1)
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={text}/>
                    <div>
                        <button onClick={addMessages}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Messages
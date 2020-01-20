import React from "react";
import classes from "./Messages.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )
}

const Messages = () => {

    let dialogs = [
        {name: "Dimon", id: "1"},
        {name: "Romu4", id: "2"},
        {name: "Nazar", id: "3"},
        {name: "Nastya", id: "4"},
        {name: "Ira", id: "5"}
    ];

    let messages = [
        {id: "1", text: "How are you"},
        {id: "2", text: "How is your it-kamasutra?"},
        {id: "3", text: "I like it"},
        {id: "4", text: "Me too!!!!"},
        {id: "5", text: "Have a nice day!)"},
    ];

    let dialogsElements = dialogs.map(user => <Dialog name={user.name} id={user.id}/>);
    let messagesElements = messages.map(message => <Message text={message.text}/>)

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
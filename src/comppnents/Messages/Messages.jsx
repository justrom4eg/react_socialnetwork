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

    let dialogsData = [
        {name: "Dimon", id: "1"},
        {name: "Romu4", id: "2"},
        {name: "Nazar", id: "3"},
        {name: "Nastya", id: "4"},
        {name: "Ira", id: "5"}
    ];

    let messagesData = [
        {id: "1", text: "How are you"},
        {id: "2", text: "How is your it-kamasutra?"},
        {id: "3", text: "I like it"},
        {id: "4", text: "Me too!!!!"},
        {id: "5", text: "Have a nice day!)"},
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>

            <div className={classes.messages}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
                <Message text={messagesData[2].text}/>
                <Message text={messagesData[3].text}/>
                <Message text={messagesData[4].text}/>
            </div>
        </div>
    )
}

export default Messages
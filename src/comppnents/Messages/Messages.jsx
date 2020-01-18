import React from "react";
import classes from "./Messages.module.css"

const Messages = () => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogs_item}>
                <div className={classes.dialog}>
                    Dima
                </div>
                <div className={classes.dialog}>
                    Nazar
                </div>
                <div className={classes.dialog}>
                    Ira
                </div>
                <div className={classes.dialog}>
                    Romu4
                </div>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Yo how are you?</div>
                <div className={classes.message}>How is your it-kamasutra?</div>
                <div className={classes.message}>I like it</div>
            </div>
        </div>
    )
}

export default Messages
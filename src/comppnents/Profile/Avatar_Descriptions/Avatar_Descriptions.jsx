import React from "react";
import classes from "./Avatar_Descriptions.module.css"

const Avatar_Descriptions = (props) => {
    return (
        <div>
            <div>
                <div className={classes.header_picture}></div>
            </div>
            <div className={classes.descriptionBlock}>
                <span className={classes.avatarImage}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rIHEq4QPVPjFKZHCIyM4fGLOZH6x-0jF80NPPjlKHPQPoXdYMA&s"/>
                </span>
                Descriptions
            </div>
        </div>
    )
}

export default Avatar_Descriptions
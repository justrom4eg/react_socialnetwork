import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
    <header className={classes.header}>
        <div>
            <img src="https://www.designfreelogoonline.com/wp-content/uploads/2014/11/00509-3D-logo-design-free-logo-online-04.png"/>
        </div>
        <div>
            <span className={classes.itplanet}>ItPlanet</span>
        </div>
    </header>
    )
}

export default Header
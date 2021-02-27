import React from 'react'
import classes from '../styles/Drawer.module.css'

const DrawerToggle = (props) => {
    return (
        <div className={classes.drawer} onClick={props.open}>
            <div className={classes.toggle}></div>
            <div className={classes.toggle}></div>
            <div className={classes.toggle}></div>
        </div>
    )
}

export default DrawerToggle

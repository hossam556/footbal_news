import React from 'react'
import classes from '../styles/sideDrawer.module.css'

const SideDrawer = () => {
    return (
        <div className={classes.modal}>
            <a className={classes.a1}>LOGIN</a>
            <a className={classes.a2}>REGISTER</a>
        </div>
    )
}

export default SideDrawer

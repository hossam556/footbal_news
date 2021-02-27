import React from 'react'
import classes from '../styles/nav.module.css'

const Nav = () => {
    return (
        <div className={classes.nav} >
            <p className={classes.p}>Newsbuzz</p>
            <div className={classes.bContainer}>
                <a className={classes.a1}>LOGIN</a>
                <a className={classes.a2}>REGISTER</a>
            </div>
        </div>
    )
}

export default Nav

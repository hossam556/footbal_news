import React from 'react'
import DrawerToggle from './DrawerToggle'
import classes from '../styles/MobileNav.module.css'
import SearchIcon from '@material-ui/icons/Search';

const MobileNave = (props) => {
    return (
        <div className={classes.nav}>
            <p>Newsbuzz</p>
            <span className={classes.icon}><SearchIcon/></span>
            <input className={classes.input} placeholder='Search league or team'/>
            <DrawerToggle open={props.open}/>
        </div>
    )
}

export default MobileNave



import React ,{useState} from 'react'
import Nav from '../components/Nav'
import classes from '../styles/layout.module.css'
import MobileNav from '../components/MobileNav'
import SideDrawer from '../components/SideDrawer'

const Layout = (props) => {
    const [show ,setShow] = useState(false)

    const openDrawer = ()=>{
           setShow(!show)
    }

    return (
        <div className={classes.layout}>
            <Nav/>
            <MobileNav open={openDrawer}/>
            {show && <SideDrawer/>}
            {props.children}
        </div>
    )
}

export default Layout

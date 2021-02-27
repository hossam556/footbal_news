import React from 'react'
import classes from '../styles/mainPage.module.css'
import FixedColumn from './FixedColumn'
import News from './News'

const MainPage = () => {
    return (
        <div className={classes.main}>
            <FixedColumn/>
            <News/>
            <FixedColumn/>
        </div>
    )
}

export default MainPage

import React from 'react'
import classes from '../styles/newsCard.module.css'
import RssFeedIcon from '@material-ui/icons/RssFeed';


const newsCard = (props) => {

    let keys= props.keywords.map(item=>
                 <span className={classes.span} key={item._id}>{item.name}</span>);

    return (
        <div  className={classes.card}>
            <div className={classes.header}>
                <div className={classes.title}>
                    <img src={props.image} alt={props.id} className={classes.icon}/>
                    <p className={classes.p}>{props.title}</p>
                </div>
                <RssFeedIcon style={{color:'#03a86a'}}/>
            </div>
            <span className={classes.newsTitle}>{props.newsTitle}</span>
            <span className={classes.date}>{props.date}</span>
            <div className={classes.list}>{keys}</div>
        </div>
    )
}

export default newsCard

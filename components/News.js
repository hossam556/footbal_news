import axios from 'axios';
import React ,{useState,useEffect}from 'react'
import classes from '../styles/news.module.css'
import NewsCard from './NewsCard'
import {newss} from '../data'

const News = () => {
    const[news ,setNews] = useState([])

    useEffect(()=>{
          
              
              axios.get('http://80.240.21.204:1337/news?limit=100').then(response=>{
                  setNews(response.data.news)
              }).catch(error=>{
              })
    },[]);

     let newsData = 'WAIT FOR NEWS' ;
     if(news){
         newsData =newss.map(item=><span key={item._id}>
            <NewsCard 
             image={item.source.url}
             title={item.source.title}
             newsTitle={item.title}
             date={item.created_at}
             id={item._id}
             keywords={item.keywords} />
        </span>)
     }

    return (
        <div className={classes.news}>
            
            {newsData}
        </div>
    )
}

export default News

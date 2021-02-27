import axios from 'axios';
import React ,{useState,useEffect}from 'react'
import classes from '../styles/news.module.css'
import NewsCard from './NewsCard'

const News = () => {
    const[news ,setNews] = useState([])
    const[total, setTotal]=useState('')

    useEffect(()=>{
           axios.get('http://80.240.21.204:1337/news?skip=12&limit=20').then(response=>{
            console.log(response.data.totalNews);
             setTotal(response.data.totalNews)  ;
          })
              
              axios.get(`http://80.240.21.204:1337/news?skip=12&limit=1000`).then(response=>{
                  setNews(response.data.news)
              }).catch(error=>{
              })
    },[]);

    return (
        <div className={classes.news}>
            {news.map(item=><span key={item._id}>
                <NewsCard 
                 image={item.source.url}
                 title={item.source.title}
                 newsTitle={item.title}
                 date={item.created_at}
                 id={item._id}
                 keywords={item.keywords} />
            </span>)}
        </div>
    )
}

export default News

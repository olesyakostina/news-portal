import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import './styles.scss'
import routeMain from './routes'
import getNews from "services/getNews";
import DateView from "components/DateView";

import {ID} from 'types/ID'
import { INewsDetail } from "types/INewsDetail";
const NewsDetail =()=>{
    const {id} = useParams<ID>()    
    const [news,setNews] = useState<INewsDetail | null>(null)

    useEffect(()=>{
        getNews().then(response =>{
            const currentNews = response.data.articles?.find((item:INewsDetail)  =>item._id === id )
            setNews(currentNews)
        })
    },[id])
    return(
        <section className='newsDetailPage'>
             {news?(
                 <div className='newsDetailWrapper'>
                     <div className='leftPart'>
                         <h2 className='title'>{news.title}</h2>
                         <p className='source'>{news.clean_url}</p>
                         <DateView value={news.published_date}/>
                     </div>
                     <div className='rightPart'>
                         <img src={news.media} alt={news.media} />
                         <p className='summary'>{news.summary}</p>
                     </div>
                 </div>
             ):<></>}
        </section>
    )
    
}
export{routeMain}
export default NewsDetail
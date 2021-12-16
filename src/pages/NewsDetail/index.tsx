import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import './styles.scss'
import routeMain from './routes'

import DateView from "components/DateView";

import {ID} from 'types/ID'
import { INewsDetail } from "types/INewsDetail";

import { useSelector} from "react-redux";

import { selectList } from "store/news/selectors";


const NewsDetail =()=>{
    const {id} = useParams<ID>()    
    const [news,setNews] = useState<INewsDetail | undefined>(undefined)

    const  newsList = useSelector(selectList)

    useEffect(()=>{       
            const currentNews = newsList?.find((item:INewsDetail)  =>item._id === id )
            setNews(currentNews)
        
    },[id,newsList])
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
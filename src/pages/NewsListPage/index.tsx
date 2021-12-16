import React,{useEffect,useState} from "react";
import routeMain  from "./routes";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
import getNews from "services/getNews";

import { INewsDetail } from "types/INewsDetail";

import './styles.scss'
import { useDispatch ,useSelector} from "react-redux";
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors";

const NewsListPages =()=>{
    const dispatch = useDispatch()
   const  newsList = useSelector(selectList)
    
    useEffect(()=>{
        dispatch(loadNews())
    },[dispatch])

    return(
        <section className='newsListPages'>
        <PageTitle
        title={
            <h2>Быть<br/> в курсе <span> событий </span></h2> 
        }        
        />
           {newsList.length>0 && <NewsList list={newsList}/>}
    </section>
    )
    
}
export {routeMain}
export default NewsListPages
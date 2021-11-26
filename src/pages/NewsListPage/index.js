import React,{useEffect,useState} from "react";
import './styles.scss'
import routeMain  from "./routes";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";
import getNews from "services/getNews";



const NewsListPages =()=>{
    const [newsList, setNewsList] = useState([])

    useEffect(()=>{
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    },[])

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
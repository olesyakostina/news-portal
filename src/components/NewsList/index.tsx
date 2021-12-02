import React from "react";
import './styles.scss'
import NewsItem from "./components/NewsItem";

import { INewsDetail } from "types/INewsDetail";

interface INewsListParams{
    list:INewsDetail[]
}
const NewsList:React.FC<INewsListParams> =({list})=>(
    <div className='newsList'>
        {list.map((news:INewsDetail)=>(
            <NewsItem key={news._id} item={news}/>
        ))}
    </div>
)
export default NewsList
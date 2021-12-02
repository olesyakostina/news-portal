
import { INewsDetail } from "./INewsDetail";
export interface INews{
    status:string,
    total_hits: number,
    page:number,
    total_pages:number,
    page_size:number,
    articles:INewsDetail[]

}
/*
"page":1
"page_size":25
"status":"ok"
"total_hits":332
"total_pages":14
*/
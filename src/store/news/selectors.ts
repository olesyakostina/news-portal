import {IStore} from './types'
import newsReducer from './reducers';


export const selectList = (state:{newsReducer:IStore}):IStore['list']=>state.newsReducer.list
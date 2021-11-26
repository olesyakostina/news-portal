import axios from "axios";

const getNews =()=>{    

  const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: {q: 'Elon Musk', lang: 'en'},
    headers: {
      'x-rapidapi-host': 'free-news.p.rapidapi.com',
      'x-rapidapi-key': 'f0f00b7713mshfc9f212e1b90494p1c33e2jsn164385fb6b2a'
    }
  };
  
  return axios.request(options)
}
export default getNews
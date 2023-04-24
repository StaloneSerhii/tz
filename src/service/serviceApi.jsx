import axios from "axios"

const API = 'https://644218c576540ce22584450b.mockapi.io'

async function getTweets(){
 try {
    const {data} = await axios.get(`${API}/users`)
    return data
 } catch (error) {
    console.log(error);
 }
}

async function putTweets(id, tweets){

   try {
      const {data} = await axios.put(`${API}/users/${id}`, tweets)
      return data
   } catch (error) {
      console.log(error);
   }
  }


export {getTweets, putTweets}
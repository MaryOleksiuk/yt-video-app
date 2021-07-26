import axios from "axios";

const KEY = 'AIzaSyALhhlPe41J_OYmL5PlXDXbPEcTNJ2ERVM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
})

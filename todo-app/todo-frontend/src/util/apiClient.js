import axios from 'axios'
const API_URL = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_BACKEND_URL 
  : "http://localhost:3000";
console.log({ API_URL })
const apiClient = axios.create({
  baseURL: API_URL,
})

export default apiClient
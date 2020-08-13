import axios from 'axios'

const service = axios.create({
  baseURL: 'https://www.googleapis.com/',
  timeout: 30000 // request timeout
})
export default service

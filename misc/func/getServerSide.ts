import axios from 'axios'
import { API_TOKEN } from '../constants/token'

export const getBlogs = async () => {
  const response = await axios.get(`https://sistech-api.vercel.app/blog`, {
    headers: {
      Authorization: `bearer ${API_TOKEN}`,
    },
  })
  return {
    props: {
      blogs: response.data,
    },
  }
}

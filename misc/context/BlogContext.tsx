import axios from 'axios'
import { createContext, ReactNode, useContext } from 'react'
import { API_TOKEN } from '../constants/token'

export interface ContextProviderProps {
  children: ReactNode
}

type BlogContent = {
  data: any[]
}

export const BlogContext = createContext<BlogContent>({
  data: [],
})

export const useBlogContent = () => useContext(BlogContext)

export const fetchAllBlogs = async () => {
  const { data } = await axios.get(`https://sistech-api.vercel.app/blog`, {
    headers: {
      Authorization: `bearer ${API_TOKEN}`,
    },
  })

  return data
}

export const BlogContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const blogs = fetchAllBlogs()
  return <BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>
}

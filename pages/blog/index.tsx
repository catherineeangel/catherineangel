import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import BlogBox from '../../components/Blog/BlogBox'
import BlogPreview from '../../components/Blog/BlogPreview'
import { API_TOKEN } from '../../misc/constants/token'
import { getBlogs } from '../../misc/func/getServerSide'

const Blog: NextPage = ({ blogs }) => {
  return (
    <div className="">
      <div className="min-h-screen p-10">
        <ul>
          <BlogPreview data={blogs} isPreview={false} />
        </ul>
      </div>
    </div>
  )
}

export const getServerSideProps = getBlogs

export default Blog

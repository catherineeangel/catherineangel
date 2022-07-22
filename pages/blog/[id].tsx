// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Tooltip } from '@mui/material'
import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { FcLike } from 'react-icons/fc'
import ReactMarkdown from 'react-markdown'
import { API_TOKEN } from '../../misc/constants/token'
import { getBlogs } from '../../misc/func/getServerSide'

const Blog: NextPage = ({ blogs }) => {
  const router = useRouter()
  const { id } = router.query

  const blogPost = blogs.filter((blog) => blog.id == id)[0]
  const LikePost = async () => {
    await axios
      .post(`https://sistech-api.vercel.app/blog/like`, { id: id })
      .then(function (response) {
        toast.success('Liked')
        window.location.reload() // workaroundnnya
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="min-h-screen">
        <div className="px-10 md:px-20 py-10">
          <p className="font-martel text-xl md:text-3xl font-bold pb-1">
            {blogPost.title}
          </p>
          <Tooltip title="Like this post">
            <button
              className="mb-4 border border-coral rounded mt-2 shadow flex  items-center gap-x-1 px-2"
              onClick={LikePost}
            >
              <FcLike /> {blogPost.like}
            </button>
          </Tooltip>
          <ReactMarkdown className="font-karla">
            {blogPost.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = getBlogs

export default Blog

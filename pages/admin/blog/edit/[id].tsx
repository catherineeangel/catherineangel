// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BiExit } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { getBlogs } from '../../../../misc/func/getServerSide'
import { API_TOKEN } from '../../../../misc/constants/token'

const EditBlog: NextPage = ({ blogs }) => {
  const router = useRouter()
  const { id } = router.query

  const blogPost = blogs.filter(
    (blog: { id: string | string[] | undefined }) => blog.id == id
  )[0]

  const [loading, setLoading] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(blogPost.title)
  const [content, setContent] = useState<string>(blogPost.content)

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setLoading(true)
    if (!!title && !!content) {
      axios
        .put(
          `https://sistech-api.vercel.app/blog`,
          {
            title: title,
            content: content,
            id: id,
          },
          {
            headers: {
              Authorization: `bearer ${API_TOKEN}`,
            },
          }
        )
        .then(function (response) {
          toast.success('Post updated')
        })
        .catch(function (error) {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
          //   clearState()
        })
    } else {
      toast.error('Fill in all the boxes!')
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="min-h-screen font-martel">
        <p className="text-center text-xl md:text-3lxl p-5">Update Blog Post</p>
        <div className="w-1/2 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="border border-rose/60 p-1.5 rounded"
            />
            <textarea
              rows={10}
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
              className="border border-rose/60 p-1.5 rounded"
            />
            <div className="flex flex-row justify-end">
              <button
                disabled={loading}
                className={`${
                  loading
                    ? 'bg-paleBlue'
                    : 'hover:text-coral bg-coral/80 border border-2 border-coral hover:bg-white'
                } text-white  w-40 rounded p-1.5`}
                type="submit"
              >
                Update Post
              </button>
            </div>
          </form>
          <div>
            <button
              onClick={() => router.push('/admin/blog')}
              className="-mt-10 flex flex-row justify-end gap-x-2 hover:border-2 border border-navy p-1.5 rounded"
            >
              <BiExit style={{ fontSize: '1.5em', color: '#303179' }} />
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = getBlogs

export default EditBlog

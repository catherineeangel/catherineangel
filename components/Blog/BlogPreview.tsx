import React, { FC } from 'react'
import BlogBox from './BlogBox'
import { BiRightArrowAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

interface BlogPreviewProps {
  data: any[]
  isPreview?: boolean
}

const BlogPreview: FC<BlogPreviewProps> = ({ data, isPreview = true }) => {
  const router = useRouter()
  const resData = isPreview ? data?.slice(0, 3) : data
  return (
    <section id="blog" className="py-10">
      <p className="font-martel text-3xl md:text-5xl font-semibold text-center">
        Some of my thoughts...
      </p>
      <div className="flex mx-10 md:mx-0 justify-center py-10 flex-col md:flex-row md:flex-wrap gap-12">
        {resData.map(({ id, title, content, like }) => {
          return (
            <div key={id}>
              <BlogBox id={id} title={title} content={content} like={like} />
            </div>
          )
        })}
      </div>
      {isPreview && (
        <div className="px-20 flex justify-end">
          <button
            onClick={() => {
              router.push('/blog')
            }}
            className="w-36 border border-2 border-rose hover:border-peach rounded p-1 flex flex-row items-center justify-center"
          >
            <p className="font-karla">All Blogs</p>
            <BiRightArrowAlt />
          </button>
        </div>
      )}
    </section>
  )
}

export default BlogPreview

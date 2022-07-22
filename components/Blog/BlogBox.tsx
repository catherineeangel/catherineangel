import { Tooltip } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React, { FC } from 'react'
import { FcLike } from 'react-icons/fc'
import toast from 'react-hot-toast'
import { BsArrowRightShort } from 'react-icons/bs'

interface BlogBoxProps {
  id: string
  title: string
  content: string // nanti dimasukin nya pke dangerouslysetinnerhtml kali ya
  like: number
}

const BlogBox: FC<BlogBoxProps> = ({ id, title, content, like }) => {
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
    <div className="w-full md:w-72 md:h-96 shadow-lg border border-50 hover:scale-105 transition-all">
      <div className="px-5 pt-10 hidden md:block">
        <Image
          width={250}
          height={150}
          src="/images/paper.png"
          alt="paper"
          objectFit="cover"
        />
      </div>
      <div className="py-4 md:py-0 px-10">
        <p className="font-martel font-bold text-2xl">{title}</p>
        <p className="font-karla text-md line-clamp-3">{content}</p>

        <Tooltip title="Like this post">
          <button
            className="border border-coral rounded mt-2 shadow flex  items-center gap-x-1 px-2"
            onClick={LikePost}
          >
            <FcLike /> {like}
          </button>
        </Tooltip>
        <div className="flex flex-row justify-end md:justify-center pt-2">
          <button
            onClick={() => window.open('/blog/' + id)}
            className="flex flex-row"
          >
            <p className="underline ">Read more</p>
            <BsArrowRightShort
              style={{ fontSize: '1.5em' }}
              className="md:hidden"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogBox

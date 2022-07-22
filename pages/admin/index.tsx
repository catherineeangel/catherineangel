import type { NextPage } from 'next'
import Head from 'next/head'
import { MdOutlineArticle } from 'react-icons/md'
import { BsArrowBarRight } from 'react-icons/bs'
import Link from 'next/link'

const Admin: NextPage = () => {
  return (
    <div>
      <div className="min-h-screen pt-10 space-y-4">
        <p className="text-center font-martel text-3xl md:text-5xl">
          Admin Page
        </p>
        <Link href="admin/blog">
          <div className="w-3/4 mx-auto bg-rose/40 mt-8 flex flex-row justify-between items-center rounded-lg py-2">
            <div className="flex flex-row items-center px-10 gap-x-5">
              <MdOutlineArticle style={{ fontSize: '3em' }} />
              <p className="font-martel text-md md:text-xl">Blogs</p>
            </div>
            <div className="pr-10 flex flex-row gap-x-4">
              <BsArrowBarRight style={{ fontSize: '2.5em' }} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Admin

import type { NextPage } from 'next'
import { RiFilePaper2Line } from 'react-icons/ri'
import { AiOutlineEdit, AiOutlineFileAdd } from 'react-icons/ai'
import { getBlogs } from '../../../misc/func/getServerSide'

const Admin: NextPage = ({ blogs }) => {
  const onHover = 'scale-105'

  return (
    <div>
      <div className="min-h-screen py-10 space-y-4">
        <p className="text-center font-martel text-3xl md:text-5xl pb-8">
          Blogs
        </p>
        <a href="/admin/blog/add">
          <div className="w-3/4 mx-auto border border-rose/60 flex flex-row justify-between items-center rounded-lg py-2">
            <div className="flex flex-row items-center px-10 gap-x-5">
              <p className="font-martel text-md md:text-xl">Add new post</p>
            </div>
            <div className="pr-10 flex flex-row gap-x-4">
              <div className={`hover:${onHover}`}>
                <AiOutlineFileAdd
                  style={{ fontSize: '2em', color: '#808080' }}
                />
              </div>
            </div>
          </div>
        </a>

        {blogs.map(({ id, title }) => {
          return (
            <div key={id}>
              <div className="w-3/4 mx-auto border-2 border-rose/60 flex flex-row justify-between items-center rounded-lg py-2">
                <div className="flex flex-row items-center px-10 gap-x-5">
                  <RiFilePaper2Line style={{ fontSize: '3em' }} />
                  <p className="font-martel text-md md:text-xl">{title}</p>
                </div>
                <div className="pr-10 flex flex-row gap-x-4">
                  <a className={`hover:${onHover}`} href={`blog/edit/${id}`}>
                    <AiOutlineEdit
                      style={{ fontSize: '2em', color: '#808080' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export const getServerSideProps = getBlogs

export default Admin

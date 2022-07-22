import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import BlogPreview from '../components/Blog/BlogPreview'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import { API_TOKEN } from '../misc/constants/token'
import { getBlogs } from '../misc/func/getServerSide'

const Home: NextPage = ({ blogs }) => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <BlogPreview data={blogs} />
    </div>
  )
}

export const getServerSideProps = getBlogs

export default Home

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Catherine Angel</title>
        <meta name="homepage" content="Catherine's Personal Website" />
        <link
          rel="icon"
          href="/images/logotitle.png"
          type="image/icon type"
        ></link>
      </Head>
      <Toaster />
      <Navbar />
      <div className="pt-12 md:pt-16" />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

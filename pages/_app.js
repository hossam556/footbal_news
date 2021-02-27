import React from 'react'
import '../styles/globals.css'
import Layout from '../hoc/Layout'
import MainPage from '../components/MainPage'
import Head from 'next/head'

const MyApp=() =>{
  return (
      <div>
        <Head>
          <title>newsApp</title>
          <meta
            name="description"
            content="Web site for rendering latest news"
          />
        </Head>
        <Layout>
            <MainPage/>
        </Layout>
      </div>
  )
}

export default MyApp

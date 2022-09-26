import Head from 'next/head'
import React from 'react'
import Header from './Header'

function Layout({title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
        </Head>
        <Header />
        <main className='container mx-auto my-7'>{children}</main>
        <link rel='icon' href='/favicon.ico' />
    </div>
  )
}

Layout.defaultProps = {
    title: 'Welcome to Devspace',
    keywords: 'development, coding, programming',
    description: 'Latest information in development'
}

export default Layout
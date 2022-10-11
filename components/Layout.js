import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const Layout = ({ children, titlePage }) => {
  return (
    <div>
      <Head>
        <title>Blog - {titlePage}</title>
      </Head>
      <Header>

      </Header>
      {children}

      <Footer>

      </Footer>
    </div>
  )
}

import '../styles/globals.scss'
import React from 'react'
import { Layout } from '../components'
import ScrollToTop from '../components/ScrollToTop'




function MyApp({ Component, pageProps }) {
  

  return(
  
   <Layout> 
   <ScrollToTop/> 
 
   <Component {...pageProps} />
   </Layout>


  )
}

export default MyApp

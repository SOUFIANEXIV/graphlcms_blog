import '../styles/globals.scss'
import React from 'react'
import { Layout } from '../components'
import ScrollToTop from '../components/ScrollToTop'
import { useEffect } from 'react'
import { pageview } from "../lib/gtag";

import { useRouter } from 'next/router'






function MyApp({ Component, pageProps }) {


  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);



  return(
  
   <Layout> 
   <ScrollToTop/> 
 
   <Component {...pageProps} />
   </Layout>


  )
}

export default MyApp

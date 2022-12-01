import React ,{useState,useEffect}from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts,getSimilairPosts } from '../services'


const PostWidget = ({categories,slug}) => {

  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if(slug){
      getSimilairPosts(categories,slug)
      .then((result)=>setRelatedPosts(result))
    }else{
      getRecentPosts()
      .then((result)=>setRelatedPosts(result))

    }
  
    
  }, [slug])
  

  return (

    <div className='bg-white    shadow-lg p-8 mb-8 pt-2 rounded-lg  ' >
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post)=>(
        <div className='flex items-center w-full mb-4' key={post.title}>
          <div className='w-16 float-none'>
            <img 
            src={post.featureImage.url}
            alt={post.title}
            width="50px"
            height="50px"
            className='align-middle rounded-full'

          />

          </div>
          <div className='flex-grow ml-4' >
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('MMM DD,YYYY')}
            </p>
            <Link href={`/post/${post.slug}`}  className='text-md' >
              {post.title}
            </Link>
            </div>
         </div> 

      ))}
    </div>
  )
}

export default PostWidget
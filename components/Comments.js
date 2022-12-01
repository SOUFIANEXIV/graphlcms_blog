import React, { useEffect, useState } from 'react'
 import moment from 'moment'
 import parse from 'html-react-parser'
 import { getComments } from '../services'


const Comments = ({slug}) => {
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    getComments(slug).then((result)=>
      setComments(result))
  },[])

  return (
    <>
    {comments.length > 0 && (
      <div className='bg-white shadow-lg rounded-lg p-8 pb-8 mb-8 mt-8'>
        <h3 className='text-xl font-semibold text-gray-400 pb-8'>

          {comments.length}
          {''}
          Comments

        </h3>
        {comments.map((comment)=>(
          <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
            <p className='mb-4'>
              <span className='pr-3'>{comment.name}</span>
              {''}
              on 
              {''}
             <span className='text-xs pl-3'> : {moment(comment.createdAt).format('MM/ DD/YYYY')}</span>
            </p>
            <p className='whitespace-pre-line text-gray-500 w-full'>
              {parse(comment.comment)}
            </p>
          </div>
        ))}
        
      </div>
    )}
    </>
  )
}

export default Comments
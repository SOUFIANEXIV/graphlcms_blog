import React from 'react'
import Image from 'next/image'


const Author = ({author}) => {
  return (
    <div className='bg-white   mt-20  pt-20 pb-20 text-center relative rounded-lg shadow-lg '  >
      <div className='absolute left-0 right-2 -top-7'>
 <Image
      alt={author.name}
      unoptimized
      
      height={40}
      width={40}
      src={author.photo.url}
      className='rounded-full align-middle  inline-block  '

      />
      <h3 className='font-bold  text-xl '>{author.name}</h3>
 <p className='mb-8 '>{author.bio}</p>
      </div>
     

    
    </div>
  )
}

export default Author
import React ,{useState,useEffect}from 'react'
import Link from 'next/link'
import { getCategries } from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    
  getCategries().then((newCategories)=>setCategories(newCategories))
    return () => {
      
    }
  }, [])
  


  return (
    <div className='bg-white    shadow-lg p-8 mb-8 pt-2 rounded-lg  ' >
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((category)=>(
        <Link  key={category.slug}  href={`/category/${category.slug}`} className=' cursor-pointer font-normal block  first-letter:uppercase '>
          <span className='pb-3 mb-3 text-xl px-3  font-normal text-gray-600   '>{category.name}</span>
          </Link>
      ))}
      </div>
  )
}

export default Categories
import React,{useContext} from 'react'
import{useState,useEffect}from 'react'


import Link from 'next/link'
import { getCategries } from '../services'



const Header = () => {
      const [categories, setCategories] = useState([]);
  useEffect(() => {
    
  getCategries().then((newCategories)=>setCategories(newCategories))
    return () => {
      
    }
  }, []);
  


  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
<div className='md:float-left block'  >
    <Link href='/' >
        <span className='cursor-pointer font-bold text-4xl' >BLOG</span>
    </Link>

</div>
<div className='hidden md:float-left md:contents'>
    {categories.map((Category)=>(
        <Link key={Category.slug} href={`/category/${Category.slug}`}>
            <span className='md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer  first-letter:uppercase ' >{Category.name}</span>
        </Link>
        
    ))}

</div>
        </div>
    </div>
  )
};

export default Header
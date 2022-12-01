import React, { useEffect, useRef, useState } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localstorage,setLocalstorage]=useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const commentEl= useRef();
  const nameEl= useRef();
  const emailEl= useRef();
  const storeDataEl=useRef();


  useEffect(()=>{
    nameEl.current.value=window.localStorage.getItem('name');
    emailEl.current.value=window.localStorage.getItem('email')

  },[])
  const handlComment=()=>{

    setError(false);
    const {value:comment}=commentEl.current;
    const {value:name}=nameEl.current;
    const {value:email}=emailEl.current;
    const {checked:storeData}=storeDataEl.current;




if(!comment || !name || !email){

  setError(true);
  return;
}
const commentObj={name,email,comment,slug};
if(storeData){
  window.localStorage.setItem('name',name);
  window.localStorage.setItem('email',email);

}else{
localStorage.removeItem('name',name);
localStorage.removeItem('email',email);
}

submitComment(commentObj)
.then((res) => {
  
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  })


}


  return (
    <div className='bg-white shadow-lg rounded-lg mt-11 pb-8 p-8'>
     <h3 className='text-xl mb-8 font-semibold border-b pb-4'>CommentForms</h3> 
     <div className='grid grid-cols-1 gap-4 mb-4'>

<textarea ref={commentEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 "

placeholder='comment'
required
name='comment'>

</textarea>
     </div>
     <div className='grid grid-cols-1 lg:grid-cols-2  gap-4 mb-4 '>
      <input 
      type='text'
      name='name'
      ref={nameEl}
      placeholder='Your name'
      required
      className='py-4 px-4  inline-block     outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 '
      
      />


<input 
      type='email'
      name='email'
      ref={emailEl}
      placeholder='Your email'
      required
      className='py-4  px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 '
      
      />
      {error && <span className='text-xl float-right font-semibold text-red-500 '>All file are required</span>}

</div>
<div className='grid grid-cols-1   gap-4 mb-4'>
  <div>
  
  <input
  name='storeData'
  type='checkbox'
  ref={storeDataEl}
  
  id='storeData'
  className='inline-block'
  
  />
  <label className='text-gray-500 cursor-pointer pl-5' htmlFor='storeData'>Save</label>
</div>
</div>
<div className='mt-8'>
  <button type='button' className='
  transition duration-200 case bg-cyan-500  text-white rounded-full px-5 py-3 inline-block  hover:bg-red-400 hover:text-white
  
  ' onClick={handlComment}>
    Send 
  </button>
  {showMessage && <span className='text-xl float-right font-semibold text-green-500 mt-3'>Thanks for you comment</span>}

</div>
     
     
     </div>
  )
}

export default CommentsForm
import React, { useState, useRef } from 'react'
function UseRefHook() {
  const countValue= useRef(0);
//  const [count, setCount]= useState(0);
  function counter(){
    countValue.current += 1;
    console.log(`count Value is : ${countValue.current}`)
    // setCount(count+1)
    // console.log(`count value is: ${count}`)
  }
  console.log("component is rendered"); 
  return (
    <div>     
        <button  className='bg-red-500 text-white p-2' onClick={counter}>Click Me</button>       
    </div>
  )
}
export default UseRefHook
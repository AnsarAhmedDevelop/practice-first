import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild'

function UseCallbackHook() {
const [count, setCount]=useState(0);
const Learning= useCallback( function learning(){
    console.log("Learning Function Called")
},[])
  
  return (
    <div>
        <CallbackChild learn={Learning}/>
        <button onClick={()=>setCount(count+1)} className='bg-red-600 px-3 py-2 my-3 text-white'>Increment</button>
    </div>
  )
}
export default UseCallbackHook
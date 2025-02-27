import React, { useEffect, useState } from 'react'
function EffectHook() {
    const [countOne, setCountOne]=useState(0);
    const [countTwo, setCountTwo]=useState(0);
    useEffect(()=>{
        alert("component is mounted");
    },[])
  return (
    <div className='m-5'>
        <p>Count One is {countOne}</p>
        <button onClick={()=>setCountOne(countOne+1)} className='bg-black text-white px-3 py-2'>button One</button>
        <br />
        <br />
        <p>Count Two is {countTwo}</p>
        <button onClick={()=>setCountTwo(countTwo+1)} className='bg-black text-white px-3 py-2'>button Two</button>
        <br />
        <br />
    </div>
  )
}
export default EffectHook
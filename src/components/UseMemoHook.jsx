import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [count, setCount]=useState(0);
    const [price, setPrice]=useState(0);

    const mutiplication=useMemo(function multiply(){
        console.log("i am Called in Multiplication Function")
        return count*10;
    },[count])

 
  return (
    <div>
        <p>Multiply by 10 to count value : {mutiplication}</p>
        <button className='bg-red-600 text-white px-2 py-1 mt-2' onClick={()=>setCount(count+1)}>Increment by 1 and Count is {count}</button> 
        <br />
        <button className='bg-red-600 text-white px-2 py-1 mt-7' onClick={()=>setPrice(price+1)}>Increase price by 1 and Price is {price}</button>
    </div>
  )
}

export default UseMemoHook
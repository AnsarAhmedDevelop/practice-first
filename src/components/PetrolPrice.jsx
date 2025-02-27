import React from 'react'
import useCount from './useCount'

function PetrolPrice() {
   const [increase, decrease, count] =useCount();
    // common logic start
  // const [count, setCount] = useState(90);
  // function increase(){
  //   setCount(count+1)
  // }
  // function decrease(){
  //   setCount(count-1)
  // }
   // common logic end
  return (
    <div className='m-5'>
        <p>Petrol Price is {count}</p>
        <button onClick={increase} className='bg-red-600 text-white px-3 py-2'>Increase</button>
        <button onClick={decrease} className='bg-blue-600 ml-3 text-white px-3 py-2'>Decrease</button>
    </div>
  )
}

export default PetrolPrice
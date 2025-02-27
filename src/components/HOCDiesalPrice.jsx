import React from 'react'
import HigherOrderCompo from './HigherOrderCompo'


function HOCDiesalPrice(props) {
 
  // common logic start
//   const [count, setCount] = useState(90);
//   function increase(){
//     setCount(count+1)
//   }
//   function decrease(){
//     setCount(count-1)
//   }
  // common logic end
  return (
    <div className='m-5'>
      <p>Diesal Price is {props.count}</p>
      <button onClick={props.increase} className='bg-red-600 text-white px-3 py-2'>Increase</button>
      <button onClick={props.decrease} className='bg-blue-600 ml-3 text-white px-3 py-2'>Decrease</button>
    </div>
  )
}
export default HigherOrderCompo(HOCDiesalPrice)
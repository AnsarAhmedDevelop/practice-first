import React from 'react'
import ChildMemo from './ChildMemo'

function MemoHook() {
    const [count, setCount] = React.useState(0);
    const [data, setData] = React.useState(1);
    return (
        <div className='m-10'>
            <h2> This is Parent Component for Memo</h2>
            <ChildMemo data={data} />
            <button onClick={() => {setCount(count + 1),setData(2)}} className='bg-red-600 px-3 py-2 my-3 text-white' >Increment Count: {count} </button>
               
        </div>
    )
}
export default MemoHook
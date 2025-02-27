import React, { useState } from 'react'

function HigherOrderCompo(PriceCompo) {

    function InnerFunction() {
        // common logic
        const [count, setCount] = useState(90);
        function increase() {
            setCount(count + 1)
        }
        function decrease() {
            setCount(count - 1)
        }
        //Inner Function return
        return (<PriceCompo count={count} increase={increase} decrease={decrease}/>)
    }


    // HOC return
    return InnerFunction
}
export default HigherOrderCompo
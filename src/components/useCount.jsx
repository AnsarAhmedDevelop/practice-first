import React, { useState } from 'react'

function useCount() {
    // common logic start
    const [count, setCount] = useState(90);
    function increase() {
        setCount(count + 1)
    }
    function decrease() {
        setCount(count - 1)
    }
    // common logic end
    return [increase, decrease, count]
}

export default useCount
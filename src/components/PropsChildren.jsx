import React from 'react'
import SubChild from './SubChild'

function PropsChildren() {
  return (
    <div>
        <SubChild title="Good Morning">
            <h2>Title One Inside Sub Child</h2>
            <p>content inside the Sub Child.</p>
        </SubChild>
        <SubChild >
            <h2 className='font-bold'>Title Two Inside Sub Child</h2>
            <p>content inside the Sub Child.</p>
        </SubChild>
    </div>
  )
}
export default PropsChildren
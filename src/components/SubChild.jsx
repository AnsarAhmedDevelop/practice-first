import React from 'react'

function SubChild({title,children}) {
  return (
    <div className='m-5 '>
        <p>{title}</p>
        <div>
            {children}
        </div>
    </div>
  )
}

export default SubChild
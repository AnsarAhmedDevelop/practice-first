import React, { memo } from 'react'

const ChildMemo=memo(function  ({data}) {
    console.log("Hello Data is",data)
  return (
    <div></div>
  )
})

export default ChildMemo



import React, { memo } from 'react'

function CallbackChild(props) {
    console.log(props.learn,"In child Component");
  return (
    <div></div>
  )
}

export default memo(CallbackChild)
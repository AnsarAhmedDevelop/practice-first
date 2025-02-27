import React from 'react'
import HOCPetrolPrice from './HOCPetrolPrice'
import HOCDiesalPrice from './HOCDiesalPrice'

function HigherOrderCompoParent() {
  return (
    <div>
        <HOCPetrolPrice />
        <HOCDiesalPrice />
    </div>
  )
}

export default HigherOrderCompoParent
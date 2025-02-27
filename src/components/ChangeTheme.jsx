import React, { useState } from 'react'

function ChangeTheme() {
  const [isDarkMode, setIsDarkMode]= useState(false);
  function DarkTheme(){
    setIsDarkMode(!isDarkMode);
  }
  return (  
    <div className={`flex flex-col h-screen items-center justify-center 
    ${isDarkMode?'bg-black text-white':'bg-white text-black'}
    `}>
      <h2 className='text-2xl font-semibold'>Hello Developers</h2>
      <button className='bg-blue-600 my-5 text-white px-4 py-3' onClick={DarkTheme}>{isDarkMode?"Switch to Light Mode":"Switch to Dark Mode"} </button>
    </div>
  )
}

export default ChangeTheme
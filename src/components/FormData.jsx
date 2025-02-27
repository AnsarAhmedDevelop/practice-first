import React, { useState } from 'react'
function FormData() { 
   const [data, setData]= useState({
        fName:"",
        lName:"",
        email:""
    })

    function handleChange(event){
        // console.log(event)
      const  {name, value}=event.target;
    //   console.log(name);
    //   console.log(value);
      setData({...data,[name]:value});
    //   console.log(data);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
    }
    return (
        <div className='m-5'>
            <form onSubmit={handleSubmit}>
                <input type='text' value={data.fName} name='fName' className='bg-amber-50 border border-black px-2'
                    onChange={handleChange} placeholder='Enter First Name' />
                <br />
                <br />
                <input type='text' value={data.lName} name='lName' className='bg-amber-50 border border-black px-2'
                    onChange={handleChange}  placeholder='Enter Last Name' />
                <br />
                <br />
                <input type='text' value={data.email} name='email' className='bg-amber-50 border border-black px-2'
                    onChange={handleChange}  placeholder='Enter email' />
                <br />
                <button type='submit' className='bg-blue-600 text-white p-2 mt-3' >Submit</button>
            </form>
        </div>
    )
}
export default FormData
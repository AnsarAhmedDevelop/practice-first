import React from 'react'

function PropsChild(props) {  
    // const {name,desig, exp}=props;
    return (
        <div className='m-10'>
            <div className='my-5'>
                <h2 className='font-semibold'>Hello, i am {props.name}</h2>
                <p>I am a {props.desig}</p>
                <p>i have {props.exp} years of experience</p>
            </div>
        </div>
    )
}

export default PropsChild
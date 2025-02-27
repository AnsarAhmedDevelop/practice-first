import React, { useState } from 'react'

function StateHook() {
    const [AllTasks, setAllTasks] = useState(['Task 1', 'Task 2']);
    function allTask(){
        setAllTasks([...AllTasks,`Task ${AllTasks.length + 1}`])
    }
    return (
        <div className=''>
            <ul>
                {AllTasks.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
            <button onClick={allTask} className='bg-blue-400 text-white px-3 py-2 cursor-pointer'>Add Task</button>
        </div>
    )
}

export default StateHook
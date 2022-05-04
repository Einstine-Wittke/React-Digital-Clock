import React, { useState } from 'react'

function DigiClock() {

    let time = new Date().toLocaleTimeString()

    const [currTime,setCurrTime]=useState(time)

    const UpdateTime = ()=>{
        time = new Date().toLocaleTimeString()
        setCurrTime(time)
        // console.log("clicked",time);

    };
    setInterval(UpdateTime,1000)
  return (
    <div className='container'>
        <h1 className='text'>{currTime}</h1>
    </div>
  )
}

export default DigiClock
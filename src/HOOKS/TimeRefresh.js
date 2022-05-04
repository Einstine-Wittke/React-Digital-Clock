import React, { useState } from 'react'

function TimeRefresh() {

    var date = new Date().toLocaleTimeString()
    const [time, setTime] = useState(date)
    console.log("clicked", date);
    const GetTime = () => {
        var newdate = new Date().toLocaleTimeString()
        setTime(newdate)
        console.log("clicked", date);
    }
    return (
        <>
        <div className='container'>
            <h1>{time}</h1>
            <button onClick={GetTime}><h3>Get Current Time</h3></button>
            {/* <button onClick={()=>setTime(date)}>Get Time</button> */}
        </div>
        </>
    )
}

export default TimeRefresh
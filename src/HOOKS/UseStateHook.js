import React,{useState} from 'react'

function UseStateHook() {
    const [count, setCount] = useState(0)
    console.log("clicked",count);
    return (
      <>
        <h1>   {count}   </h1>
      <button onClick={()=>setCount(count+2)} >Click Me</button>
      </>
    )
}

export default UseStateHook
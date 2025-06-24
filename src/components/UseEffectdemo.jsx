import React, { useEffect, useState } from 'react'

function UseEffectdemo() {

    const [data,setData] = useState(0)
     const [count,setCount] = useState(10)

    useEffect(()=>{
        console.log("Component Mounted..")
    } , [])

    useEffect(()=>{
        console.log("Data Updated..")
        return function(){
            console.log("Component Unmounted")
        }
    } , [data])

     useEffect(()=>{
        console.log("Count Updated..")
    } , [count])


  return (
    <>
        <div className='text-center'>
      <h1 className='text-primary'>Use-Effect Hook Demo</h1>
      <br></br> <br></br>
      <p>{data}</p>
      <button className='btn btn-danger' onClick={()=>setData(data+1)}>Increment Data</button>
      <br></br> <br></br>
      <p>{count}</p>
      <button className='btn btn-success' onClick={()=>setCount(count+1)}>Increment Count</button>
    
    </div>
    
    </>
  )
}

export default UseEffectdemo

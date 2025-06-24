import React, { useMemo, useState } from 'react'

function UseMemo() {

     const [data1,setData] = useState(0)
     const [count1,setCount] = useState(10)

     function largeFun(num){
        for(let i=0 ; i<=100 ; i++){
            console.log(num*i)
        }
     }

     const memofun = useMemo(()=>{
        return largeFun(5)
     },[data1])

  return (
    <>
        <div className='text-center'>
            {memofun}
      <h1 className='text-primary'>Use-Memo Hook Demo</h1>
      <br></br> <br></br>
      <p>{data1}</p>
      <button className='btn btn-danger' onClick={()=>setData(data1+1)}>Increment Data</button>
      <br></br> <br></br>
      <p>{count1}</p>
      <button className='btn btn-success' onClick={()=>setCount(count1+1)}>Increment Count</button>
    
    </div>
    
    </>
  )
}

export default UseMemo

import React from 'react'
import UseContextC from './UseContextC'

function UseContextB() {
  return (
    <>
       <div className='text-center'>
          <h1 className='text-success'> B Component</h1>
          <UseContextC></UseContextC>
         
       </div>
       </>
  )
}

export default UseContextB

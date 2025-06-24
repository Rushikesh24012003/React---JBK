import React, { useContext } from 'react'
import {namedata,agedata,emaildata} from './UseContextA'

function UseContextD() {

    const a = useContext(namedata)
    const b = useContext(agedata)
    const c = useContext(emaildata)
  return (
    <>
              <div className='text-center'>
                 <h1 className='text-secondary'> D Component</h1>

                 <p>Name : {a}</p>
                 <p>Age : {b}</p>
                 <p>email : {c}</p>
                
              </div>
              </>
  )
}

export default UseContextD

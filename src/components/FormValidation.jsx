import React, { useState } from 'react'

function FormValidation() {

    const [name , setName] = useState()
    const [mobile , setMobile] = useState()
    const [error , setError] = useState(false)
    const [error1 , setError1] = useState(false)
    const pattern  = /^[789]\d{9}$/

    function nHandler(e){
        let value = e.target.value
        let len = e.target.value.length
        setName(value)

        if(len<=2){
            setError(true)
        }else{
            setError(false)
        }
    }

    function mHandler(e){
         let value = e.target.value
         

        if(!pattern.test(value)){
            setError1(true)
        }else{
            setError1(false)
        }  

    }

  return (
   <>
        <h1 className="text-center text-primary">Form Validation : Example 1</h1>
      <div>
        <form
          style={{
            border: "2px solid black",
            width: "50rem",
            height: "200px",
            margin: "auto",
            backgroundColor:"#F0FFFF"
          }}
        >
          <label style={{ marginTop: "15px", marginLeft: "10px" }}>
            Enter your name :{" "}
          </label> &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="name"
            value={name}
            onChange={nHandler}
          />
          <p>{error && <p style={{color:"red" , marginLeft:"9rem"}}>Name should be greater than 2 characters</p>}</p>
          
          <br></br>
          
          <label style={{ marginLeft: "10px" }}>Enter your mobile : </label>&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="mobile"
            value={mobile}
            onChange={mHandler}
          />
          <p>{error1 && <p style={{color:"red" , marginLeft:"9rem"}}>Invalid mobile number</p>}</p>

          </form>
          </div>
      
    
   </>
  )
}

export default FormValidation

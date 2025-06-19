import React, { useState } from 'react'

function StudentObject() {

    const [status , setStatus] = useState(false)
    const [status1 , setStatus1] = useState(false)
    const [status2 , setStatus2] = useState(false)
    const [student , setStudent] = useState({
        name : "" ,
        english : "" ,
        maths : "", 
        science : "",

    })

    let om = parseInt(student.english) + parseInt(student.maths) + parseInt(student.science)
    let tp = om/300*100 
    let ttp = tp.toFixed(2)


    function inputHandler(e){
        setStudent({...student , [e.target.name] : e.target.value})
    }

    function submit(){
        setStatus(true)
        setStatus1(false)
        setStatus2(false)
    }

    function total(){
        setStatus1(true)
        setStatus(false)
         setStatus2(false)
    }

    function percent(){
        setStatus2(true)
        setStatus(false)
        setStatus1(false)
    }

    function clear(){
        student.name = ""
        student.english = ""
        student.maths = ""
        student.science = ""
        setStatus(false)
        setStatus1(false)
        setStatus2(false)
    }

  return (
    <>
       <h1 className="text-center text-primary">Student Marksheet Form</h1>
      <div style={{
            border: "2px solid black",
            width: "50rem",
            height: "580px",
            margin: "auto",
            backgroundColor:"#F0FFFF"
          }}>
        <form>
          <label style={{ marginTop: "15px", marginLeft: "10px" }}>
            Enter your name :{" "}
          </label> &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={inputHandler}
          />
          <br></br>
          <br></br>
          <label style={{ marginLeft: "10px" }}>Enter English Marks : </label>&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="english"
            value={student.english}
            onChange={inputHandler}
          />
          <br></br>
          <br></br>
          <label style={{ marginLeft: "10px" }}>Enter Maths Marks : </label>&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="maths"
            value={student.maths}
            onChange={inputHandler}
          />
           <br></br>
          <br></br>
          <label style={{ marginLeft: "10px" }}>Enter Science Marks : </label>&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="science"
            value={student.science}
            onChange={inputHandler}
          />
          <br></br>
          <br></br>
          <input
            type="button"
            value="Submit"
            onClick={submit}
            style={{ marginLeft: "300px" }}
            className="btn btn-warning"
          />&nbsp;&nbsp;
          <input
            type="button"
            value="Total Marks"
            onClick={total}
            className="btn btn-warning"
          />&nbsp;&nbsp;
          <input
            type="button"
            value="Calculate Percentage"
            onClick={percent}
            className="btn btn-warning"
          />&nbsp;&nbsp;
          <input
            type="button"
            value="Clear"
            onClick={clear}
            className="btn btn-warning"
          /> 

           <div style={{marginLeft:"10px" , marginTop:"5px"}}>
            {
            status ? (
                        <>
                         <p>Student Name : {student.name}</p>
                         <p>Student English Marks : {student.english}</p>
                          <p>Student Maths Marks : {student.maths}</p>
                           <p>Student Science Marks : {student.science}</p>
                        </>
                     ) : ""
          }
           </div>

           <div style={{marginLeft:"10px" , marginTop:"5px"}}>
            {
            status1 ? (
                        <>
                        <p> Student Name : {student.name}</p>
                         <p>Total Obtained Marks : {om}</p>
                          <p>Total Marks : 300</p>
                        </>
                     ) : ""
          }
           </div>

            <div style={{marginLeft:"10px" , marginTop:"5px"}}>
            {
            status2 ? (
                        <>
                        <p> Student Name : {student.name}</p>
                         <p>Total Obtained Marks : { parseInt(student.english) + parseInt(student.science) + parseInt(student.maths)}</p>
                         <p>Total Marks : 300</p>
                         <p>Percentage : {ttp}</p>
                        </>
                     ) : ""
          }
           </div>


          </form>
          </div>
          
          
    </>
  )
}

export default StudentObject

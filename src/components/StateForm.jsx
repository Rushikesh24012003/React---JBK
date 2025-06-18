import React, { useState } from "react";

function StateForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [hobbies, setHobbies] = useState();
  const [status, setStatus] = useState(false);

  function submit() {
    setStatus(true);
  }

  function clear(){
    setName("")
    setEmail("")
    setPassword("")
    setGender("")
    setHobbies("")
    setStatus(false)
  }

  const handleChange = (e) => {
    setGender(e.target.value)
  }

  return (
    <>
      <h1 className="text-center text-primary">Registration Form</h1>
      <div>
        <form
          style={{
            border: "2px solid black",
            width: "50rem",
            height: "580px",
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
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <br></br>
          <label style={{ marginLeft: "10px" }}>Enter you email : </label>&nbsp;&nbsp;&nbsp;
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label style={{ marginLeft: "10px" }}>Enter your password : </label>&nbsp;&nbsp;&nbsp;
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <label style={{ marginLeft: "10px" }}>Choose gender : </label>&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="male"
            value="male"
            checked= {gender === "male"}
            onChange={handleChange}
            style={{ marginLeft: "5px" }}
          />
          Male
          &nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="female"
            value="female"
             checked= {gender === "female"}
            onChange={handleChange}
            style={{ marginLeft: "5px" }}
          />
          Female
          &nbsp;&nbsp;
          <br></br>
          <br></br>
          <label style={{ marginLeft: "10px" }}>Enter your Hobbies :</label>&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            type="button"
            value="submit"
            onClick={submit}
            style={{ marginLeft: "300px" }}
            className="btn btn-danger"
          />
          &nbsp;&nbsp;
          <input
            type="button"
            value="clear"
            onClick={clear}
            className="btn btn-success"
          />

          <div style={{marginLeft:"10px" , marginTop:"5px"}}>
            {status ? (
        <>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
          <p>Hobbies : {hobbies}</p>
          <p>
            Gender : {gender}
          </p>
        </>
      ) : (
        ""
      )}
          </div>
        </form>
      </div>

      
    </>
  );
}

export default StateForm;

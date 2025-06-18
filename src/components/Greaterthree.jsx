import React, { useState } from "react";

function Greaterthree() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState(0);
  const [status, SetStatus] = useState(false);

  

  function findGreater() {

    if (a >= b && a >= c) {
    setResult(a);
  } else if (b >= a && b >= c) {
    setResult(b);
  } else {
    setResult(c);
  }

    SetStatus(true);
  }

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          width: "50rem",
          height: "400px",
          margin: "auto",
          backgroundColor: "lightgrey",
        }}
      >
        <h3 className="text-center text-primary mt-2">
          Find Greater between Three : State Example
        </h3>
        <label style={{ marginLeft: "5px", marginTop: "15px" }}>
          Enter the number 1 :{" "}
        </label>
        &nbsp;&nbsp;
        <input type="text" name="num" onChange={(e) => setA(e.target.value)} />
        <br></br>
        <br></br>
        <label style={{ marginLeft: "5px", marginTop: "15px" }}>
          Enter the number 2 :{" "}
        </label>
        &nbsp;&nbsp;
        <input type="text" name="num" onChange={(e) => setB(e.target.value)} />
        <br></br>
        <br></br>
        <label style={{ marginLeft: "5px", marginTop: "15px" }}>
          Enter the number 3 :{" "}
        </label>
        &nbsp;&nbsp;
        <input type="text" name="num" onChange={(e) => setC(e.target.value)} />
        <br></br>
        <br></br>
        <input
          type="button"
          value="Find Greater"
          name="greater"
          onClick={findGreater}
          style={{ marginLeft: "200px" }}
          className="btn btn-success"
        />
        <br></br>
        <br></br>

        {
            status ? (<><p style={{marginLeft:"5px"}}>Greater Among three is : {result}</p></>) : ("")
        }

      </div>

      
    </>
  );
}

export default Greaterthree;

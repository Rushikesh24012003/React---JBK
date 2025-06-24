import React, { useRef } from "react";

function UseRefDemo() {

    const refElement = useRef()

    const handler = () =>{
        refElement.current.style.color = "red"
    }

    const handler1 = () =>{
        refElement.current.style.color = ""
    }

  return (
    <>
     <h1 className="text-primary text-center">useRef Example</h1>
      <div className="text-center" style={{width:"50rem" , margin:"auto" , border:"2px solid black" , backgroundColor:"lightblue"}}>
        <p ref={refElement}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo
          libero aperiam, sapiente suscipit perferendis non facere minima
          consectetur, recusandae vitae ullam eaque. Soluta, in assumenda amet
          recusandae ipsam dolore. <br></br>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate, necessitatibus ullam id corporis sed
          iusto veniam animi qui. Corporis, aliquid. Sed amet enim facere ipsa
          fugiat distinctio? Laboriosam, asperiores aspernatur?
        </p>

        <button className="btn btn-success mb-3" onClick={handler}>Change Paragraph Style</button> &nbsp;&nbsp;
        <button className="btn btn-success mb-3" onClick={handler1}>Original Paragraph Style</button>
      </div>
    </>
  );
}

export default UseRefDemo;

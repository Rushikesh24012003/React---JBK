import React from "react";
import UseContextB from "./UseContextB";
import { createContext } from "react";

const namedata = createContext();
const agedata = createContext();
const emaildata = createContext();

function UseContextA() {
  const name = "Rushikesh";
  const age = "23";
  const email = "rushi@gmail.com";
  return (
    <>
      <div className="text-center">
        <h1 className="text-info">useContext Demo</h1>
        <br></br>
        <br></br>
        <h1 className="text-primary"> A Component</h1>

        <namedata.Provider value={name}>
          <agedata.Provider value={age}>
            <emaildata.Provider value={email}>
              <UseContextB></UseContextB>
            </emaildata.Provider>
          </agedata.Provider>
        </namedata.Provider>
      </div>
    </>
  );
}

export default UseContextA;
export {namedata,agedata,emaildata}

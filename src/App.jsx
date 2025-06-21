import ArrayRendering from "./components/ArrayRendering"
import Clock from "./components/Clock"
import EventListner from "./components/EventListner"
import First from "./components/First"
import FormValidation from "./components/FormValidation"
import FormValidation1 from "./components/FormValidation1"
import Fourth from "./components/Fourth"
import Greaterthree from "./components/Greaterthree"
import Greet from "./components/Greet"
import MapFilterExample from "./components/MapFilterExample"
import Props from "./components/Props"
import Props2 from "./components/Props2"
import PropsAddition from "./components/PropsAddition"
import PropsFactorial from "./components/PropsFactorial"
import PropsSquare from "./components/PropsSquare"
import Second from "./components/Second"
import StateCalculator from "./components/StateCalculator"
import StateDemo from "./components/StateDemo"
import StateForm from "./components/StateForm"
import StatePractise from "./components/StatePractise"
import StudentObject from "./components/StudentObject"
import Third from "./components/Third"

function App() {
 
   let a = 5
  let b = 3
  let name = "RINKI"

  let info = [
  {
    m1 : "50" ,
    m2 : "60" , 
    m3 : "70"
  },
  {
    m1 : "80" ,
    m2 : "90" , 
    m3 : "100"
  }

]

  return (
    <>
     <div style={{'textAlign' : 'center' ,  'width' : '95rem'}}>
      <h1>HELLO , {name}...</h1>
      <p>Today's Date : {new Date().toLocaleDateString()}</p>
      <p>Current time : {new Date().toLocaleTimeString()}</p>
      <p>Addition : {a} + {b} : {a+b}</p>
     </div>

     <hr></hr>
     
     <First></First>

     <hr></hr>

     <Second></Second>

     <hr></hr>

     <Third></Third>

     <hr></hr>

     <Fourth></Fourth>

     <hr></hr>
     
     <ArrayRendering></ArrayRendering>

     <hr></hr>
    
    <MapFilterExample></MapFilterExample>

    <hr></hr>

    <Props Name="Rushikesh" Age="23" College="BVCOEL"></Props>

    <hr></hr>

    <Props2 data = {info}></Props2>

    <hr></hr>

    <PropsAddition a="5" b="3"></PropsAddition>

    <hr></hr>

    <PropsSquare value="3"></PropsSquare>

    <hr></hr>

    <PropsFactorial value="5"></PropsFactorial>

    <hr></hr>

    <Greet></Greet>

    <hr></hr>

    <EventListner></EventListner>

    <hr></hr>

    <StateDemo></StateDemo>

    <hr></hr>

    <StateCalculator></StateCalculator>

    <hr></hr>

    <StateForm></StateForm>

    <hr></hr>

    <StatePractise></StatePractise>

    <hr></hr>

    <Greaterthree></Greaterthree>

     <hr></hr>

    <StudentObject></StudentObject>

    <hr></hr>

    <Clock></Clock>

    <hr></hr>

    <FormValidation></FormValidation>

    <hr></hr>

    <FormValidation1></FormValidation1>

    <hr></hr>
    </>
  )
}

export default App


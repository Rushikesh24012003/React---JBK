import { useState } from "react";
import ArrayRendering from "./components/ArrayRendering";
import Clock from "./components/Clock";
import EventListner from "./components/EventListner";
import First from "./components/First";
import FormValidation from "./components/FormValidation";
import FormValidation1 from "./components/FormValidation1";
import Fourth from "./components/Fourth";
import Greaterthree from "./components/Greaterthree";
import Greet from "./components/Greet";
import MapFilterExample from "./components/MapFilterExample";
import Props from "./components/Props";
import Props2 from "./components/Props2";
import PropsAddition from "./components/PropsAddition";
import PropsFactorial from "./components/PropsFactorial";
import PropsSquare from "./components/PropsSquare";
import Second from "./components/Second";
import StateCalculator from "./components/StateCalculator";
import StateDemo from "./components/StateDemo";
import StateForm from "./components/StateForm";
import StatePractise from "./components/StatePractise";
import StudentObject from "./components/StudentObject";
import Third from "./components/Third";
import UseEffectdemo from "./components/UseEffectdemo";
import UseRefDemo from "./components/UseRefDemo";
import UseContextA from "./components/UseContextA";
import UseMemo from "./components/useMemo";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import PagenotFound from "./components/PagenotFound";
import User from "./components/User";
import Admin from "./components/Admin";
import Book from "./components/Book";
import Employee from "./components/Employee";

function App() {
  let a = 5;
  let b = 3;
  let name = "RINKI";

  let info = [
    {
      m1: "50",
      m2: "60",
      m3: "70",
    },
    {
      m1: "80",
      m2: "90",
      m3: "100",
    },
  ];

  const [status, setStatus] = useState(true);

  const navigate = useNavigate();
  const ser = () => {
    navigate("/service");
  };

  const ad = () => {
    navigate("/service/admin");
  };

  const user = () => {
    navigate("/service/user");
  };

  return (
    <>
      <div style={{ textAlign: "center", width: "95rem" }}>
        <h1>HELLO , {name}...</h1>
        <p>Today's Date : {new Date().toLocaleDateString()}</p>
        <p>Current time : {new Date().toLocaleTimeString()}</p>
        <p>
          Addition : {a} + {b} : {a + b}
        </p>
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

      <Props2 data={info}></Props2>

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

      <div className="text-center">
        <button className="btn btn-warning" onClick={() => setStatus(!status)}>
          Toggle Component
        </button>
        <br></br> <br></br>
        {status ? <UseEffectdemo></UseEffectdemo> : ""}
      </div>

      <hr></hr>

      <UseRefDemo></UseRefDemo>

      <hr></hr>

      <UseContextA></UseContextA>

      <hr></hr>

      <UseMemo></UseMemo>

      <hr></hr>

      <div className="container">
        <h1 className="text-primary text-center">
          Browser Router Example : Basic Routing
        </h1>
        <Link to="">Home</Link> &nbsp;&nbsp;
        <Link to="service">Services</Link> &nbsp;&nbsp;
        <Link to="about">About</Link> &nbsp;&nbsp;
        <Link to="profile">Profile</Link> &nbsp;&nbsp;
        <br></br>
        <br></br>
        <button onClick={ser}>Show services</button> &nbsp;&nbsp;
        <button onClick={ad}>Show Admin</button> &nbsp;&nbsp;
        <button onClick={user}>Show Users</button>
      </div>

      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="service" element={<Service></Service>}>
          <Route path="admin" element={<Admin></Admin>}></Route>
          <Route path="user" element={<User></User>}></Route>
        </Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>

      <hr></hr>

      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{width:'60rem' , margin:"auto"}}>
        <a class="navbar-brand" href="">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="book">
                Book
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="employee"
                id="navbar"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Employee
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="help">
                Help
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <hr></hr>

      <Routes>
        <Route path="" element={<Home></Home>}>Home</Route>
        <Route path="book" element={<Book></Book>}></Route>
        <Route path="employee" element={<Employee></Employee>}></Route>
        <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;

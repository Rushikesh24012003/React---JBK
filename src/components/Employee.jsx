import React from "react";
import { Link } from "react-router-dom";

function Employee() {
  const employees = [
    {
      id: 1,
      name: "Rahul Sharma",
      profession: "Software Engineer",
      salary: 65000,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Anita Verma",
      profession: "UI/UX Designer",
      salary: 58000,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Suresh Iyer",
      profession: "Backend Developer",
      salary: 72000,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Priya Mehta",
      profession: "Project Manager",
      salary: 90000,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Amit Kulkarni",
      profession: "DevOps Engineer",
      salary: 80000,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
    id: 6,
    name: "Neha Patil",
    profession: "Data Analyst",
    salary: 70000,
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 7,
    name: "Rohit Deshmukh",
    profession: "Frontend Developer",
    salary: 60000,
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 8,
    name: "Sneha Joshi",
    profession: "QA Engineer",
    salary: 62000,
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: 9,
    name: "Vikram Singh",
    profession: "Cloud Architect",
    salary: 95000,
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: 10,
    name: "Meena Rao",
    profession: "AI Researcher",
    salary: 105000,
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  }
  ];

  return (
    
    <>
       <table class="table" style={{margin:"auto" , width:"50rem" , border:"2px solid black"}}>
          <thead class="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Profession</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => {
              return (
                <>
                  <tr>
                    <td><Link to={`${e.id}`}>{e.id}</Link></td>
                    <td>{e.name}</td>
                    <td>{e.profession}</td>
                    <td>{e.salary}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <br></br><br></br>


      <div
        style={{
          display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
        }}
      >
        {employees.map((e) => {
          return (
            <div
              className="card"
              style={{
                width: "30%",
                minWidth: "250px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                className="card-img-top"
                src={e.image}
                alt="Card image cap"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Employee Id:-{e.id}</h5>
                <p className="card-text">
                  <b>Name</b>:-{e.name}
                </p>
                <p className="card-text">
                  <b>Profession</b>:-{e.profession}
                </p>
                <p className="card-text">
                  <b>Salary</b>:-{e.salary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Employee;

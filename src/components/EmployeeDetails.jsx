import React from 'react'
import { useParams } from 'react-router-dom';

function EmployeeDetails() {

    const {id} = useParams()

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

  let filteredEmp = employees.filter((e) => e.id == id)

  return (
    <>
    
    <div className='container mt-4 w-75 m-auto '>
                <br></br>
                     {
                        filteredEmp.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{width:"25rem"}}>
                                        <img className="card-img-top" src={e.image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Employee Name:-{e.name}</h5>
                                                <p className="card-text"><b>Name</b>:-{e.name}</p>
                                                <p className="card-text"><b>Salary</b>:-{e.salary}</p>
                                                <p className="card-text"><b>Profession</b>:-{e.profession}</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
    
    </>
  )
}

export default EmployeeDetails

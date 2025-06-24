import React from 'react'

function Employee() {

    const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    profession: "Software Engineer",
    salary: 65000
  },
  {
    id: 2,
    name: "Anita Verma",
    profession: "UI/UX Designer",
    salary: 58000
  },
  {
    id: 3,
    name: "Suresh Iyer",
    profession: "Backend Developer",
    salary: 72000
  },
  {
    id: 4,
    name: "Priya Mehta",
    profession: "Project Manager",
    salary: 90000
  },
  {
    id: 5,
    name: "Amit Kulkarni",
    profession: "DevOps Engineer",
    salary: 80000
  }
];


  return (
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
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.profession}</td>
                  <td>{e.salary}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
  )
}

export default Employee

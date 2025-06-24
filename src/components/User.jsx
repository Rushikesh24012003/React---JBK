import React from "react";

function User() {
  const userinfo = [
    {
      name: "Rushikesh",
      email: "rushi@gmail.com",
      age: "23",
    },
    {
      name: "Rinki",
      email: "rinki@gmail.com",
      age: "22",
    },
    {
      name: "Nishchal",
      email: "nish@gmail.com",
      age: "24",
    },
  ];
  return (
    <>
      <table class="table" style={{margin:"auto" , width:"50rem" , border:"2px solid black"}}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {userinfo.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.age}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default User;

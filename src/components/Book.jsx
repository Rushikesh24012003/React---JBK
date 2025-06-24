import React from 'react'

function Book() {

    const reactBooks = [
  {
    id: 1,
    title: "Learning React",
    author: "Alex Banks & Eve Porcello",
    publisher: "O'Reilly Media",
    year: 2020
  },
  {
    id: 2,
    title: "React Up & Running",
    author: "Stoyan Stefanov",
    publisher: "O'Reilly Media",
    year: 2016
  },
  {
    id: 3,
    title: "Pure React",
    author: "Dave Ceddia",
    publisher: "Self-published",
    year: 2020
  },
  {
    id: 4,
    title: "Fullstack React",
    author: "Anthony Accomazzo et al.",
    publisher: "Fullstack.io",
    year: 2017
  },
  {
    id: 5,
    title: "The Road to React",
    author: "Robin Wieruch",
    publisher: "Self-published",
    year: 2022
  }
];


  return (
    <table class="table" style={{margin:"auto" , width:"50rem" , border:"2px solid black"}}>
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publisher</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {reactBooks.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.author}</td>
                  <td>{e.publisher}</td>
                  <td>{e.year}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
  )
}

export default Book

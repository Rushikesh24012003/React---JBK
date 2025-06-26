import React from 'react'
import { Link } from 'react-router-dom';

function Book() {

    const reactBooks = [
   {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    year: 1960,
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publisher: "Secker & Warburg",
    year: 1949,
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Charles Scribner's Sons",
    year: 1925,
    image: "https://covers.openlibrary.org/b/id/7352161-L.jpg"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "T. Egerton",
    year: 1813,
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Little, Brown and Company",
    year: 1951,
    image: "https://covers.openlibrary.org/b/id/8231852-L.jpg"
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publisher: "George Allen & Unwin",
    year: 1937,
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    publisher: "HarperOne",
    year: 1988,
    image: "https://covers.openlibrary.org/b/id/8108692-L.jpg"
  },
  {
    id: 8,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publisher: "Bloomsbury",
    year: 1997,
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
  },
  {
    id: 9,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publisher: "Doubleday",
    year: 2003,
    image: "https://covers.openlibrary.org/b/id/8319256-L.jpg"
  },
  {
    id: 10,
    title: "The Book Thief",
    author: "Markus Zusak",
    publisher: "Picador",
    year: 2005,
    image: "https://covers.openlibrary.org/b/id/8225634-L.jpg"
  }
];


  return (
    <>
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
                  <td><Link to={`${e.id}`}>{e.id}</Link></td>
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

      <div
        style={{
          display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
        }}
      >
        {reactBooks.map((e) => {
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
                <h5 className="card-title">Book Id:-{e.id}</h5>
                <p className="card-text">
                  <b>Title</b>:-{e.title}
                </p>
                <p className="card-text">
                  <b>Publisher</b>:-{e.publisher}
                </p>
                <p className="card-text">
                  <b>Author</b>:-{e.author}
                </p>
                 <p className="card-text">
                  <b>Year</b>:-{e.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    
    </>

      
  )
}

export default Book

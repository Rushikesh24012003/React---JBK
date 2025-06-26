import React from 'react'
import { useParams } from 'react-router-dom';

function BookDetailsSearch() {

    const {title} = useParams()

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

    let filteredBook = reactBooks.filter((e) => e.title == title)

  return (
    filteredBook.length !== 0 ?
    (
        <div className='container mt-4 w-75 m-auto '>
            <br></br>{
                filteredBook.map((e) => {
                            return (
                                <>
                                    <div className="card" style={{width:"25rem"}}>
                                        <img className="card-img-top" src={e.image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Book ID:-{e.id}</h5>
                                                <p className="card-text"><b>Title</b>:-{e.title}</p>
                                                <p className="card-text"><b>Publisher</b>:-{e.publisher}</p>
                                                <p className="card-text"><b>Author</b>:-{e.author}</p>
                                                <p className="card-text"><b>Year</b>:-{e.year}</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                    </div>
                                </>
                            )
                        })
            }
        </div>
    ) : <h1>Book not Found</h1>
  )
}

export default BookDetailsSearch

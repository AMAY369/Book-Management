import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { books } from '../utils/bookData';
import './styles/style.css'

function BookDetails() {
  const { id } = useParams();
  const[books, setBooks] = useState([])


  useEffect(()=>{
    fetchData()
  },[])

  const fetchData= async()=>{
    const response = await fetch('https://www.freetestapi.com/api/v1/books')
    const data = await response.json();
    setBooks(data);
  }

  return (
    <>
      {
        books.map((book) => (
          book.id == id ? (
            <div className="book-detail">

              <div key={id} className='book-card'>
                <img src={book.cover_image} alt="image" width="200" height="200" className='book-image' />
                <div>
                  <h1 className='book-title'>{book.title}</h1>
                  <p className='book-author'>{book.author}</p>
                  <p className='book-description'>{book.description}</p>
                </div>
              </div>
            </div>
          ) : null
        ))
      }
    </>
  )
}

export default BookDetails
import React from 'react'
import './styles/style.css';

function Book({book}) {
  return (
    <div className='book-card'>
      <img src={book.cover_image} alt="image" width="200" height="200" className='book-image'/>
      <div>
        <h1 className='book-title'>{book.title}</h1>
        <p className='book-author'>{book.author}</p>
        <p className='book-description'>{book.description}</p>
      </div>
    </div>
  )
}

export default Book
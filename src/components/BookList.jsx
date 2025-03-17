import React from 'react'
import Book from './Book'
import './styles/style.css';

function BookList({books}) {
  return (
    <div className='bookList'>
      {books.map((book)=>{
        return (
          <Book key={book.id} book ={book}/>
        )
      })}
    </div>
  )
}

export default BookList
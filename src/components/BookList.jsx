import React from 'react'
import { books } from '../utils/bookData.js'
import Book from './Book'
import './styles/style.css';

function BookList() {
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
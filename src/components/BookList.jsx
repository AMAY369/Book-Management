import React from 'react'
import { books } from '../utils/bookData.js'
import Book from './Book'

function BookList() {
  return (
    <div>
      {books.map((book)=>{
        return (
          <Book book ={book}/>
        )
      })}
    </div>
  )
}

export default BookList
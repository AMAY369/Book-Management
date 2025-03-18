import React from 'react'
import Book from './Book'
import './styles/style.css';
import { useState } from 'react';
import {books} from '../utils/bookData.js'
import { Link } from 'react-router-dom';

function BookList() {

  const [searchedInput, setSearchedInput] = useState('');
  const [searchedBooks, setSearchedBooks] = useState(books)
  console.log(searchedInput);

  const handleSearch = () => {
    const searchedBook = books.filter((book) => book.title.toLowerCase().includes(searchedInput.toLowerCase()));
    setSearchedBooks(searchedBook);
  }

  return (
    <>
      <div className='search'>
        <input type="text" placeholder='search books' className='search-input' onChange={(e) => setSearchedInput(e.target.value)} />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
      <div className='bookList'>
        {searchedBooks.map((book) => {
          return (
            <Link key={book.id} to={`/book/${book.id}`}><Book book={book} /></Link>
          )
        })}
      </div>
    </>
  )
}

export default BookList
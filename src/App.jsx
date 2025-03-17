
import { useState } from 'react'
import { books } from './utils/bookData.js';
import BookList from './components/BookList.jsx'
import './components/styles/style.css'

function App() {

  const [searchedInput, setSearchedInput] = useState('');
  const [searchedBooks, setSearchedBooks] = useState(books)
  console.log(searchedInput);

  const handleSearch = ()=>{
    const searchedBook = books.filter((book)=>book.title.toLowerCase().includes(searchedInput.toLowerCase()));
    setSearchedBooks(searchedBook);
  }

  return(
    <>
      <h1 className='heading'>Book Management Application</h1>
      <div className='search'>
        <input type="text" placeholder='search books' className='search-input' onChange={(e)=>setSearchedInput(e.target.value)}/>
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
      <BookList books={searchedBooks}/>
    </>
  )
}

export default App

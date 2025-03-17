
import BookList from './components/BookList.jsx'
import './components/styles/style.css'

function App() {

  return(
    <>
      <h1 className='heading'>Book Management Application</h1>
      <div className='search'>
        <input type="text" placeholder='search books' className='search-input'/>
        <button className='search-button'>Search</button>
      </div>
      <BookList/>
    </>
  )
}

export default App

import Bookshelf from "./Bookshelf";
import './App.css';
import React, {useState, useEffect} from 'react';
import {getAllBooks} from "./booksAPI";

function App() {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    getAllBooks().then((books) => {
      if (mounted) {
        setBooks(books);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div id="root">
      <div className="app">
        <div className="list-books">
          <div className="list-books-title"><h1>MITTReads</h1></div>
          <div className="list-books-content">
            <div>
              <Bookshelf books={books}/>
            </div>
          </div>
          <div className="open-search"><a href="search.html">Add a book</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;

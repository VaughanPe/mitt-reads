import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
  
  console.log(props.books);

  return ( 
    <div className="bookshelf">
  <h2 className="bookshelf-title">Title</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {props.books.map(book => {
        return <Book book={book}/>
      })}
    </ol>
  </div>
  </div>
   );
}

export default Bookshelf;
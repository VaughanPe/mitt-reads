import React from 'react';

const Book = (props) => {
    return (
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
            width: "128px",
          height: "193px",
          backgroundImage: props.book.imageLinks !== undefined ? `url(${props.book.imageLinks.smallThumbnail})` : "none"
        }}
          
        
      ></div>
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled="">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
      <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors}</div>
  </div>);
}
 
export default Book;
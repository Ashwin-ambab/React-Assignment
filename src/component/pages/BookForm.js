import React, { useRef} from "react";

import './BookForm.css'

const BookForm = (props) => {
    const bookInputRef = useRef();
    const authorInputRef = useRef();
    const genreInputRef = useRef();
    const numberInputRef = useRef();

  
  const onFormHandler = (e) => {
      e.preventDefault();
      
      const enteredBook = bookInputRef.current.value;
      const enteredAuthor = authorInputRef.current.value;
      const enteredGenre = genreInputRef.current.value;
      const enteredNumber = numberInputRef.current.value;

      const booksData = {
          book: enteredBook,
          author: enteredAuthor,
          genre: enteredGenre,
          number: enteredNumber,
      }
      props.addContact(booksData);
      console.log(booksData);
  };

  return (
    <div className="main-controls">
    <h1 className="form-header">Add a Book</h1>
    <form className="form" onSubmit={onFormHandler}>
        <div className="control">
          <label htmlFor="book" >
            Book
          </label>
          <input type="text" id="book" ref={bookInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="author" >
            Auhtor
          </label>
          <input type="text" id="author" ref={authorInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="genre" >
            Genre
          </label>
          <input type="text" id="genre" ref={genreInputRef}/>
        </div>
        <div className="control">
          <label htmlFor="number" >
            Total Page
          </label>
          <input type="number" id="number" ref={numberInputRef}/>
        </div>
        <div className="actions">
      <button>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default BookForm;

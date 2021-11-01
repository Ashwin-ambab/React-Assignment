import axios from "axios";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

const EditBook = () => {
  const history = useHistory();
  // const {id} = useParams();
  // const[user, setUser] = useState(null);
  const [id, setID] = useState(null);
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [number, setNumber] = useState("");

  // useEffect(() => {
  //     var users = JSON.parse(localStorage.getItem("users"));
  //     var user = [];
  //     console.log(users);
  //     users.forEach(element => {
  //         if(element.id === id) {
  //             setUser(element);
  //             setUsername(element.username);
  //             setLastname(element.lastname);
  //             setEmail(element.email);
  //             setNumber(element.number);
  //         }
  //     });
  // },[])

  // console.log(user);

    useEffect(() => {
    setID(localStorage.getItem("ID"));
    setBook(localStorage.getItem("Book"));
    setAuthor(localStorage.getItem("Author"));
    setGenre(localStorage.getItem("Genre"));
    setNumber(localStorage.getItem("Number"));
  }, []);

  const onFormHandler = (e) => {
      e.preventDefault();
    axios
      .put(`http://localhost:3003/Books/${id}`, {
        book,
        author,
        genre,
        number,
      })
      .then(() => {
        history.push("/");
      });
  };

  return (
    <div className="main-controls">
      <h1 className="form-header">Update</h1>
      <form className="form" onSubmit={onFormHandler}>
        <div className="control">
          <label htmlFor="book">Book</label>
          <input
            type="text"
            id="book"
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">update</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;

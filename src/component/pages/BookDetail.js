import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const BookDetail = () => {
  const [id, setID] = useState(null);
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [number, setNumber] = useState("");

    useEffect(() => {
    setID(localStorage.getItem("ID"));
    setBook(localStorage.getItem("Book"));
    setAuthor(localStorage.getItem("Author"));
    setGenre(localStorage.getItem("Genre"));
    setNumber(localStorage.getItem("Number"));
  }, []);
    return(
        <div className="container py-5">
            <h1 className="display-4">USER ID: {id}</h1>
            <ul className="list-group w-50">
                <li className="list-group-item">BOOk: {book}</li>
                <li className="list-group-item">AUTHOR: {author}</li>
                <li className="list-group-item">GENRE: {genre}</li>
                <li className="list-group-item">Number: {number}</li>
            </ul>
            <Link className="btn btn-primary m-5" to="/">Go to Homepage</Link>
        </div>
    );
};

export default BookDetail;
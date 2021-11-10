/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./AllBooks.css";

const AllBooks = () => {
  const history = useHistory();
  const [loaded, setLoaded] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //retrieveing allboosk
  // const retrieveBooks = async () => {
  //   const response = axios.get("http://localhost:3003/Books")
  //   return response.data;
  // };

  useEffect(() => {
    axios.get("http://localhost:3003/Books").then((response) => {
      setLoaded(response.data.reverse());
      console.log(response.data);
      // const getAllBooks = async () => {
      //   const allBooks = await retrieveBooks();
      //   if (allBooks) setLoaded(allBooks);
      // };
      // getAllBooks();
    });
  }, []);

  const onEditHandler = (data) => {
    let { id, book, author, genre, number } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Book", book);
    localStorage.setItem("Author", author);
    localStorage.setItem("Genre", genre);
    localStorage.setItem("Number", number);
    console.log(data);
  };

  const onDeleteHandler = async (id) => {
    await axios
      .delete(`http://localhost:3003/Books/${id}`)
    //   const newBookList = loaded.filter((book) => {
    //   return book.id !== id;
    //   })
    //   .then(() => {
    // setLoaded(newBookList);
    //     history.push("/");
    //   });
      .then(() => {
        setLoaded((prevBook) => prevBook.filter((book) => book.id !== id));
        history.push("/");
      });
  };


  // const onFilterBooksHandler = (filterBook) => {
  //   setSearchTerm(filterBook);
  //   if (filterBook !== "") {
  //     const newBook = loaded.filter((book) => {
  //       return Object.values(book)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(filterBook.toLowerCase());
  //     });
  //     setSearchResults(newBook);
  //   }else{
  //     setSearchResults(loaded);
  //   }
  // };

  return (
    <div>
      {/* <Search onLoadBooks={onFilterBooksHandler} searchProp={searchTerm} loaded={searchResults}/> */}
      <section className="search">
        <div className="search-input">
        <label>Filter by Book</label>
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      </section>
      <table className="table"> 
         <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Total Page</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">View</th>
          </tr>
        </thead> 
        <tbody>
          {loaded.filter((book) => {
            if(searchTerm === ""){
              return book;
            }else if(Object.values(book)
                   .join(" ")
                   .toLowerCase()
                   .includes(searchTerm.toLowerCase())){
                     return book;
                   }
          }).map((data, index) => {
            return (
              <tr key={data.id}>
                <th scope="row">{index + 1}</th>
                <td>{data.book}</td>
                <td>{data.author}</td>
                <td>{data.genre}</td>
                <td>{data.number}</td>
                <td>
                  <Link to={`/newbook/edit/${data.id}`}>
                    <button
                      className="btn btn-primary"
                      onClick={() => onEditHandler(data)}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/newbook/delete/${data.id}`}>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDeleteHandler(data.id)}
                    >
                      Delete
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/newbook/${data.id}`}>
                    <button
                      className="btn btn-secondary"
                    >
                      Go
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks;

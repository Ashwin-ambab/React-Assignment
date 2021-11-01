import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AllBooks = () => {
  const history = useHistory();
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/Books").then((response) => {
      setLoaded(response.data.reverse());
      // console.log(response.data);
    });
  }, []);

  const onEditHandler = (data) => {
    let {id,book,author,genre,number} = data;
    localStorage.setItem('ID',id);
    localStorage.setItem('Book',book);
    localStorage.setItem('Author',author);
    localStorage.setItem('Genre',genre);
    localStorage.setItem('Number',number)
    console.log(data);
  };

  

  const onDeleteHandler = (id) => {
    axios.delete(`http://localhost:3003/Books/${id}`)
    .then(() => {
      history.push('/')
    })
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Number</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {loaded.map((data, index) => {
            return (
              <tr key={data.id}>
                <th scope="row">{index + 1}</th>
                <td>{data.book}</td>
                <td>{data.author}</td>
                <td>{data.genre}</td>
                <td>{data.number}</td>

                <td>
                  <Link
                    to={`/newbook/edit/${data.id}`}
                    className="btn btn-primary"
                    onClick={() => onEditHandler(data)}
                  >
                    Edit
                  </Link>
                </td>

                <td>
                  <Link
                    to={`/newbook/delete/${data.id}`}
                    className="btn btn-danger"
                    onClick={() => onDeleteHandler(data.id)}
                  >
                    Delete
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

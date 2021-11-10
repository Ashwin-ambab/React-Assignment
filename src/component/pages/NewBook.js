import React from "react";
import { useHistory } from "react-router-dom";
import BookForm from "./BookForm";

const NewBook = (props) => {
  const history = useHistory();
    // const[username,setUsername] = useState('');
    // const[lastname,setLastname] = useState('');
    // const[email,setEmail] = useState('');
    // const[number,setNumber] = useState('');


  const onAddBookHandler = (BookData) => {
    fetch("http://localhost:3003/Books", {
      method: "POST",
      body: JSON.stringify(BookData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push('/');
    });
    // console.log(Data);
  };

  return (
    <div>
      <BookForm addContact={onAddBookHandler} />
    </div>
  );
};

export default NewBook;

import React from "react";
import { useHistory } from "react-router-dom";
import BookForm from "./BookForm";

const NewBook = (props) => {
  const history = useHistory();
    // const[username,setUsername] = useState('');
    // const[lastname,setLastname] = useState('');
    // const[email,setEmail] = useState('');
    // const[number,setNumber] = useState('');


  const onAddContactHandler = (contactData) => {
    fetch("http://localhost:3003/Books", {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push('/');
    });
    // console.log(contactData);
  };

  return (
    <div>
      <BookForm addContact={onAddContactHandler} />
      <h1>ewuirif</h1>
    </div>
  );
};

export default NewBook;

import React, { useEffect, useRef, useState } from 'react';

import './Search.css';

const Search = React.memo(props => {
  const[searchBook,setSearchBook] = useState('');
//   const inputRef = useRef();
//   const{onFilterIngredients} = props;

// useEffect(() => {
//     axios.get("http://localhost:3003/Books").then((response) => {
//       setSearchBook(response.data);
//       console.log(response.data);
//       props.onLoadBooks();
// },[searchBook])


//   useEffect(() => {
//     // const timer = setTimeout(() => {
//     //     if(searchBook === inputRef.current.value){
//         //   const query = 
//         //    searchBook.length === 0 
//         //    ? '' 
//         //    : `?orderBy = "title" &equalTo="${searchBook}"`;

//           fetch('http://localhost:3003/Books')
//           .then(response => response.json)
//           .then(responseData => {
//             const loadedIngredients = [];
//             for(const key in responseData){
//               loadedIngredients.push({
//                 id: key,
//                 title: responseData[key].title,
//                 amount: responseData[key].amount
//               });
//             }
//             onFilterIngredients(loadedIngredients);
//           });

//         }
      

//     },500);

//     return () => {
//       clearTimeout(timer);
//     };
    
//   },[searchBook,onFilterIngredients, inputRef]);

  return (
    <section className="search">
        <div className="search-input">
          <label>Filter by Book</label>
          <input type="text" value={searchBook}
           onChange={(e) => setSearchBook(e.target.value)} 
          />
        </div>
    </section>
  );
});

export default Search;
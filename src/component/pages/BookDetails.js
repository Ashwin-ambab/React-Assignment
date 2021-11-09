import React from "react";

const BookDetails = (props) => {
    const {book,author,genre,page} = props;
    console.log(props);
    return(
        <div>
        <li>{book}</li>
        <li>{author}</li>
        <li>{genre}</li>
        <li>{page}</li>
        </div>
    );
};

export default BookDetails;
// BookList.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import './booklist.css'
import NavBar from "../Navbar/navbar";
const BookList = () => {
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
  <>
   <NavBar/>
    <div>
     <div className="head"> <h1>Book List</h1>
      <input
        type="text"
        placeholder="Search Book here..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      <div className="card-container">
        {filteredBooks.map((book, index) => (
          <div key={index} className="card">
          <h3 className="card-title">{book.name}</h3>
            <p className="card-author">Author: {book.authorName}</p>
            <p className="card-price">Price: {book.price}</p>
            <img height="1200px" src={book.image}/>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BookList;

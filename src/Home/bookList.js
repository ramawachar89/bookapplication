import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/booksActions";
import NavBar from "../Navbar/navbar";
import "./booklist.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="head">
          <h1>Book List</h1>
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
              <img height="300px" src={book.image} alt={book.name} />
              <button className="card-button">View Details</button>
              <button
                className="card-button"
                onClick={() => handleAddToCart(book)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
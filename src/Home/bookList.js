import React, { isValidElement, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/booksActions";
import NavBar from "../Navbar/navbar";
import "./booklist.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


const BookList = () => {
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookDetails, setBookDetails] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
 const[isview,setIsView]=useState(false)
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
    alert("add to cart successfully")
  };

  const handleBookDetails = (book) => {
    setIsView(true)
    setBookDetails(book.details,book.image)
   
    // setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <NavBar />
      {isview ?
      <Dialog
        open={isview}
        PaperProps={{
          style: {
            borderRadius: "20px",
        
            height:"800px",
            width:"1000px"
          }
        }}
      >
        <h1>Views</h1>
        <p>
        {bookDetails}
         
        </p>
    
        
      </Dialog> :""}




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
              {/* <Button variant="outlined" onClick={handleBookDetails}>
                View Details
              </Button> */}
              <button className="card-button"
                onClick={() => handleBookDetails(book)}
              >
                View Details</button>
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

export default BookList;
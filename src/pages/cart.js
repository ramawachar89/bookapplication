import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/booksActions";
import './cart.css'
import NavBar from "../Navbar/navbar";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
const dispatch=useDispatch()

  const handleRemoveFromCart = (book) => {
    dispatch(removeFromCart(book));
  };
  return (
    
    <div>
       <NavBar/>
      <h1 style={{marginLeft:"70rem"}}>My Cart</h1>
      {cartItems.length === 0 ? (
        <>
        <h2 style={{marginLeft:"70rem"}}>No items in the cart</h2>
       
        </>
      ) : (
        <ul>
          {cartItems.map((book, index) => (
            <div>
                 <div key={index} className="card">
              <h3 className="card-title">{book.name}</h3>
              <p className="card-author">Author: {book.authorName}</p>
              <p className="card-price">Price: {book.price}</p>
              <img height="300px" src={book.image} alt={book.name} />
              {/* <Button variant="outlined" onClick={handleBookDetails}>
                View Details
              </Button> */}
              <button className="card-button"
                onClick={() => handleRemoveFromCart(book)}
              >
                Remove Cart</button>
              {/* <button
                className="card-button"
                onClick={() => handleAddToCart(book)}
              >
                Add To Cart
              </button> */}
            </div>
         
        </div>
    
           
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

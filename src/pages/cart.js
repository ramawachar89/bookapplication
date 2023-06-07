import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/booksActions";
import './cart.css'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
const dispatch=useDispatch()

  const handleRemoveFromCart = (book) => {
    dispatch(removeFromCart(book));
  };
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
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

export const loadBooks = () => {
    // You can dispatch an action here to load books from an API if needed
    // For simplicity, we'll directly return the data from the initial state
    return {
      type: "LOAD_BOOKS",
    };
  };
  export const addToCart = (book) => {
    return {
      type: "ADD_TO_CART",
      payload: book,
    };
  };
  export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Action Creator
export const removeFromCart = (book) => {
  return {
    type: REMOVE_FROM_CART,
    payload: book,
  };
};
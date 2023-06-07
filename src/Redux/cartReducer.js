import { REMOVE_FROM_CART } from "./booksActions";
const initialState = {

    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          items: [...state.items, action.payload],
        };
        case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((book) => book.id !== action.payload.id),
      };
      default:
        return state;
    }
  };






  
  export default cartReducer;
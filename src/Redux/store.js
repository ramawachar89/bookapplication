import { createStore } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";

const store = createStore(bookReducer,cartReducer);

export default store;
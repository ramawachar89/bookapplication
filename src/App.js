// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import BookList from "./Home/bookList";
import Cart from "./pages/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<BookList />}></Route>
     <Route path="/mycart" element={<Cart/>}></Route> 
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

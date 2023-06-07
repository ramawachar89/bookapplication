// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import BookList from "./Home/bookList";

const App = () => {
  return (
    <Provider store={store}>
      <BookList />
    </Provider>
  );
};

export default App;

export const loadBooks = () => {
    // You can dispatch an action here to load books from an API if needed
    // For simplicity, we'll directly return the data from the initial state
    return {
      type: "LOAD_BOOKS",
    };
  };
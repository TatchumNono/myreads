import React, { useEffect } from "react";
//import axios from "axios";
import * as api from "./BooksAPI";
function App() {
  useEffect(() => {
    api.getAll();
  }, []);
  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
}

export default App;

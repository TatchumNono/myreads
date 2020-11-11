import React, { useEffect } from "react";
//import axios from "axios";
import * as  from BooksAPI
function App() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/file/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
}

export default App;

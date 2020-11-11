import React, { useEffect } from "react";

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
      <h1></h1>
    </div>
  );
}

export default App;

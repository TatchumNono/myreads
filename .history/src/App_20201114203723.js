import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
 
  return (
    <Layout>
      <Header style={{ textAlign: "center", fontSize: "2rem", color: "white" }}>
        My Reads
      </Header>
      <Content>
        <Books
          data={data}
          changeShelf={changeShelf}
          warning={warning}
          update={update}
        />
      </Content>
    </Layout>
  );
}

export default App;

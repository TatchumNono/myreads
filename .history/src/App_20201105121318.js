import React, { useEffect } from "react";
//import axios from "axios";

import * as api from "./BooksAPI";
function App() {
  useEffect(() => {
    console.log(api.getAll());
  }, []);
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Reads />
      </Content>
    </Layout>
  );
}

export default App;

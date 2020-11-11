import React, { useEffect } from "react";
//import axios from "axios";
import { Layout } from "antd";
import * as api from "./BooksAPI";

const { Header, Content } = Layout;
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

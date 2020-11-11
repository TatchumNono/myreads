import React, { useEffect } from "react";
//import axios from "axios";
import { Layout } from "antd";
import "antd/dist/antd.css";
//import "antd/dist/antd.less";
import * as api from "./BooksAPI";
import Books from "./components/Books";

const { Header, Content } = Layout;
function App() {
  useEffect(() => {
    console.log(api.getAll());
  }, []);
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Boo />
      </Content>
    </Layout>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
//import "antd/dist/antd.less";
import * as api from "./BooksAPI";
import Books from "./components/Books";

const { Header, Content } = Layout;
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    api
      .getAll()
      .then((res) => {
        console.log(res);
        setData
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Books />
      </Content>
    </Layout>
  );
}

export default App;

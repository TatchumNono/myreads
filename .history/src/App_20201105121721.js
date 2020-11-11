import React, { useEffect } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
//import "antd/dist/antd.less";
import * as api from "./BooksAPI";
import Books from "./components/Books";

const { Header, Content } = Layout;
function App() {
  useEffect(() => {
    api.getAll().then((res) => {
      console.log(res);
    })
    .catch((error)=>{

    })
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

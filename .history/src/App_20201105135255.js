import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
//import "antd/dist/antd.less";
import * as api from "./BooksAPI";
import Books from "./components/Books";

const { Header, Content } = Layout;
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .getAll()
      .then((res) => {
        console.log(res);
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <Header
        style={{ textAlign: "center", fontSize: "50rem", color: "white" }}>
        Header
      </Header>
      <Content>
        <Books data={data} loading={loading} />
      </Content
    </Layout>
  );
}

export default App;

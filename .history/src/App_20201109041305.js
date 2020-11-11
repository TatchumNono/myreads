import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
//import "antd/dist/antd.less";
import * as api from "./BooksAPI";
import Books from "./components/Books";

const { Header, Content } = Layout;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    set
    api
      .getAll()
      .then((res) => {
        let info = res;
        setData(info);
      })
      .catch((error) => {
        prompt("Could not fetch data, Please check your internet connection!");
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <Layout>
      <Header style={{ textAlign: "center", fontSize: "2rem", color: "white" }}>
        My Reads
      </Header>
      <Content>
        <Books data={data} />
      </Content>
    </Layout>
  );
}

export default App;

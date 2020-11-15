import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import * as api from "./BooksAPI";
import Books from "./Books";

const { Header, Content } = Layout;

const Main = () => {
  

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
};

export default Main;
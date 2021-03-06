import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import Books from "./Books";

const { Header, Content } = Layout;

const Main = (props) => {
  const { data, changeShelf, warning } = props;
  return (
    <Layout>
      <Header style={{ textAlign: "center", fontSize: "2rem", color: "white" }}>
        My Reads
      </Header>
      <Content>
        <Books data={data} changeShelf={changeShelf} warning={warning} />
      </Content>
    </Layout>
  );
};

export default Main;

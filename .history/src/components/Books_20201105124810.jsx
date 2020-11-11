import React from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col } from "antd";

const Books = (props) => {
    const {}
  return (
    <div>
      <Row>
        <Divider orientation='left'>Currently Reading</Divider>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Divider orientation='left'>Want to Read</Divider>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Divider orientation='left'>Read</Divider>
        <Col span={24}>col</Col>
      </Row>
    </div>
  );
};

export default Books;

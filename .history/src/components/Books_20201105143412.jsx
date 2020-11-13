import React from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col, Skeleton, Card } from "antd";

const { Meta } = Card;

const Books = (props) => {
  const { data } = props;
  //console.log(data);
  //currentlyReading
  //wantToRead
  //read
  //console.log(data);

  return (
    <div>
      <Row>
        <Divider orientation='left'>Currently Reading</Divider>
        {data.map((book, index) => (
          <Col style={{ padding: " 8px 16px" }} span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt='example' src={book.imageLinks.thumbnail} />}>
              <Meta title={book.title} description={book.authors} />
            </Card>
          </Col>
        ))}
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
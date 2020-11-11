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
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {data.map((book, index) => (
            <Col style={{padding:' 8px 0,
                background: #00a0e9;}} span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt='example' src={book.imageLinks.thumbnail} />}>
                <Meta title={book.title} description={book.authors} />
              </Card>
            </Col>
          ))}
        </Row>
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

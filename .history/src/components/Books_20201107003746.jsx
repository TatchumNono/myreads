import React from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col, Skeleton, Card } from "antd";

const { Meta } = Card;

const loadingCard = (props) => {
  return (
    <Card style={{ width: 300, marginTop: 16 }} loading={props.loading}></Card>
  );
};

const Books = (props) => {
  const { data, loading } = props;
  //console.log(data);
  //currentlyReading
  //wantToRead
  //read
  //console.log(data);

  return (
    <div>
      <Row>
        <Divider orientation='left'>Currently Reading</Divider>
        {loading ? (
          <loadingCard />
        ) : (
          data
            .filter((book) => book.shelf === "currentlyReading")
            .map((book, index) => (
              <Col style={{ padding: " 16px 32px" }} span={6} key={index}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt='example' src={book.imageLinks.thumbnail} />}>
                  <Meta title={book.title} description={book.authors} />
                </Card>
              </Col>
            ))
        )}
      </Row>
      <Row>
        <Divider orientation='left'>Want to Read</Divider>
        {loading data
          .filter((book) => book.shelf === "wantToRead")
          .map((book, index) => (
            <Col style={{ padding: " 16px 32px" }} span={6} key={index}>
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
        <Divider orientation='left'>Read</Divider>
        {data
          .filter((book) => book.shelf === "read")
          .map((book, index) => (
            <Col style={{ padding: " 16px 32px" }} span={6} key={index}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt='example' src={book.imageLinks.thumbnail} />}>
                <Meta title={book.title} description={book.authors} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Books;

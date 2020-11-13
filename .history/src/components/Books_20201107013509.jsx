import React from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col, Skeleton, Card, Menu, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const { Meta } = Card;

const loadingCard = (props) => {
  return (
    <Card style={{ width: 300, marginTop: 16 }} loading={props.loading}>
      <Skeleton loading={props.loading} avatar active></Skeleton>
    </Card>
  );
};

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <a href='http://www.alipay.com/'>1st menu item</a>
    </Menu.Item>
    <Menu.Item key='1'>
      <a href='http://www.taobao.com/'>2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='3'>3rd menu item</Menu.Item>
  </Menu>
);

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
                  cover={<img alt='example' src={book.imageLinks.thumbnail} />}
                  <Dropdown overlay={menu} trigger={['click']}>
                  actions={[<EllipsisOutlined key='ellipsis' />]}>
<
                  <Meta title={book.title} description={book.authors} />
                </Card>
              </Col>
            ))
        )}
      </Row>
      <Row>
        <Divider orientation='left'>Want to Read</Divider>
        {loading ? (
          <loadingCard />
        ) : (
          data
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
            ))
        )}
      </Row>
      <Row>
        <Divider orientation='left'>Read</Divider>
        {loading ? (
          <loadingCard />
        ) : (
          data
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
            ))
        )}
      </Row>
    </div>
  );
};

export default Books;
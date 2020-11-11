import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col, Card, Menu, Dropdown } from "antd";
import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";
import * as api from "../BooksAPI";

const { Meta } = Card;

const Books = (props) => {
  const { data } = props;
  //console.log(data);
  //currentlyReading
  //wantToRead
  //read
  //console.log(data);

  //useEffect(() => {}, []);

  const handleClick = (e, book) => {
    console.log("click ", e.key);
    api.update(book, e.key).then((res)=>{
      
    })
  };

  return (
    <div>
      <Row>
        <Divider orientation='left'>Currently Reading</Divider>
        {data
          .filter((book) => book.shelf === "currentlyReading")
          .map((book, index) => (
            <Col style={{ padding: " 16px 32px" }} span={6} key={index}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt='example' src={book.imageLinks.thumbnail} />}
                actions={[
                  <Dropdown
                    overlay={
                      <Menu onClick={handleClick}>
                        <Menu.Item disabled>Move to...</Menu.Item>

                        <Menu.Item
                          key='currentReading'
                          icon={
                            book.shelf === "currentlyReading" ? (
                              <CheckOutlined />
                            ) : null
                          }>
                          Currently Reading
                        </Menu.Item>
                        <Menu.Item key='wantToRead'>Want to read</Menu.Item>
                        <Menu.Item key='read'>Read</Menu.Item>
                      </Menu>
                    }
                    trigger={["click"]}
                    placement='topLeft'>
                    <EllipsisOutlined key='ellipsis' />
                  </Dropdown>,
                ]}>
                <Meta title={book.title} description={book.authors} />
              </Card>
            </Col>
          ))}
      </Row>
      <Row>
        <Divider orientation='left'>Want to Read</Divider>
        {data
          .filter((book) => book.shelf === "wantToRead")
          .map((book, index) => (
            <Col style={{ padding: " 16px 32px" }} span={6} key={index}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt='example' src={book.imageLinks.thumbnail} />}
                actions={[
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key='0'>Currently Reading</Menu.Item>
                        <Menu.Item
                          key='1'
                          icon={
                            book.shelf === "wantToRead" ? (
                              <CheckOutlined />
                            ) : null
                          }>
                          Want to read
                        </Menu.Item>
                        <Menu.Item key='3'>Read</Menu.Item>
                      </Menu>
                    }
                    trigger={["click"]}
                    placement='topLeft'>
                    <EllipsisOutlined key='ellipsis' />
                  </Dropdown>,
                ]}>
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
                cover={<img alt='example' src={book.imageLinks.thumbnail} />}
                actions={[
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key='0'>Currently Reading</Menu.Item>
                        <Menu.Item key='1'>Want to read</Menu.Item>
                        <Menu.Item
                          key='3'
                          icon={
                            book.shelf === "read" ? <CheckOutlined /> : null
                          }>
                          Read
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["click"]}
                    placement='topLeft'>
                    <EllipsisOutlined key='ellipsis' />
                  </Dropdown>,
                ]}>
                <Meta title={book.title} description={book.authors} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Books;

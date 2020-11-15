import React from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col, Card, Menu, Dropdown } from "antd";
import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";
import Search from "./Search";

import "../App.css";

const { Meta } = Card;

const Books = (props) => {
  const { data, changeShelf, warning, update } = props;

  //console.log(data);
  //currentlyReading
  //wantToRead
  //read
  //console.log(data);

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
                      <Menu>
                        <Menu.Item disabled>Move to...</Menu.Item>

                        <Menu.Item
                          key='currentlyReading'
                          icon={
                            book.shelf === "currentlyReading" ? (
                              <CheckOutlined />
                            ) : null
                          }
                          onClick={warning}>
                          Currently Reading
                        </Menu.Item>
                        <Menu.Item
                          key='wantToRead'
                          onClick={(e) => changeShelf(book, e)}>
                          Want to read
                        </Menu.Item>
                        <Menu.Item
                          key='read'
                          onClick={(e) => changeShelf(book, e)}>
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
                        <Menu.Item
                          key='currentlyReading'
                          onClick={(e) => changeShelf(book, e)}>
                          Currently Reading
                        </Menu.Item>
                        <Menu.Item
                          key='wantToRead'
                          icon={
                            book.shelf === "wantToRead" ? (
                              <CheckOutlined />
                            ) : null
                          }
                          onClick={warning}>
                          Want to read
                        </Menu.Item>
                        <Menu.Item
                          key='read'
                          onClick={(e) => changeShelf(book, e)}>
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
                        <Menu.Item
                          key='currentlyReading'
                          onClick={(e) => changeShelf(book, e)}>
                          Currently Reading
                        </Menu.Item>
                        <Menu.Item
                          key='wantToRead'
                          onClick={(e) => changeShelf(book, e)}>
                          Want to read
                        </Menu.Item>
                        <Menu.Item
                          key='read'
                          icon={
                            book.shelf === "read" ? <CheckOutlined /> : null
                          }
                          onClick={warning}>
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

        <div className='open-search'>
          <button >Add a book</button>
        </div>
      </Row>
    </div>
  );
};

export default Books;

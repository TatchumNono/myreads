import React from "react";
import { Card, Menu, Dropdown, Col, Row } from "antd";
import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";

const BookItems = (props) => {
  const { data, shelf, changeShelf } = props;
  const { Meta } = Card;
  return (
    <div>
      <Row>
        {data
          .filter((book) => book.shelf === shelf)
          .map((book) => (
            <Col style={{ padding: " 32px 32px" }} span={6} key={book.id}>
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
                          onClick={(e) => changeShelf(book, e)}>
                          Want to read
                        </Menu.Item>
                        <Menu.Item
                          key='read'
                          icon={
                            book.shelf === "read" ? <CheckOutlined /> : null
                          }
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
    </div>
  );
};

export default BookItems;

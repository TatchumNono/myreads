import React, { useState, useEffect } from "react";
import { Button, Input, Row, Col, Card, Menu, Dropdown } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import * as api from "../BooksAPI";
import logo from "../404.jpg";
//import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";
import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";

const Search = (props) => {
  const { data, changeShelf } = props;
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);
  const [ver, setVer] = useState([]);

  const { Meta } = Card;

  const change = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    query === ""
      ? setResults([])
      : api
          .search(query)
          .then((res) => {
            console.log(res);
            res == null
              ? console.log("The term is not supported")
              : setResults(res);
          })
          .catch((error) => {
            console.log(error);
          });
  }, [query]);

  useEffect(() => {
    let filteredArray = [];
    let newObj = {};
    data.forEach((item) => {
      newObj.id = item.id;
      newObj.shelf = item.shelf;
      filteredArray.push(newObj);
    });
    setVer(() => filteredArray);
  }, [data]);

  console.log(ver);

  return (
    <div style=>
      <div>
        <Row>
          <Col flex='40px'>
            <Button
              type='default'
              shape='circle'
              icon={<ArrowLeftOutlined />}
            />
          </Col>
          <Col flex='auto'>
            <Input
              placeholder='Search By Title or Author'
              bordered={false}
              onChange={change}
              value={query}
            />
          </Col>
        </Row>
      </div>
      <Row gutter={[16, 16]}>
        {result.length
          ? result.map((book, index) => (
              <Col style={{ padding: " 32px 32px" }} span={6} key={index}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt='example'
                      src={!book.imageLinks ? logo : book.imageLinks.thumbnail}
                    />
                  }
                  actions={[
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item disabled>Move to...</Menu.Item>
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
                            onClick={(e) => changeShelf(book, e)}>
                            Read
                          </Menu.Item>
                          <Menu.Item key='non' icon={<CheckOutlined />}>
                            none
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
            ))
          : null}
      </Row>
    </div>
  );
};

export default Search;

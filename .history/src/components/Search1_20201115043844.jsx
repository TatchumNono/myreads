import React, { useState, useEffect } from "react";
import { Button, Input, Row, Col, Card, Menu, Dropdown } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import * as api from "../BooksAPI";
import logo from "../404.jpg";
//import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";
import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Search1 = (props) => {
  const { data, changeShelf } = props;
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);
  let history = useHistory();

  const { Meta } = Card;

  const change = (e) => {
    setQuery(e.target.value);
  };

  const goBack = () => {
    let path = `/`;
    history.push(path);
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

  return (
    <div style={{ padding: "20px 20px" }}>
      <div>
        <Row>
          <Col flex='40px'>
            <Button
              type='default'
              shape='circle'
              icon={<ArrowLeftOutlined />}
              onClick={goBack}
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
          ? result.map((resultItem, index) =>
              data.map((dataItem, index) =>
                dataItem.id === resultItem.id ? (
                  <Col style={{ padding: " 32px 32px" }} span={6} key={index}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt='example'
                          src={
                            !dataItem.imageLinks
                              ? logo
                              : dataItem.imageLinks.thumbnail
                          }
                        />
                      }
                      actions={[
                        <Dropdown
                          overlay={
                            <Menu>
                              <Menu.Item disabled>Move to...</Menu.Item>
                              <Menu.Item
                                key='currentlyReading'
                                icon={
                                  dataItem.shelf === "currentlyReading" ? (
                                    <CheckOutlined />
                                  ) : null
                                }
                                onClick={(e) => changeShelf(dataItem, e)}>
                                Currently Reading
                              </Menu.Item>
                              <Menu.Item
                                key='wantToRead'
                                icon={
                                  dataItem.shelf === "wantToRead" ? (
                                    <CheckOutlined />
                                  ) : null
                                }
                                onClick={(e) => changeShelf(dataItem, e)}>
                                Want to read
                              </Menu.Item>
                              <Menu.Item
                                key='read'
                                icon={
                                  dataItem.shelf === "read" ? (
                                    <CheckOutlined />
                                  ) : null
                                }
                                onClick={(e) => changeShelf(dataItem, e)}>
                                Read
                              </Menu.Item>
                              <Menu.Item
                                key='none'
                                icon={
                                  dataItem.shelf !== "currentlyReading" ||
                                  "wantToRead" ||
                                  "read" ? (
                                    
                                  ) : null
                                }>
                                none
                              </Menu.Item>
                            </Menu>
                          }
                          trigger={["click"]}
                          placement='topLeft'>
                          <EllipsisOutlined key='ellipsis' />
                        </Dropdown>,
                      ]}>
                      <Meta
                        title={dataItem.title}
                        description={dataItem.authors}
                      />
                    </Card>
                  </Col>
                ) : null
              )
            )
          : null}
      </Row>
    </div>
  );
};

export default Search1;

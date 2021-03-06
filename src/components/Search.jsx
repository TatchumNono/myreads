import React, { useState, useEffect } from "react";
import { Button, Input, Row, Col, Card, Menu, Dropdown, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import * as api from "../BooksAPI";
import logo from "../404.jpg";
import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const { data, changeShelf } = props;
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);
  const [ids, setIds] = useState([]);
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

  useEffect(() => {
    data.forEach((item) => {
      setIds((prev) => [...prev, item.id]);
    });
  }, [data]);

  console.log(ids);

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
        <Divider orientation='left'>Books Already in Shelf</Divider>
        {result.length
          ? //display the books present in the data and result array
            result.map((resultItem, i) =>
              data.map((dataItem) =>
                dataItem.id === resultItem.id ? (
                  <Col
                    style={{ padding: " 32px 32px" }}
                    span={6}
                    key={dataItem.id}>
                    <Card
                      key={resultItem.id}
                      hoverable
                      style={{ width: 240 }}
                      cover={
                        <img
                          alt='example'
                          src={
                            !resultItem.imageLinks
                              ? logo
                              : resultItem.imageLinks.thumbnail
                          }
                        />
                      }
                      actions={[
                        <Dropdown
                          overlay={
                            <Menu key='index'>
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
                                  "read" ? null : (
                                    <CheckOutlined />
                                  )
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
                        title={resultItem.title}
                        description={resultItem.authors}
                      />
                    </Card>
                  </Col>
                ) : null
              )
            )
          : null}
      </Row>
      <Row gutter={[16, 16]}>
        <Divider orientation='left'>Results</Divider>
        {result.length
          ? result
              //removes the the books present in the data array from the result array
              //if resultItem is present in ids array it returns false
              //if resultItem in not present in ids array it returns true
              //so returns a new array where the ids element are filtered from the result array
              .filter((resultItem) => !ids.includes(resultItem.id))
              .map((book, index) => (
                <Col style={{ padding: " 32px 32px" }} span={6} key={book.id}>
                  <Card
                    key={book.id}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt='example'
                        src={
                          !book.imageLinks ? logo : book.imageLinks.thumbnail
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

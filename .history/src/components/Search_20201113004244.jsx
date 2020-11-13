import React, { useState, useEffect } from "react";
import { Drawer, Button, Input, Row, Col, Card, Menu, Dropdown } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import * as api from "../BooksAPI";
import logo from "../404.jpg";
//import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";
import {
  EllipsisOutlined,
  CheckOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const Search = (props) => {
  const { visible, showSearch, data, changeShelf } = props;
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);

  const { Meta } = Card;

  const change = (e) => {
    setQuery(e.target.value);
  };


  const menu = () =>{
    return(
      <Menu>
      <Menu.Item disabled>Move to...</Menu.Item>

      <Menu.Item
        key='currentReading'
        onClick={(e) => changeShelf(book, e)}>
        Currently Reading
      </Menu.Item>
      <Menu.Item
        key='wantToRead'
        onClick={(e) => changeShelf(book, e)}
        >
        Want to read
      </Menu.Item>
      <Menu.Item
        key='read'
        onClick={(e) => changeShelf(book, e)}>
        Read
      </Menu.Item>
      <Menu.Item key='non'>none</Menu.Item>
    </Menu>
    )
  }

  const currentlyReading = () =>{
    return(
      <Menu>
      <Menu.Item disabled>Move to...</Menu.Item>

      <Menu.Item
        key='currentReading'
      >
        Currently Reading
      </Menu.Item>
      <Menu.Item
        key='wantToRead'
        onClick={(e) => changeShelf(book, e)}
        >
        Want to read
      </Menu.Item>
      <Menu.Item
        key='read'
        onClick={(e) => changeShelf(book, e)}>
        Read
      </Menu.Item>
      <Menu.Item key='non'>none</Menu.Item>
    </Menu>
    )
  }

  const  wantToRead = () =>{
    return(
      <Menu>
      <Menu.Item disabled>Move to...</Menu.Item>

      <Menu.Item
        key='currentReading'
        onClick={(e) => changeShelf(book, e)}>
        Currently Reading
      </Menu.Item>
      <Menu.Item
        key='wantToRead'
        >
        Want to read
      </Menu.Item>
      <Menu.Item
        key='read'
        onClick={(e) => changeShelf(book, e)}>
        Read
      </Menu.Item>
      <Menu.Item key='non'>none</Menu.Item>
    </Menu>
    
    )
  }

  const read = () =>{
    return(
      <Menu>
      <Menu.Item disabled>Move to...</Menu.Item>

      <Menu.Item
        key='currentReading'
        onClick={(e) => changeShelf(book, e)}>
        Currently Reading
      </Menu.Item>
      <Menu.Item
        key='wantToRead'
        onClick={(e) => changeShelf(book, e)}
        >
        Want to read
      </Menu.Item>
      <Menu.Item
        key='read'
        >
        Read
      </Menu.Item>
      <Menu.Item key='non'>none</Menu.Item>
    </Menu>
    )
  }

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
      //cconsole.log(`${item.title}:${item.shelf}`);
      result.forEach((book) => {
        console.log(item.title === book.title);
      });
    });
  }, [data, result]);

  return (
    <div>
      <Drawer
        placement='bottom'
        closable={false}
        //onClose={showSearch}
        visible={visible}
        key='bottom'
        height='625'>
        <div>
          <Row>
            <Col flex='40px'>
              <Button
                type='default'
                shape='circle'
                icon={<ArrowLeftOutlined />}
                onClick={showSearch}
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
                        src={
                          !book.imageLinks ? logo : book.imageLinks.thumbnail
                        }
                      />
                    }
                    actions={[
                      <Dropdown
                        overlay={
                          data.map((item)=>{
                            book.title === item.title || book.shelf === 'wantToRead' ? 
                            <wantToRead />
                            : 

                          })
                          /*{ <Menu>
                            <Menu.Item disabled>Move to...</Menu.Item>

                            <Menu.Item
                              key='currentReading'
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
                            <Menu.Item key='non'>none</Menu.Item>
                          </Menu> */}
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
      </Drawer>
    </div>
  );
};

export default Search;

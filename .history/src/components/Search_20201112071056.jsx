import React, { useState } from "react";
import { Drawer, Button, Input, Row, Col, Card, Menu, Dropdown } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import * as api from "../BooksAPI";
//import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";

const Search = (props) => {
  const { visible, showSearch, data } = props;
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);

  const { Meta } = Card;
  const change = (e) => {
    setQuery(e.target.value);

    query === ""
      ? setResults([])
      : api.search(query).then((res) => {
          console.log(res);
          res == null
            ? console.log("The term is not supported")
            : setResults(res);
        });
  };

  return (
    <div>
      <Drawer
        placement='bottom'
        closable={false}
        //onClose={showSearch}
        visible={visible}
        key='bottom'
        height='625'>
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
        <Row gutter={[16, 16]}>
          {result.length
            ? result.map((book, index) => (
                <Col style={{ padding: " 16px 32px" }} span={6} key={index}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img alt='example' src={book.imageLinks.thumbnail} onError/>
                    }>
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
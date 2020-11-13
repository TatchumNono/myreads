import React, { useState } from "react";
import { Drawer, Button, Input, Row, Col, Card, Menu, Dropdown } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import * as api from "../BooksAPI";
//import { EllipsisOutlined, CheckOutlined } from "@ant-design/icons";

const Search = (props) => {
  const { visible, showSearch, data } = props;
  const [query, setQuery] = useState("");
  const [result, setResults] = useState([]);
  const SEARCHTERMS = [
    "Android",
    "Art",
    "Artificial Intelligence",
    "Astronomy",
    "Austen",
    "Baseball",
    "Basketball",
    "Bhagat",
    "Biography",
    "Brief",
    "Business",
    "Camus",
    "Cervantes",
    "Christie",
    "Classics",
    "Comics",
    "Cook",
    "Cricket",
    "Cycling",
    "Desai",
    "Design",
    "Development",
    "Digital Marketing",
    "Drama",
    "Drawing",
    "Dumas",
    "Education",
    "Everything",
    "Fantasy",
    "Film",
    "Finance",
    "First",
    "Fitness",
    "Football",
    "Future",
    "Games",
    "Gandhi",
    "Homer",
    "Horror",
    "Hugo",
    "Ibsen",
    "Journey",
    "Kafka",
    "King",
    "Lahiri",
    "Larsson",
    "Learn",
    "Literary Fiction",
    "Make",
    "Manage",
    "Marquez",
    "Money",
    "Mystery",
    "Negotiate",
    "Painting",
    "Philosophy",
    "Photography",
    "Poetry",
    "Production",
    "Programming",
    "React",
    "Redux",
    "River",
    "Robotics",
    "Rowling",
    "Satire",
    "Science Fiction",
    "Shakespeare",
    "Singh",
    "Swimming",
    "Tale",
    "Thrun",
    "Time",
    "Tolstoy",
    "Travel",
    "Ultimate",
    "Virtual Reality",
    "Web Development",
    "iOS",
  ];
  const { Meta } = Card;
  const change = (e) => {
    setQuery(e.target.value);

    //SEARCHTERMS.includes(`${query}`)
    //  ? console.log("a search term")
    //  : console.log("not supported");
    //SEARCHTERMS.indexOf(query) !== -1
    //  ? api.search(query).then((res) => {
    //      console.log(res);
    //      setResults(res);
    //    })
    //  : console.log("not search term");

    api.search(query).then((res) => {
      console.log(res);
      setResults(res);
      res == null 
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
          {result == null
            ? null
            : result.map((book, index) => (
                <Col style={{ padding: " 16px 32px" }} span={6} key={index}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img alt='example' src={book.imageLinks.thumbnail} />
                    }>
                    <Meta title={book.title} description={book.authors} />
                  </Card>
                </Col>
              ))}
        </Row>
      </Drawer>
    </div>
  );
};

export default Search;

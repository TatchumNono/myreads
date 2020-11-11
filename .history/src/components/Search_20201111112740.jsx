import React, { useState } from "react";
import { Drawer, Button, Input, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Search = (props) => {
  const { visible, showSearch } = props;
  const [query, setQuery] = useState("");
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

  const change = async (e) => {
    setQuery(e.target.value);

    SEARCHTERMS.includes(query) 
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
              placeholder='Borderless'
              bordered={false}
              onChange={change}
              value={query}
            />
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default Search;

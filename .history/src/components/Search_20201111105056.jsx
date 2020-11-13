import React, { useState } from "react";
import { Drawer, Button, Input, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Search = (props) => {
  const { visible, showSearch } = props;
  const [query, setQuery] = useState("");
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
            <Input placeholder='Borderless' bordered={false} value={/>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default Search;
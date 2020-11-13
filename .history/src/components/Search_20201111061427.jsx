import React from "react";
import { Drawer, Button, Input, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Search = (props) => {
  const { visible, showSearch } = props;
  return (
    <div>
      <Drawer
        placement='bottom'
        closable={false}
        //onClose={showSearch}
        visible={visible}
        key='bottom'
        height='625'>
        <Input placeholder='Borderless' bordered={false} />
        <Row>
          <Col flex='100px'>
            <Button
              type='default'
              shape='circle'
              icon={<ArrowLeftOutlined />}
              onClick={showSearch}
            />
          </Col>
          <Col flex='auto'>Fill Rest</Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default Search;
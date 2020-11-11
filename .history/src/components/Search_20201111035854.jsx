import React from "react";
import { Drawer, Button } from "antd";
import {
  EllipsisOutlined,
  CheckOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const Search = (props) => {
  const { visible } = props;
  return (
    <div>
      <Drawer
        placement='bottom'
        closable={false}
        //onClose={this.onClose}
        visible={visible}
        key='bottom'
        height='625'>
        <Button></Button>
        <Button type='primary' shape='circle' icon={<ArrowLeftOutlined />} />
        <p>Search</p>
      </Drawer>
    </div>
  );
};

export default Search;

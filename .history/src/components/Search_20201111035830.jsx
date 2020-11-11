import React from "react";
import { Drawer, Button } from "antd";

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
        <Button>
          <ArrowLeftOutlined />
        </Button>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        <p>Search</p>
      </Drawer>
    </div>
  );
};

export default Search;

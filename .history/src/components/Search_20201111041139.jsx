import React from "react";
import { Drawer, Button } from "antd";
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
          <
        <Button
          type='default'
          shape='circle'
          icon={<ArrowLeftOutlined />}
          onClick={showSearch}
        />
        <p>Search</p>
      </Drawer>
    </div>
  );
};

export default Search;

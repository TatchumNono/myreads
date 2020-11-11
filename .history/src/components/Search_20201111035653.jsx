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
          <b
        <p>Search</p>
      </Drawer>
    </div>
  );
};

export default Search;

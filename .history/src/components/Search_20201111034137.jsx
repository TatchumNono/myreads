import React from "react";
import { Drawer } from "antd";

const Search = (props) => {
  const { visible } = props;
  return (
    <div>
      <Drawer
        title='Basic Drawer'
        placement='bottom'
        closable={false}
        onClose={this.onClose}
        visible={visible}
        key='bottom'>
          <p>Le</p>
        </Drawer>
    </div>
  );
};

export default Search;

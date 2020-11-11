import React from "react";
import { Drawer, Button, Radio, Space } from 'antd';

const Search = () => {
  return (
    <div>
      <Drawer
        title='Basic Drawer'
        placement={placement}
        closable={false}
        onClose={this.onClose}
        visible={visible}
        key={placement}></Drawer>
    </div>
  );
};

export default Search;

import React from "react";
import "antd/dist/antd.css";
import { Divider, Button } from "antd";
import { useHistory } from "react-router-dom";
import "../App.css";
import BookItems from "./BookItems";

const Books = (props) => {
  //recieving and destructuring props
  const { data, changeShelf, warning } = props;
  let history = useHistory();

  //function to navigate to the search page
  const links = () => {
    let path = `/search`;
    history.push(path);
  };

  //filtering the data array to display books depending on thier shelves
  return (
    <div>
      <Divider orientation='left'>Currently Reading</Divider>
      <BookItems
        data={data}
        warning={warning}
        changeShelf={changeShelf}
        shelf='currentlyReading'
      />

      <Divider orientation='left'>Want to Read</Divider>
      <BookItems
        data={data}
        warning={warning}
        changeShelf={changeShelf}
        shelf='wantToRead'
      />

      <Divider orientation='left'>Read</Divider>
      <BookItems
        data={data}
        warning={warning}
        changeShelf={changeShelf}
        shelf='read'
      />
      <div className='open-search'>
        <Button onClick={links}>Add a book</Button>
      </div>
    </div>
  );
};

export default Books;

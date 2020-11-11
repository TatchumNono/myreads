import React from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col, Skeleton, Card } from "antd";

const { Meta } = Card;

const Books = (props) => {
  const { data } = props;
  //currentlyReading
  //wantToRead
  //read
  // console.log(data[0].shelf);
  
  const reading = () =>{
      return(
          {
              data.filter((book,index)=>book)
          }
      )
  }

  return (
    <div>
      <Row>
        <Divider orientation='left'>Currently Reading</Divider>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Divider orientation='left'>Want to Read</Divider>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Divider orientation='left'>Read</Divider>
        <Col span={24}>col</Col>
      </Row>
    </div>
  );
};

export default Books;

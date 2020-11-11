import React from "react";
import "antd/dist/antd.css";
import { Divider, Row, Col, Skeleton, Card } from "antd";

const { Meta } = Card;

const Books = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <Row>
        <Divider orientation='left'>Currently Reading</Divider>
        <Col span={24}>
            {
                data.filter(book => book.shelf === 'currentlyReading').map(book,index=>{
                    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={book} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
                })
            }
        </Col>
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

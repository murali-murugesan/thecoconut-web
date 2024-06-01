import { Col, Row } from "antd";
import MyCard from "../component/home/MyCard";
import CoconutTech from "../component/home/CoconutTech";

function Home() {
  return (
    <>
      <Row gutter={16}>
        <Col>
          <MyCard />
        </Col>
        <Col>
          <CoconutTech />
        </Col>
      </Row>
    </>);
}

export default Home;
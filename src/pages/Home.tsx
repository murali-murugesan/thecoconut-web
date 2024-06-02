import { Col, Row } from "antd";
import MyCard from "../component/home/MyCard";
import CoconutTech from "../component/home/CoconutTech";

function Home() {
  return (
    <>
      <Row gutter={10}>
        <Col span={5}>
          <MyCard />
        </Col>
        <Col span={19}>
          <CoconutTech />
        </Col>
      </Row>
    </>);
}

export default Home;
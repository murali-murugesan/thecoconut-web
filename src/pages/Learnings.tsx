import { Col, Row } from "antd";
import LearningTree from "../component/learnings/LearningTree";

function Learnings(){
  return (
    <>
      <Row gutter={16}>
        <Col span={5}>
          <LearningTree />
        </Col>
        <Col span={19}>
          
        </Col>
      </Row>
    </>);
}


export default Learnings;
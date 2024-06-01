import { Col, Row } from "antd";
import LearningTree from "../component/learnings/LearningTree";

function Learnings(){
  return (
    <>
      <Row gutter={16}>
        <Col>
          <LearningTree />
        </Col>
        <Col>
          
        </Col>
      </Row>
    </>);
}


export default Learnings;
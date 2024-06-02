import { Col, Row } from "antd";
import IdeasTree from "../component/ideas/IdeasTree";


function Ideas(){
  return (
    <>
    <Row gutter={16}>
      <Col span={5}>
        <IdeasTree />
      </Col>
      <Col>
        
      </Col>
    </Row>
  </>);
}

export default Ideas;
import { Col, Row } from "antd";
import RepositoryTree from "../component/repository/RepositoryTree";

function Repository(){
  return (
    <>
      <Row gutter={16}>
        <Col span={5}>
          <RepositoryTree />
        </Col>
        <Col span={19}>
          
        </Col>
      </Row>
    </>);
}



export default Repository;
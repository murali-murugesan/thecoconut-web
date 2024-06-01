import { Col, Row } from "antd";
import RepositoryTree from "../component/repository/RepositoryTree";

function Repository(){
  return (
    <>
      <Row gutter={16}>
        <Col>
          <RepositoryTree />
        </Col>
        <Col>
          
        </Col>
      </Row>
    </>);
}



export default Repository;
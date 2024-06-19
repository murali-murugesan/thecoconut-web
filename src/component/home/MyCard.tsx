
import { Avatar, Card, Popover, Space } from "antd";
import Meta from "antd/es/card/Meta";
import Murali from "../../assets/mypicture.jpeg";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import aboutme from "../../config/aboutme.json"

function MyCard() {
  return (<>
    <Card className="shadow-2xl min-h-screen max-h-screen" cover={<img alt="Murali Murugesan" src={Murali}/>}>
     <p className="text-ellipsis">
        Hello, This is <b>{aboutme.name}</b>. He is in the IT industry for the past 20 years and currently works as a Senior Consultant and based in Brisbane. 
        <br/><br/>
        He has expertise across different domains and have performed roles ranging from Developer to Solution Architect. He has proven experience in Devops space with Openshift, AWS and currently exploring Azure.

        <br/><br/>He loves gardening,travelling and DIYs.

        <Space size={16} wrap style={{ float: 'right', marginTop: "20px"}}>
          <Link to={aboutme.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="25" />
          </Link>
          <Popover content={aboutme.email}>
            <Link to="#"><FaEnvelope size="25" /></Link>
          </Popover>
          <Popover content={aboutme.phone}>
            <Link to="#"><FaPhone size="22" /></Link>
          </Popover>
        </Space>
      </p>
    </Card>
  </>);
}

export default MyCard;
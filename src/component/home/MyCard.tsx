
import { Avatar, Card, Popover, Space } from "antd";
import Meta from "antd/es/card/Meta";
import Murali from "../../assets/mypicture.jpeg";
import { Link } from "react-router-dom";
import "../Component.css";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import aboutme from "../../config/aboutme.json"

function MyCard() {
  return (<>
    <Card className="mycard-card-border"
      cover={
        <img alt="Murali Murugesan" src={Murali} />
      }
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/8.x/notionists/svg?scale=200" />}
        title="Welcome to Thecoconut"
      />
      <p>Hello, This is <b>{aboutme.name}</b>. He is in the IT industry for the past 20 years in different roles and has a passion for technologies.
        He currently works as a Senior Consultant and based in Brisbane. </p>

      <p>He loves gardening,travelling and DIYs in the backyard.</p>

      <Space size={16} wrap style={{ float: 'right' }}>
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

    </Card>
  </>);
}

export default MyCard;
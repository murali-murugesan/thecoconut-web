
import { Card, Image, Popover, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { FaDownload, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";
import aboutme from "../../config/aboutme.json"

function MyCard() {
  return (<>
    <Card className="min-h-screen max-h-screen">
      <Image className="rounded-full shadow-transparent" width={130} alt="Murali Murugesan" src="https://media.licdn.com/dms/image/D5603AQHhY8zbKHNTGg/profile-displayphoto-shrink_800_800/0/1711449051597?e=1724284800&v=beta&t=YzUkCi2eqAq41GymIiVCyOOwg2wYOGyyCYfWHTodaD4" />
      
      <div className="float-right">
        <Link to={aboutme.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={45} className="float-left px-2" />
        </Link>
        <Popover content={aboutme.email}>
          <Link to="mailto:murugesan.murali@gmail.com"><FaEnvelope size={45} className="float-left px-2" /></Link>
        </Popover>
        <Popover content={aboutme.phone}>
          <Link to="#"><FaPhone size={45} className="float-left px-2" /></Link>
        </Popover>
        <Tooltip title="Resume">
          <Link to="#"><FaDownload size={45} className="float-left px-2" /></Link>
        </Tooltip>
      </div>

      <div className="pt-14">
        <b>{aboutme.name}</b> is working in the IT industry for the past 20 years and currently works as a "Senior Consultant" and based in Brisbane.
        <br /><br />
        He has expertise across different domains and have performed roles ranging from Developer to Solution Architect. Inaddition to software development, he has proven experience in Devops space working with multi cloud platform.
      </div>
    </Card>
  </>);
}

export default MyCard;
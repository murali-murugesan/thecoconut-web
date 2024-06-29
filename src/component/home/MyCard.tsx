
import { Card, Image, Popover, Tooltip, Tree, TreeDataNode } from "antd";
import { Link } from "react-router-dom";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import aboutme from "../../config/aboutme.json"
import { FcApproval } from "react-icons/fc";
import { IoIosArrowDropdown } from "react-icons/io";

const treeData: TreeDataNode[] = [
  {
    title: 'Australia',
    key: '0-0',
    icon: <FcApproval size={15} />,
    children: [
      {
        title: 'Senior Consultant - (DWS)',
        key: '0-0-0',
        icon: <FcApproval size={15} />,
      },
      {
        title: 'Technical Lead - (Wipro)',
        key: '0-0-1',
      },
      {
        title: 'Senior Software Engineer - (CTM)',
        key: '0-0-2',
      },
      {
        title: 'Technical Associate - (TechM)',
        key: '0-0-3',
      },
      {
        title: 'Full Stack Engineer - (Advam)',
        key: '0-0-4',
      },
      {
        title: 'Systems Team Lead - (Kineo)',
        key: '0-0-5',
      },
    ],
  },
  {
    title: 'Singapore',
    key: '0-1',
  },
  {
    title: 'India',
    key: '0-2',
  },
  
];



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
        <Tooltip title="Github">
          <Link to="https://github.com/murali-murugesan/thecoconut-web" target="new"><FaGithub size={45} className="float-left px-2" /></Link>
        </Tooltip>
      </div>

      <div className="pt-14">
        <b>{aboutme.name}</b> is in the IT industry for the past 20 years with complete hands-on experience and would love to explore any tech stack.
        <br /><br />
        He has expertise across different domains and have performed roles from Developer to Solution Architect. Inaddition to software development, he has proven experience in Devops space working with multi cloud platform & automation.
      </div>
      <div className="pt-4">
        <Tree
          showIcon
          showLine
          defaultExpandAll
          defaultSelectedKeys={['0-0-0']}
          switcherIcon={<IoIosArrowDropdown size={15} />}
          treeData={treeData}
        />
      </div>
    </Card>
  </>);
}

export default MyCard;
import { Card, Col, Row, Tooltip, Typography } from "antd";
import { FaGitSquare, FaReact } from "react-icons/fa";
import { SiAntdesign, SiAzuredevops, SiMicrosoftazure, SiSpringboot, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa6";
import { PiFileCssThin } from "react-icons/pi";
import { Link } from "react-router-dom";

function CoconutTech() {

    return (
        <>
            <Card className="flex min-h-screen max-h-screen">
                <p>Thecoconut is a personal brand developed using latest cutting edge technologies and hosted on a cloud platform to showcase technical skills, share learnings and ideas.
                    <br/><br/>
                    This website is being developed using the following technologies, and the learnings acquired in doing so, has been documented under
                    the <Link to="/learnings">Learnings</Link> section.
                </p>

                    <Col className="min-w-full pb-2 pt-2">
                        <Card title="Front End" className="flex bg-cyan-50" hoverable={true}>
                            <Tooltip title="ReactJs" color="cyan">
                                <FaReact size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="NodeJs" color="cyan">
                                <FaNodeJs size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="AntDesign" color="cyan">
                                <SiAntdesign size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="Typescript" color="cyan">
                                <SiTypescript size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="CSS" color="cyan">
                                <PiFileCssThin size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="Vite" color="cyan">
                                <SiVite size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="TailwindCSS" color="cyan">
                                <SiTailwindcss size={50} className="float-left px-2"/>
                            </Tooltip>
                        </Card>
                    </Col>
                    <Col className="min-w-full pb-2">
                        <Card title="Back End" className="flex bg-cyan-50 min-w-10" hoverable={true}>
                            <Tooltip title="Java" color="cyan">
                                <FaJava size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="Springboot" color="cyan">
                                <SiSpringboot size={50} className="float-left px-2"/>
                            </Tooltip>
                        </Card>
                    </Col>
                    <Col className="min-w-full pb-2">
                        <Card title="Platform & Tools" className="flex bg-cyan-50" hoverable={true}>
                            <Tooltip title="Azure Services" color="cyan">
                                <SiMicrosoftazure size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="Azure Devops" color="cyan">
                                <SiAzuredevops size={50} className="float-left px-2"/>
                            </Tooltip>
                            <Tooltip title="Git" color="cyan">
                                <FaGitSquare size={50} className="float-left px-2"/>
                            </Tooltip>
                        </Card>
                    </Col>

                <p>
                    <Typography.Text code>
                        <b>NOTE:</b> Learnings and ideas documented in this site are derived from my personal experience and has no reference to any Organisation, Gigs or personnel.
                    </Typography.Text>
                </p>

            </Card>
        </>
    );
}

export default CoconutTech;
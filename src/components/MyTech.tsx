import { Card, Image, Tooltip } from "antd";
import { FaGitSquare, FaReact } from "react-icons/fa";
import { SiAnsible, SiAntdesign, SiApachefreemarker, SiApachegroovy, SiApachejmeter, SiApachemaven, SiAzuredevops, SiBamboo, SiDocker, SiElasticsearch, SiHelm, SiHibernate, SiJunit5, SiKibana, SiKubernetes, SiMariadb, SiMicrosoftazure, SiMongodb, SiOracle, SiPlaywright, SiPostgresql, SiRedis, SiSplunk, SiSpringboot, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { FaAws, FaConfluence, FaJava, FaJenkins, FaJira, FaNodeJs, FaPython } from "react-icons/fa6";
import { PiFileCssThin } from "react-icons/pi";
import { DiOpenshift } from "react-icons/di";
import { GiCamel } from "react-icons/gi";


const cardBodyStyle: React.CSSProperties = {
    padding: '4px',
};

function MyTech() {
    return (
        <>
            <Card className=" min-h-screen max-h-screen min-w-full">
                <div className="pb-2">
                    <Card title="Frontend" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="ReactJs" color="cyan">
                            <FaReact size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="NodeJs" color="cyan">
                            <FaNodeJs size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="AntDesign" color="cyan">
                            <SiAntdesign size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Typescript" color="cyan">
                            <SiTypescript size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="CSS" color="cyan">
                            <PiFileCssThin size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Vite" color="cyan">
                            <SiVite size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="TailwindCSS" color="cyan">
                            <SiTailwindcss size={50} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pb-2">
                    <Card title="Backend" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Java" color="cyan">
                            <FaJava size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Springboot" color="cyan">
                            <SiSpringboot size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Hibernate" color="cyan">
                            <SiHibernate size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Maven" color="cyan">
                            <SiApachemaven size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Freemarker" color="cyan">
                            <SiApachefreemarker size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Apache Camel" color="cyan">
                            <GiCamel size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Redis" color="cyan">
                            <SiRedis size={50} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pb-2">
                    <Card title="Database" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Postgresql" color="cyan">
                            <SiPostgresql size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Oracle DB" color="cyan">
                            <SiOracle size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Maria DB" color="cyan">
                            <SiMariadb size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Mongo DB" color="cyan">
                            <SiMongodb size={50} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pb-2">
                    <Card title="Test" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="JUnit" color="cyan">
                            <SiJunit5 size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Mockito" color="cyan">
                            <Image src="https://github.com/mockito/mockito.github.io/raw/master/img/logo%402x.png" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Playwright" color="cyan">
                            <SiPlaywright size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="JMeter" color="cyan">
                            <SiApachejmeter size={50} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pb-2">
                    <Card title="Platform" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Azure Services" color="cyan">
                            <SiMicrosoftazure size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="AWS" color="cyan">
                            <FaAws size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="OpenShift" color="cyan">
                            <DiOpenshift size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Docker" color="cyan">
                            <SiDocker size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Kubernetes" color="cyan">
                            <SiKubernetes size={50} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pb-2">
                    <Card title="CI/CD" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Jenkins" color="cyan">
                            <FaJenkins size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Bamboo" color="cyan">
                            <SiBamboo size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Groovy" color="cyan">
                            <SiApachegroovy size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Python" color="cyan">
                            <FaPython size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Ansible" color="cyan">
                            <SiAnsible size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Helm Chart" color="cyan">
                            <SiHelm size={50} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pb-2">
                    <Card title="Observability" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Splunk" color="cyan">
                            <SiSplunk size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Elasitc Search" color="cyan">
                            <SiElasticsearch size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Kibana" color="cyan">
                            <SiKibana size={50} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pb-2">
                    <Card title="Tools" className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Azure Devops" color="cyan">
                            <SiAzuredevops size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Git" color="cyan">
                            <FaGitSquare size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Jira" color="cyan">
                            <FaJira size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Confluence" color="cyan">
                            <FaConfluence size={50} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Axway" color="cyan">
                            <Image src="https://www.axway.com/themes/custom/axway2020/img/axway-logo-dark-gray.svg" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
                <div className="pt-4">
                    <Card title="Certifications" className="flex bg-blue-400" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Azure Data Fundamentals" color="cyan">
                            <Image src="https://learn.microsoft.com/en-gb/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Azure Developer Associate" color="cyan">
                            <Image src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>

                        <Tooltip title="AWS Cloud Practitioner" color="cyan">
                            <Image src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
            </Card>
        </>
    );
}

export default MyTech;
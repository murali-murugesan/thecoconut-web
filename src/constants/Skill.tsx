import { Skill } from "@types";
import { GiCamel } from "react-icons/gi";
import { FaGitSquare, FaHandSpock, FaReact } from "react-icons/fa";
import { SiAnsible, SiAntdesign, SiApachefreemarker, SiApachegroovy, SiApachejmeter, SiApachemaven, SiAzuredevops, SiBamboo, SiDocker, SiElasticsearch, SiHelm, SiHibernate, SiJunit5, SiKibana, SiKubernetes, SiMariadb, SiMicrosoftazure, SiMongodb, SiOracle, SiPlaywright, SiPostgresql, SiRedis, SiSplunk, SiSpringboot, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { FaAws, FaConfluence, FaJava, FaJenkins, FaJira, FaNodeJs, FaPython } from "react-icons/fa6";
import { DiOpenshift } from "react-icons/di";

export const Frontend: Skill[] = [
    { name: 'ReactJS', Icon: FaReact },
    { name: 'NodeJS', Icon: FaNodeJs },
    { name: 'AntDesign', Icon: SiAntdesign },
    { name: 'Typescript', Icon: SiTypescript },
    { name: 'ViteJS', Icon: SiVite },
    { name: 'TailwindCSS', Icon: SiTailwindcss },
];

export const Backend: Skill[] = [
    { name: 'Java', Icon: FaJava },
    { name: 'Springboot', Icon: SiSpringboot },
    { name: 'Hibernate', Icon: SiHibernate },
    { name: 'Maven', Icon: SiApachemaven },
    { name: 'Freemarker', Icon: SiApachefreemarker },
    { name: 'Apache Camel', Icon: GiCamel },
    { name: 'Redis', Icon: SiRedis },
];

export const Database: Skill[] = [
    { name: 'Postgresql', Icon: SiPostgresql },
    { name: 'Oracle DB', Icon: SiOracle },
    { name: 'Maria DB', Icon: SiMariadb },
    { name: 'Mongo DB', Icon: SiMongodb },
];

export const Test: Skill[] = [
    { name: 'Junit', Icon: SiJunit5 },
    { name: 'Spock', Icon: FaHandSpock },
    { name: 'Playwright', Icon: SiPlaywright },
    { name: 'JMeter', Icon: SiApachejmeter },
];

export const Platform: Skill[] = [
    { name: 'Microsoft Azure', Icon: SiMicrosoftazure },
    { name: 'AWS', Icon: FaAws },
    { name: 'OpenShift', Icon: DiOpenshift },
    { name: 'Docker', Icon: SiDocker },
    { name: 'Kubernetes', Icon: SiKubernetes },
];

export const CICD: Skill[] = [
    { name: 'Jenkins', Icon: FaJenkins },
    { name: 'Bamboo', Icon: SiBamboo },
    { name: 'Groovy', Icon: SiApachegroovy },
    { name: 'Python', Icon: FaPython },
    { name: 'Ansible', Icon: SiAnsible },
    { name: 'Helm Chart', Icon: SiHelm },
];

export const Observability: Skill[] = [
    { name: 'Splunk', Icon: SiSplunk },
    { name: 'Elasti Search', Icon: SiElasticsearch },
    { name: 'Kibana', Icon: SiKibana },
];

export const Tools: Skill[] = [
    { name: 'Azure Devops', Icon: SiAzuredevops },
    { name: 'Git', Icon: FaGitSquare },
    { name: 'Jira', Icon: FaJira },
    { name: 'Confluence', Icon: FaConfluence },
];

export const SkillMap = new Map([
    ['FrontEnd', Frontend],
    ['BackEnd', Backend],
    ['Database', Database],
    ['Test', Test],
    ['Platform', Platform],
    ['CI/CD', CICD],
    ['Observability', Observability],
    ['Tools', Tools],
]);
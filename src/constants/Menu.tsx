import { MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
    CloudOutlined,HomeOutlined, ProfileOutlined, FundProjectionScreenOutlined, TrophyOutlined
} from '@ant-design/icons';
import { SiSwagger } from "react-icons/si";



const iconStyle: React.CSSProperties = { fontSize: "20px" };

export  const TopMenu : MenuProps['items'] = [
    {
        key: "home",
        label: <Link to="/home">Home</Link>,
        icon: <HomeOutlined style={iconStyle} />
    },
    {
        key: "learnings",
        label: <Link to="/learnings">Learnings</Link>,
        icon: <FundProjectionScreenOutlined style={iconStyle} />
    },
    {
        key: "ideas",
        label: <Link to="/ideas">Ideas</Link>,
        icon: <TrophyOutlined style={iconStyle} />
    },
    {
        key: "swagger",
        label: <Link to="/swagger">Swagger</Link>,
        icon: <SiSwagger style={iconStyle} />
    },
    {
        key: "contact",
        label: <Link to="/contact">About Me</Link>,
        icon: <ProfileOutlined style={iconStyle} />
    },
];

export const IdeasMenu: MenuProps['items'] = [
    {
        "key": "spring",
        "label": "Spring",
        "children":[
            {"key": "spring-cloud-config-server",
            "label": "Cloud Config Server",
            "icon": <CloudOutlined/>,
            }
        ]
    },
    {
        "key": "devops-build-pipeline",
        "label": "Build Pipeline",
        "icon": <CloudOutlined/>,
    }
];

export const LearningsMenu : MenuProps['items'] =[
    {
        "label": "Azure",
        "key": "_azure",
        "children": [
            {
                "label": "Static Web App",
                "key": "azure-static-webapp"
            },
            {
                "label": "App Service",
                "key": "azure-app-service"
            },
            {
                "label": "Container Apps",
                "key": "azure-container-apps"
            },
            {
                "label": "Logic Apps",
                "key": "azure-logic-apps"
            }
        ]
    },
    {
        "label": "AWS",
        "key": "_aws",
        "children": [
            {
                "label": "Static Web App",
                "key": "aws-static-webapp"
            }
        ]
    }
];

export const MenuMap = new Map<String,any>([
    ['ideas', IdeasMenu],
    ['learnings', LearningsMenu],
]);
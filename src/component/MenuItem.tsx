import React from 'react';
import { Menu } from 'antd';
import {
    HomeOutlined, FolderOpenOutlined, FundProjectionScreenOutlined, TrophyOutlined
} from '@ant-design/icons';
import Home from '../pages/Home';
import Learnings from '../pages/Learnings';
import Ideas from '../pages/Ideas';
import Repository from '../pages/Repository';
import { Link } from 'react-router-dom';

const MenuItem: React.FC = () => {
    const iconStyle: React.CSSProperties = { fontSize: "20px" };

    const items = [
        {
            key: "home",
            label: <Link to="/home">Home</Link>,
            icon: <HomeOutlined style={iconStyle} />,
            component: <Home />
        },
        // {
        //     key: "journey",
        //     label: <Link to="/journey">Journey</Link>,
        //     icon: <ApartmentOutlined style={iconStyle} />,
        //     component: <Journey />
        // },
        // {
        //     key: "skill",
        //     label: <Link to="/skill">Skill</Link>,
        //     icon: <ToolOutlined style={iconStyle} />,
        //     component: <Skill />
        // },
        {
            key: "learnings",
            label: <Link to="/learnings">Learnings</Link>,
            icon: <FundProjectionScreenOutlined style={iconStyle} />,
            component: <Learnings />
        },
        {
            key: "ideas",
            label: <Link to="/ideas">Ideas</Link>,
            icon: <TrophyOutlined style={iconStyle} />,
            component: <Ideas />
        },
        {
            key: "repository",
            label: <Link to="/repository">Repository</Link>,
            icon: <FolderOpenOutlined style={iconStyle} />,
            component: <Repository />
        },
        // {
        //     key: "contact",
        //     label: <Link to="/contact">Contact Me</Link>,
        //     icon: <MessageOutlined style={iconStyle} />,
        //     component: <Contact />
        // },
    ];

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={items}
            style={{ flex: 5, minWidth: 0, fontSize: "17px" }}
        />)
}

export default MenuItem;
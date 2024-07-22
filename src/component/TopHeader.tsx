import React from 'react';
import { Avatar, Menu } from 'antd';
import {
    HomeOutlined, ProfileOutlined, FundProjectionScreenOutlined, TrophyOutlined
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const TopHeader: React.FC = () => {
    const iconStyle: React.CSSProperties = { fontSize: "20px" };

    const items = [
        {
            key: "home",
            label: <Link to="/home">Home</Link>,
            icon: <HomeOutlined style={iconStyle} />
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
            icon: <FundProjectionScreenOutlined style={iconStyle} />
        },
        {
            key: "ideas",
            label: <Link to="/ideas">Ideas</Link>,
            icon: <TrophyOutlined style={iconStyle} />
        },
        // {
        //     key: "repository",
        //     label: <Link to="/repository">Repository</Link>,
        //     icon: <FolderOpenOutlined style={iconStyle} />,
        //     component: <Repository />
        // },
        {
            key: "About Me",
            label: <Link to="/contact">About Me</Link>,
            icon: <ProfileOutlined style={iconStyle} />
        },
    ];

    return (
        <>
            <Avatar size={60} src={<img src={logo} alt="logo" />} />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={items}
                className='flex-auto pl-4'
            >
            </Menu>
        </>)
}

export default TopHeader;
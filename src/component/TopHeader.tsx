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
import { Avatar, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MenuItem from "./MenuItem";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaChrome } from "react-icons/fa6";

function CoconutLayout() {

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar size={60} style={{ marginRight: "40px" }} src={<img src={logo} className="App-logo" alt="logo" />} />
                <MenuItem />
            </Header>
            <Content style={{ margin: "15px 15px 0 15px"}}>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                thecoconut.com.au ©{new Date().getFullYear()} Created by <b>Murali Murugesan</b> <i>(Best viewed in <FaChrome/> on a PC)</i>
            </Footer>
        </Layout>
    );
}

export default CoconutLayout;
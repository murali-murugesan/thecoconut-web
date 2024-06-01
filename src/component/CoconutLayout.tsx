import { Avatar, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MenuItem from "./MenuItem";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

function CoconutLayout() {

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar size={60} style={{ marginRight: "40px" }} src={<img src={logo} className="App-logo" alt="logo" />} />
                <MenuItem />
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                thecoconut.com.au ©{new Date().getFullYear()} Created by Murali Murugesan
            </Footer>
        </Layout>
    );
}

export default CoconutLayout;
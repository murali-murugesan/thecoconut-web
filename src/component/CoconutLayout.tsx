import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";


function CoconutLayout() {
    return (
        <Layout>
            <Header className="flex">
                <TopHeader/>
            </Header>
            <Content style={{ margin: "15px 15px 0 15px"}}>
                <Outlet />
            </Content>
            <Footer className="text-center">
                thecoconut.com.au ©{new Date().getFullYear()} Created by Murali Murugesan
            </Footer>
        </Layout>
    );
}

export default CoconutLayout;
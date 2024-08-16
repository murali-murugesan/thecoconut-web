import { Card, Layout, Menu, MenuProps, Tree } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import React from "react";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';



function CoconutLayout() {

    const siderStyle: React.CSSProperties = {
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarColor: 'unset',
      };

    const items: MenuProps['items'] = [
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        BarChartOutlined,
        CloudOutlined,
        AppstoreOutlined,
        TeamOutlined,
        ShopOutlined,
      ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
      }));

    return (
        <Layout>
            <Header className="flex">
                <TopHeader/>
            </Header>
            <Content style={{ margin: "15px 15px 0 15px", overflow: "initial"}}>
                <Outlet />
            </Content>
            <Footer className="text-center">
                thecoconut.com.au ©{new Date().getFullYear()} Created by Murali Murugesan
            </Footer>
        </Layout>
    //     <Layout hasSider>
    //         <Header className="flex">
    //             <TopHeader/>
    //        </Header>
    //   <Sider style={siderStyle}>
    //     <div className="demo-logo-vertical" />
    //     <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    //   </Sider>
    //   <Layout style={{ marginInlineStart: 200 }}>
    //     <Header style={{ padding: 0}} />
    //     <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
    //       <div
    //         style={{
    //           padding: 24,
    //           textAlign: 'center',
    //         }}
    //       >
    //         <Outlet />
    //       </div>
    //     </Content>
    //     <Footer style={{ textAlign: 'center' }}>
    //       Ant Design ©{new Date().getFullYear()} Created by Ant UED
    //     </Footer>
    //   </Layout>
    // </Layout>
    );
}

export default CoconutLayout;
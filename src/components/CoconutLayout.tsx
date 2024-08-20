import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TopHeader from "./TopHeader";
import { Outlet, useOutletContext } from "react-router-dom";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { MenuMap } from "@constants";


export function useSelectedMenu() {
    return useOutletContext<string>();
}

function CoconutLayout() {
    const [selectedMenu, setSelectedMenu] = useState<string>();
    const [selectedTopMenu, setSelectedTopMenu] = useState<string>();

    return (
        <Layout>
            <Header className="flex">
                <TopHeader onMenuSelect={setSelectedTopMenu} />
            </Header>
            <Layout>
                {(selectedTopMenu != undefined && selectedTopMenu != 'home' && selectedTopMenu != 'contact' && selectedTopMenu != 'swagger') &&
                    <SideMenu items={MenuMap.get(selectedTopMenu)} selectedMenu={selectedMenu!} onMenuSelect={setSelectedMenu} />
                }
                <Content style={{ margin: "15px 15px 0 15px" }}>
                    <Outlet context={selectedMenu} />
                </Content>
            </Layout>
            <Footer className="text-center">
                thecoconut.com.au ©{new Date().getFullYear()} Created by Murali Murugesan
            </Footer>
        </Layout>
    );
}

export default CoconutLayout;
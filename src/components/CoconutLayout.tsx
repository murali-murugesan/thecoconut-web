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

    const showSideMenu = (selectedTopMenu != undefined && selectedTopMenu != 'home' && selectedTopMenu != 'contact' && selectedTopMenu != 'swagger');
    return (
        <Layout hasSider>
            <Header className="fixed top-0 left-0 w-full z-10">
                <TopHeader onMenuSelect={setSelectedTopMenu} />
            </Header>

            { showSideMenu &&
                <SideMenu items={MenuMap.get(selectedTopMenu)} selectedMenu={selectedMenu!} onMenuSelect={setSelectedMenu} />
            }
            <Layout className="pt-16 px-4">
                {showSideMenu && 
                    <Content className="pl-80 height:'100vh'">
                        <Outlet context={selectedMenu} />
                    </Content>
                }
                {!showSideMenu && 
                    <Content className="min-h-screen max-h-screen">
                        <Outlet context={selectedMenu} />
                    </Content>
                }
                <Footer className="text-center bottom-0">
                    thecoconut.com.au ©{new Date().getFullYear()} Created by Murali Murugesan
                </Footer>
            </Layout>

        </Layout>
    );
}

export default CoconutLayout;
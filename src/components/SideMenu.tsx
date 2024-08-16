import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { ItemType } from "antd/es/menu/interface";

interface SideMenuProps {
    items: ItemType[] | undefined;
    selectedMenu : string;
    onMenuSelect: (menuName: string) => void;
}

function SideMenu( props : SideMenuProps) {
    const siderStyle: React.CSSProperties = {
        overflow: 'auto',
        height: '100vh',
        insetInlineStart: 0,
        top: 14,
        left: 10,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarColor: 'unset',
      };

      const selectedMenuItems: string[] = [props.selectedMenu];
    return (
        <>
            <Sider style={siderStyle}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={selectedMenuItems}
                    style={{ height: '100%', borderRight: 0 }}
                    items={props.items}
                    onClick={(e) => props.onMenuSelect(e.key)}
                />
            </Sider>
        </>
    );
}

export default SideMenu;
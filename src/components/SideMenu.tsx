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
        position: 'fixed',
        insetInlineStart: 0,
        top: 0,
        left: 10,
        bottom: 80,
      };

      const selectedMenuItems: string[] = [props.selectedMenu];
    return (
        <>
            <Sider style={siderStyle} width={300} className="pt-16">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={selectedMenuItems}
                    style={{ height: '100%'}}
                    items={props.items}
                    onClick={(e) => props.onMenuSelect(e.key)}
                />
            </Sider>
        </>
    );
}

export default SideMenu;
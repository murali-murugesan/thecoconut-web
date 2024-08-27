import { Avatar, Menu } from 'antd';
import logo from "/logo.png";
import { TopMenu } from '@constants';


interface TopHeaderProps {
    onMenuSelect: (menuName: string) => void;
}

function TopHeader({onMenuSelect} : TopHeaderProps){

    return (
        <>
            <Avatar size={60} src={<img src={logo} alt="logo"/>} className='float-left mr-2' />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={TopMenu}
                //className='flex-auto pl-4'
                onClick={(e) => onMenuSelect(e.key)}
            >
            </Menu>
        </>)
}

export default TopHeader;
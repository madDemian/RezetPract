import 'antd/dist/antd.css';
import {Menu} from 'antd';
import {HomeOutlined, FileTextOutlined, UserSwitchOutlined, UserOutlined, SettingOutlined,} from '@ant-design/icons';
import Link from "next/link";

function Navbar(){
    return (
        <div className=' md:w-1/8 lg:w-1/8 fixed font-extrabold pl-64 '>
            <Menu style={{border:'none'}}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FileTextOutlined />}>
                    Messages
                </Menu.Item>
                <Menu.Item key="3" icon={<UserSwitchOutlined />}>
                    Users
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                    Profile
                </Menu.Item>
                <Menu.Item key="5" icon={<SettingOutlined />}>
                    Settings
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navbar


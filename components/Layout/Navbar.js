import 'antd/dist/antd.css';
import {Menu} from 'antd';
import {HomeOutlined, FileTextOutlined, UserSwitchOutlined, UserOutlined, SettingOutlined,} from '@ant-design/icons';
import Link from "next/link";

function Navbar() {
    return (
        <div className=' md:w-1/8 lg:w-1/8 fixed font-extrabold pl-64 space-y-2 '>
            <div className='space-x-2'>
                <HomeOutlined />
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
            <div className='space-x-2'>
                <FileTextOutlined />
                <Link href='/'>
                    <a>Messages</a>
                </Link>
            </div>
            <div className='space-x-2'>
                <UserSwitchOutlined />
                <Link href='/'>
                    <a>Users</a>
                </Link>
            </div>
            <div className='space-x-2'>
                <UserOutlined />
                <Link href='/'>
                    <a>Profile</a>
                </Link>
            </div>
            <div className='space-x-2'>
                <SettingOutlined />
                <Link href='/'>
                    <a>Settings</a>
                </Link>
            </div>

        </div>
    );
};

export default Navbar


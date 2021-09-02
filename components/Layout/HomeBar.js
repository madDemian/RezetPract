import 'antd/dist/antd.css';
import {Menu} from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import Link from 'next/link'

function HomeBar(){
    return(
        <div className='fixed font-extrabold pl-64 '>
            <Menu style={{border:'none'}}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default HomeBar
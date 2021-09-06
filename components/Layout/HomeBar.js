import 'antd/dist/antd.css';
import {HomeOutlined} from '@ant-design/icons';
import Link from 'next/link'

function HomeBar() {
    return (
        <div className='md:w-1/8 lg:w-1/8 fixed font-extrabold pl-64 space-y-2 '>
            <div className='space-x-2'>
                <HomeOutlined/>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default HomeBar
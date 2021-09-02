import 'antd/dist/antd.css';
import {Dropdown, Menu} from 'antd';
import {useRouter} from "next/router";

function UserPanel({user,onSignOut}) {
    const router = useRouter()
    const menu = (
        <Menu>
            <Menu.Item>
                <button target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" onClick={()=>{router.push(`/profile/${user.user_name}`)}}>
                    Profile
                </button>
            </Menu.Item>
            <Menu.Item>
                <button target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com"  onClick={() => {onSignOut()}}>
                    Sign Out
                </button>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='fixed bottom-5 left-72'>
            <Dropdown overlay={menu} placement="topCenter" arrow>
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg'
                    alt="User"
                />
            </Dropdown>
            <div className='font-bold relative right-8 mt-2 '>{user?.first_name + ' ' + user?.last_name}</div>
        </div>
    )
}

export default UserPanel


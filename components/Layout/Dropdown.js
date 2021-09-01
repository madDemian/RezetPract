import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DropdownMenu({showEditMode,onDelete}){
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <button onClick={showEditMode}>Edit</button>
            </Menu.Item>
            <Menu.Item key="1">
                <button onClick={onDelete}>Delete</button>
            </Menu.Item>
        </Menu>
    );
    return(
    <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <DownOutlined />
        </a>
    </Dropdown>
    )
}
export default DropdownMenu

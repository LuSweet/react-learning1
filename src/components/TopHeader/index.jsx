/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-04 17:22:38
 * @Description: file content
 */
import React from 'react'
import { Layout, Space, Dropdown, Avatar, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  EditOutlined,
  SettingOutlined,
  // RobotOutlined,
  LogoutOutlined
} from '@ant-design/icons'

const { Header } = Layout

export default function TopHeader({ collapsed, setCollapsed }) {
  const navigate = useNavigate()
  const { role: { roleName }, username } = JSON.parse(localStorage.getItem('token'))
  console.log('lop', JSON.parse(localStorage.getItem('token')))
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const quit = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  const menu = () => {
    return (
      <Menu>
        <Menu.ItemGroup title={roleName}>
          <Menu.Divider />
          <Menu.Item key='personal'>
            <Space>
              <EditOutlined />
              <span>个人资料</span>
            </Space>
          </Menu.Item>
          <Menu.Item key='three'>
            <Space>
              <SettingOutlined />
              <span>系统设置 </span>
            </Space>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.Item key='four' onClick={quit} style={{ color: 'red' }}>
          <Space>
            <LogoutOutlined />
            <span>
              退出登录
            </span>
          </Space>
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <Header className='site-layout-background' style={{ padding: '0 16px' }}>
      {collapsed
        ? <MenuUnfoldOutlined className='trigger' onClick={toggle} />
        : <MenuFoldOutlined className='trigger' onClick={toggle} />
      }
      <Space style={{ float: 'right' }} size={8}>
        <span style={{ float: 'right' }}>欢迎【{username}】进入!</span>
        <Dropdown overlay={menu}>
          <Avatar size='large' icon={<UserOutlined />} />
        </Dropdown>
      </Space>
    </Header>
  )
}

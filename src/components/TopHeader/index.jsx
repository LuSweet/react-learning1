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
  UserOutlined
} from '@ant-design/icons'

const { Header } = Layout

export default function TopHeader({ collapsed, setCollapsed }) {
  const navigate = useNavigate()

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
        <Menu.Item key='two'>超级管理员</Menu.Item>
        <Menu.Item key='personal'>个人资料</Menu.Item>
        <Menu.Item key='three'>我的</Menu.Item>
        <Menu.Item key='four' onClick={quit}>退出登录</Menu.Item>
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
        <span style={{ float: 'right' }}>欢迎Admin进入!</span>
        <Dropdown overlay={menu}>
          <Avatar size='large' icon={<UserOutlined />} />
        </Dropdown>
      </Space>
    </Header>
  )
}

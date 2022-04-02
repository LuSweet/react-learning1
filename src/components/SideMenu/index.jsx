/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-04 17:07:27
 * @Description: 导航边栏
 */
import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined,
  ProjectOutlined,
  ShopOutlined,
  FormOutlined,
  RobotOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  UploadOutlined
} from '@ant-design/icons'
import axios from 'axios'
import './index.css'

const { Sider } = Layout
const { SubMenu } = Menu

export default function SideMenu(props) {
  const { collapsed } = props
  const [menu, setMenu] = useState([])
  const navigate = useNavigate()
  const params = useLocation()
  console.log('params', params.pathname)
  const urlKey = [params.pathname]
  const openKey = ['/' + params.pathname.split('/')[1]]

  useEffect(() => {
    axios.get('http://localhost:3000/menus?_embed=children').then(res => {
      console.log('ming', res.data)
      setMenu(res.data)
    })
  }, [])

  const iconList = {
    '/home': <HomeOutlined />, // 首页
    '/user-manager': <TeamOutlined />,
    '/user-manager/list': <FormOutlined />,
    '/right-manage': <VideoCameraOutlined />,
    '/right-manage/role/list': <ProfileOutlined />,
    '/right-manage/right/list': <ProjectOutlined />,
    '/new-manage': <LaptopOutlined />,
    '/audit-manage': <RobotOutlined />,
    '/public-manage': <UploadOutlined />,
    '/interest': <ShopOutlined />,
    '/content': <LaptopOutlined />,
    '/content/button': <UploadOutlined />,
    '/content/icon': <UploadOutlined />,
    '/about': <UserOutlined /> // 关于我
  }

  const skipPage = key => {
    navigate(key)
  }

  const renderMenu = menudata => {
    return (menudata || []).map(item => {
      if (item.children?.length > 0) {
        return (
          <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item
          key={item.key}
          icon={iconList[item.key]}
          onClick={() => skipPage(item.key)}
        >
          {item.title}
        </Menu.Item>
      )
    })
  }

  return (
    <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className='mylogo'>React学习系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu
            theme='dark'
            mode='inline'
            selectedKeys={urlKey}
            defaultOpenKeys={openKey}
          >
            {renderMenu(menu)}
          </Menu>
        </div>
      </div>
    </Sider>
  )
}

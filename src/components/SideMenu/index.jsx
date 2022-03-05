/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-04 17:07:27
 * @Description: 导航边栏
 */
import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;


export default function SideMenu({ collapsed }) {
  const navigate =useNavigate();
  const menuList = [
    {
      key: '/home',
      title: '首页',
      icon: <UserOutlined />,
    },
    {
      key: '/user-manager',
      title: '用户管理',
      icon: <UserOutlined />,
      children: [
        {
          key: '/user-manager/list',
          title: '用户管理列表',
          icon: <UserOutlined />,
        },
      ],
    },
    {
      key: '/right-manage',
      title: '权限管理',
      icon: <UserOutlined />,
      children: [
        {
          key: '/right-manage/role/list',
          title: '角色列表',
          icon: <UserOutlined />,
        },
        {
          key: '/right-manage/right/list',
          title: '权限列表',
          icon: <UserOutlined />,
        },
      ],
    },
    {
      key: '/new-manage',
      title: '新闻管理',
      icon: <VideoCameraOutlined />,
    },
    {
      key: '/audit-manage',
      title: '审核管理',
      icon: <LaptopOutlined />,
    },
    {
      key: '/public-manage',
      title: '发布管理',
      icon: <UploadOutlined />,
    },
  ];

  const skipPage=(key)=>{
    navigate(key);
  };

  const renderMenu = (menudata) => {
    return (menudata || []).map(item => {
      if (item.children) {
        return <SubMenu key={item.key} icon={item.icon} title={item.title}>{renderMenu(item.children)}</SubMenu>;
      }
      return <Menu.Item key={item.key} icon={item.icon} onClick={()=>skipPage(item.key)} >{item.title}</Menu.Item>;
    }
    )
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="mylogo">React学习系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
        {renderMenu(menuList)}
      </Menu>
    </Sider>
  )
}

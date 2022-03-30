/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-04 17:07:27
 * @Description: 导航边栏
 */
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import axios from 'axios';

const { Sider } = Layout;
const { SubMenu } = Menu;


export default function SideMenu({ collapsed }) {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/menus?_embed=children").then(res => {
      console.log("ming", res.data);
      setMenu(res.data);
    }
    )
  }, []);

  // const menuList = [
  //   {
  //     key: '/home',
  //     title: '首页',
  //     icon: <UserOutlined />,
  //   },
  //   {
  //     key: '/user-manager',
  //     title: '用户管理',
  //     icon: <UserOutlined />,
  //     children: [
  //       {
  //         key: '/user-manager/list',
  //         title: '用户管理列表',
  //         icon: <UserOutlined />,
  //       },
  //     ],
  //   },
  //   {
  //     key: '/right-manage',
  //     title: '权限管理',
  //     icon: <UserOutlined />,
  //     children: [
  //       {
  //         key: '/right-manage/role/list',
  //         title: '角色列表',
  //         icon: <UserOutlined />,
  //       },
  //       {
  //         key: '/right-manage/right/list',
  //         title: '权限列表',
  //         icon: <UserOutlined />,
  //       },
  //     ],
  //   },
  //   {
  //     key: '/new-manage',
  //     title: '新闻管理',
  //     icon: <VideoCameraOutlined />,
  //   },
  //   {
  //     key: '/audit-manage',
  //     title: '审核管理',
  //     icon: <LaptopOutlined />,
  //   },
  //   {
  //     key: '/public-manage',
  //     title: '发布管理',
  //     icon: <UploadOutlined />,
  //   },
  // ];

  const iconList = {
    "/home": <UserOutlined />,
    "/user-manager": <VideoCameraOutlined />,
    "/user-manager/list": <UserOutlined />,
    "/right-manage": <VideoCameraOutlined />,
    "/right-manage/role/list": <VideoCameraOutlined />,
    "/right-manage/right/list": <VideoCameraOutlined />,
    "/new-manage": <LaptopOutlined />,
    "/audit-manage": <VideoCameraOutlined />,
    "/public-manage": <UploadOutlined />,
    "/interest": <VideoCameraOutlined />,
    "/content": <LaptopOutlined />,
    "/content/button": <UploadOutlined />,
    "/content/icon": <UploadOutlined />,
    "/about": <UploadOutlined />,
  };

  const skipPage = (key) => {
    navigate(key);
  };

  const renderMenu = (menudata) => {
    return (menudata || []).map(item => {
      if (item.children?.length>0) {
        return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>{renderMenu(item.children)}</SubMenu>;
      }
      return <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => skipPage(item.key)} >{item.title}</Menu.Item>;
    }
    )
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="mylogo">React学习系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
        {renderMenu(menu)}
      </Menu>
    </Sider>
  )
}

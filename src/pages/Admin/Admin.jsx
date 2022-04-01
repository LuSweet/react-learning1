/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-03 21:08:04
 * @Description: admin用户页面
 */
import React, { useState } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'
import './Admin.css'
import BottomFooter from '../../components/BottomFooter'
import { Content } from 'antd/lib/layout/layout'

// const { Content } = Layout

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout
      hasSider
      // style={{
      //   height: '100vh',
      //   width: '100%',
      //   overflow: 'auto',
      //   position: 'fixed',
      //   bottom: 0
      // }}
    >
      <SideMenu collapsed={collapsed} />
      <Layout className='site-layout'>
        <TopHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24
          }}
        >
          <Outlet></Outlet>
        </Content>
        <BottomFooter />
      </Layout>
    </Layout>
  )
}

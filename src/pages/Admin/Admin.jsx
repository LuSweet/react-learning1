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

// const { Content } = Layout

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout
      hasSider
    >
      <SideMenu collapsed={collapsed} />
      <Layout
        className='site-layout'
        style={{ heigth: '100%', overflow: 'auto' }}
      >
        <TopHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <div
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24
          }}
        >
          <Outlet></Outlet>
        </div>
        <BottomFooter />
      </Layout>
    </Layout>
  )
}

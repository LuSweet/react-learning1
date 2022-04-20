/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-03 21:10:13
 * @Description: 路由文件
 */
import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'
import Login from '../pages/Login/Login'
import Home from '../pages/Admin/components/Home'
import UserList from '../pages/Admin/components/UserList'
import RightList from '../pages/Admin/components/RightList'
import RoleList from '../pages/Admin/components/RoleList'
import NewManage from '../pages/Admin/components/NewManage'
import AuditManage from '../pages/Admin/components/AuditManage'
import PublicManage from '../pages/Admin/components/PublicManage'
import AboutMe from '../pages/Admin/components/AboutMe'
import ButtonView from '../pages/Admin/components/Content/ButtonView'
import IconView from '../pages/Admin/components/Content/IconView'
import Editor from '../pages/Admin/components/Interest/Editor'
import Animate from '../pages/Admin/components/Interest/Animate'

export default function IndexRouter () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={localStorage.getItem('token')
          ? <Admin />
          : <Navigate to="/login" />} >
          <Route path='/' element={<Navigate to='/home' />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/user-manager/list' element={<UserList />}></Route>
          <Route path='/right-manage/role/list' element={<RoleList />}></Route>
          <Route path='/right-manage/right/list' element={<RightList />}></Route>
          <Route path='/new-manage' element={<NewManage />}></Route>
          <Route path='/audit-manage' element={<AuditManage />}></Route>
          <Route path='/public-manage' element={<PublicManage />}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/content/button' element={<ButtonView />}></Route>
          <Route path='/content/icon' element={<IconView />}></Route>
          <Route path='/interest/editor' element={<Editor />}></Route>
          <Route path='/interest/animate' element={<Animate />}></Route>
          <Route></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

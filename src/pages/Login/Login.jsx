/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-03 21:08:30
 * @Description: login登录页面
 */
import React from 'react'
import Particles from 'react-particles-js'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Form, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import axios from 'axios'
import './login.css'

export default function Login() {
  const navigate = useNavigate()

  const login = (params) => {
    axios.get(`http://localhost:3000/users?username=${params.username}&password=${params.password}&roleState=true&_expand=role`).then(
      res => {
        console.log('res', res.data)
        if (res.data.length === 0) {
          notification.error({ message: '登陆失败！用户名或密码不匹配' })
        } else {
          localStorage.setItem('token', JSON.stringify(res.data[0]))
          navigate('/')
        }
      }
    )
  }

  return (
    <div className='backgroundBox'>
      <Particles
        height={document.documentElement.clientHeight}
      />
      <div className='container'>
        <div className='loginTitle'>Raect学习系统</div>
        <Form
          onFinish={login}
        >
          <Form.Item
            name="username"
            placeholder="用户名"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

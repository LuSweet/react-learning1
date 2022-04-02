/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-03 21:08:30
 * @Description: login登录页面
 */
import React from 'react'
import Particles from 'react-particles-js'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.css'
// import axios from 'axios'

export default function Login() {
  const navigate = useNavigate()

  const login = (params) => {
    console.log('mjk', params)
    // axios.get()
    localStorage.setItem('token', 'sdf')
    navigate('/')
  }

  return (
    <div className='backgroundBox'>
      <Particles
        height={document.documentElement.clientHeight}
      />
      <div className='container'>
        <div className='loginTitle'>Raect学习系统</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={login}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item> */}
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

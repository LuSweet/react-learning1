/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-03 21:08:30
 * @Description: login登录页面
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

export default function Login() {
  const navigate  = useNavigate();

  const login = () => {
    localStorage.setItem('token', 'sdf');
    navigate('/');
  };

  return (
    <div>
      <h1>Hello</h1>
      <h1>登陆页面</h1>
      <Button type='primary' size='large' onClick={login}>
        登录
      </Button>
    </div>
  )
}

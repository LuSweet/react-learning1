/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:42:22
 * @Description: file content
 */
import React from 'react';
import { Button } from 'antd'
import axios from 'axios';

export default function Home() {
  const ajax = () => {
    axios.get("http://localhost:3000/posts").then(res => {
      console.log("res", res.data);
    });
  };

  return (
    <>
      <div>Home</div>
      <Button type='primary' onClick={ajax}>取数据</Button>
    </>
  )
}

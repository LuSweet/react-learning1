/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:52:33
 * @Description: file content
 */
import { Table } from 'antd'
import React from 'react'

export default function RightList() {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }
  ]
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '权限名称',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key'
    }
  ]
  return <Table dataSource={dataSource} columns={columns} />
}

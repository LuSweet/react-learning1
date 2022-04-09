/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:52:33
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Modal, Switch } from 'antd'
import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons'

import axios from 'axios'

export default function RightList() {
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/menus?_embed=children').then(res => {
      const list = res.data
      list.forEach(item => {
        if (item?.children?.length === 0) {
          item.children = ''
        }
      })
      setDataSource(list)
    })
  }, [])

  const handleDelete = record => {
    Modal.confirm({
      title: '你确定要删除该项吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        deleteMethod(record)
      },
      onCancel() { }
    })
  }

  const deleteMethod = record => {
    console.log(record)
    if (record.grade === 1) {
      setDataSource(dataSource.filter(item => item.id !== record.id))
      axios.delete(`http://localhost:3000/menus/${record.id}`)
    } else {
      const list = dataSource.filter(item => item.id === record.menuId)
      list[0].children = list[0].children.filter(data => data.id !== record.id)
      setDataSource([...dataSource])
      axios.delete(`http://localhost:3000/children/${record.id}`)
    }
  }

  const handleSwitch = record => {
    record.permission = !record.permission
    setDataSource([...dataSource])
    axios.patch(`http://localhost:3000/menus/${record.id}`, {
      permission: record.permission
    })
  }

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
      key: 'key',
      render: key => {
        return <Tag color='green'>{key}</Tag>
      }
    },
    {
      title: '操作',
      render: record => {
        return (
          <Space size='large'>
            <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} onClick={() => handleDelete(record)} />
            <Switch
              checked={record.permission}
              onChange={() => handleSwitch(record)}
            />
          </Space>
        )
      }
    }
  ]
  return <Table dataSource={dataSource} columns={columns} />
}

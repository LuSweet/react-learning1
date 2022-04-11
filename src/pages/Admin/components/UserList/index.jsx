/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:43:24
 * @Description: file content
 */
import React, { useState, useEffect } from 'react'
import { Space, Button, Table, Switch } from 'antd'
import UserModal from './UserModal'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import axios from 'axios'

export default function UserList() {
  const [roleList, setRoleList] = useState([])
  const [regionList, setRegionList] = useState([])
  const [dataSource, setDataSource] = useState([])
  const [visible, setVisible] = useState(false)
  const [currentRecord, setCurrentRecord] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/users?_expand=role').then(
      (res) => {
        setDataSource(res.data)
        console.log('jiayou', res.data)
      }
    )
    axios.get('http://localhost:3000/roles').then(res => setRoleList(res.data))
    axios.get('http://localhost:3000/regions').then(res => setRegionList(res.data))
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '地区',
      dataIndex: 'region',
      key: 'region',
      filters: [
        ...regionList.map(item => ({ text: item.title, value: item.value }))
      ],
      onFilter: (value, item) => item.region.includes(value)
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      key: 'role',
      render: (role) => {
        return role?.roleName
      }

    },
    {
      title: '用户名称',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      key: 'roleState',
      render: (roleState, record) => {
        return <Switch checked={roleState} disabled={record.default} onClick={() => handleChange(record)} />
      }
    },
    {
      title: '操作',
      render: record => {
        return (
          <Space size='large'>
            <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} onClick={() => handleDelete(record)} />
            <EditOutlined style={{ fontSize: '20px' }} onClick={() => handleEdit(record)} />
          </Space>
        )
      }
    }
  ]

  const handleEdit = (record) => {
    setCurrentRecord(record)
    setVisible(true)
  }

  const handleChange = (record) => {
    record.roleState = !record.roleState
    setDataSource([...dataSource])
    axios.patch(`http://localhost:3000/users/${record.id}`, {
      roleState: record.roleState
    })
  }

  const handleDelete = (record) => {
    setDataSource(dataSource.filter(item => item.id !== record.id))
    axios.delete(`http://localhost:3000/users/${record.id}`).then(
      res => console.log(res.data)
    )
  }

  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    if (currentRecord) {
      setDataSource(dataSource.map(item => {
        if (item.id === currentRecord.id) return { ...item, ...values, role: roleList.filter(data => data.id === values.roleId)[0] }
        return item
      }))
      axios.patch(`http://localhost:3000/users/${currentRecord.id}`, values).then(
        res => console.log(res.data)
      )
    } else {
      axios.post('http://localhost:3000/users', { ...values, default: false, roleState: true }).then(
        res => setDataSource([...dataSource, {
          ...res.data, role: roleList.filter(item => item.id === values.roleId)[0]
        }])
      )
    }
    setVisible(false)
  }
  const modalProps = {
    visible,
    onCreate,
    onCancel: () => {
      setVisible(false)
    },
    roleList,
    regionList,
    currentRecord,
    setCurrentRecord
  }

  return (
    <>
      <Button type='primary' onClick={() => {
        setCurrentRecord(null)
        setVisible(true)
      }}>新增用户</Button>
      {visible && <UserModal {...modalProps} />}
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

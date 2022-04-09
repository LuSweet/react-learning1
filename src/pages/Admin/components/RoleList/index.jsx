/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:44:09
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import { Table, Space, Modal } from 'antd'
import axios from 'axios'
import { ExclamationCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import RoleModal from './RoleModal'

export default function RoleList() {
  const [dataSource, setDataSource] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectKey, setSelectKey] = useState([])
  const [changId, setChangeId] = useState()
  useEffect(() => {
    axios.get('http://localhost:3000/roles').then(
      (res) => {
        setDataSource(res.data)
        console.log('jiayou', res.data)
      }
    )
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
    setDataSource(dataSource.filter(item => item.id !== record.id))
    axios.delete(`http://localhost:3000/roles/${record.id}`)
  }

  const showModal = (record) => {
    setChangeId(record.id)
    setSelectKey(record.rights || [])
    setIsModalVisible(true)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName'
    },
    {
      title: '操作',
      render: record => {
        return (
          <Space size='large'>
            <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} onClick={() => handleDelete(record)} />
            <EditOutlined style={{ fontSize: '20px' }} onClick={() => showModal(record)} />
            {/* <Button onClick={() => handleDelete(record)}>删除</Button>
            <Button onClick={() => showModal(record)}>编辑</Button> */}
          </Space>
        )
      }
    }
  ]

  const modalProps = {
    isModalVisible,
    setIsModalVisible,
    selectKey,
    setSelectKey,
    changId,
    dataSource,
    setDataSource
  }
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <RoleModal {...modalProps} />
    </>
  )
}

/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-04-07 17:17:44
 * @Description: file content
 */
import React, { useEffect, useState } from 'react'
import { Modal, Tree } from 'antd'
import axios from 'axios'

export default function RoleModal({
  isModalVisible,
  setIsModalVisible,
  selectKey,
  setSelectKey,
  changId,
  dataSource,
  setDataSource
}) {
  const [rightTree, setRightTree] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/menus?_embed=children').then(
      (res) => setRightTree(res.data)
    )
  }, [])
  const handleOk = () => {
    setDataSource(dataSource.map(item => {
      if (item.id === changId) return { ...item, rights: selectKey }
      return item
    }))
    axios.patch(`http://localhost:3000/roles/${changId}`, {
      rights: selectKey
    })
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onCheck = (checkedKeys) => {
    setSelectKey(checkedKeys)
  }

  return (
    <Modal title="菜单配置" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="确认" cancelText="取消">
      <Tree
        checkable
        checkedKeys={selectKey}
        onCheck={onCheck}
        treeData={rightTree}
      />
    </Modal>
  )
}

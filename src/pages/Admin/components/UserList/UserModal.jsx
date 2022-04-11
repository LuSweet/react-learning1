/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-04-08 09:57:06
 * @Description: 添加用户的模态框
 */
import React, { useEffect } from 'react'
import { Modal, Form, Input, Select } from 'antd'

const { Option } = Select

export default function UserModal({
  visible,
  onCancel,
  onCreate,
  roleList,
  regionList,
  currentRecord,
  setCurrentRecord
}) {
  const [form] = Form.useForm()

  useEffect(() => {
    if (currentRecord) form.setFieldsValue(currentRecord)
  }, [currentRecord])

  return (
    <Modal
      visible={visible}
      title='添加用户'
      okText='确定'
      cancelText='取消'
      onCancel={() => onCancel()}
      onOk={() => {
        console.log('hello')
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form form={form} layout='vertical'>
        <Form.Item
          name='username'
          label='用户名'
          rules={[
            {
              required: true,
              message: '请输入用户名!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          label='密码'
          rules={[
            {
              required: true,
              message: '请输入密码!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='region'
          label='区域'
          rules={[
            {
              required: true,
              message: '请选择区域名!'
            }
          ]}
        >
          <Select>
            {
              regionList.map(item => <Option key={item.id} value={item.value}>{item.title}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item
          name='roleId'
          label='角色'
          rules={[
            {
              required: true,
              message: '请选择角色名!'
            }
          ]}
        >
          <Select>
            {
              roleList.map(item => <Option key={item.id} value={item.id}>{item.roleName}</Option>)
            }
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

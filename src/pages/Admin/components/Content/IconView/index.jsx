/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-04-01 17:35:06
 * @Description: file content
 */
import React from 'react'
import { Card, Progress, Space } from 'antd'

// const ButtonGroup = Button.Group
export default function IconView() {
  return (
    <div>
      <Card title='基本进度条' style={{ margin: '5px 0' }}>
        <Progress percent={30} />
        <Progress percent={50} status='active' />
        <Progress percent={70} status='exception' />
        <Progress percent={100} size='small' />
        <Progress percent={50} showInfo={false} size='small' />
      </Card>
      <Card title='动态进度条'>
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068'
          }}
          percent={69.9}
        />
        <Progress
          strokeColor={{
            from: '#108ee9',
            to: '#87d068'
          }}
          percent={99.9}
          status='active'
        />
        <Space>
          <Progress
            type='circle'
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068'
            }}
            percent={90}
          />
          <Progress
            type='circle'
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068'
            }}
            percent={100}
          />
        </Space>
      </Card>
      <Card title='圆环' style={{ margin: '5px 0' }}>
        <Space>
          <Progress type='circle' percent={75} />
          <Progress type='circle' percent={70} status='exception' />
          <Progress type='circle' percent={100} width={80} />
        </Space>
      </Card>
      <Card title='自定义文字'>
        <Space>
          <Progress
            type='circle'
            percent={75}
            format={percent => `${percent} Days`}
          />
          <Progress type='circle' percent={100} format={() => 'Done'} />
        </Space>
      </Card>
    </div>
  )
}

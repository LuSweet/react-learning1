import React, { useState } from 'react'
import { Button, Divider, Row, Col, Space } from 'antd'
import Icon, { UploadOutlined, CloudUploadOutlined, HomeOutlined } from '@ant-design/icons'

const ButtonGroup = Button.Group

export default function ButtonView() {
  const [loading, setLoading] = useState()
  const [iconLoading, setIconLoading] = useState()

  const enterLoading = () => {
    setLoading(true)
  }

  const enterIconLoading = () => {
    setIconLoading(true)
  }

  return (
    <div>
      <h3>何时使用</h3>
      <Divider />
      <p>
        标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
      </p>
      <div>
        <Row gutter={8}>
          <Col span={12}>
            <div className='baseStyle'>
              <Space>
                <Icon component={HomeOutlined} />
                <Button type='primary'>Primary</Button>
                <Button>Default</Button>
                <Button type='dashed'>Dashed</Button>
                <Button type='danger'>Danger</Button>
                <Button type='link'>Link</Button>
              </Space>
            </div>
            <div className='baseStyle'>
              <Space>
                <Button type='primary' loading>
                  Loading
                </Button>
                <Button type='primary' size='small' loading>
                  Loading
                </Button>
                <Button type='primary' loading={loading} onClick={enterLoading}>
                  Click me!
                </Button>
                <Button
                  type='primary'
                  icon='poweroff'
                  loading={iconLoading}
                  onClick={enterIconLoading}
                >
                  Click me!
                </Button>
                <Button type='primary' loading />
                <Button type='primary' shape='circle' loading />
                <Button type='danger' shape='round' loading />
              </Space>
            </div>
            <div className='baseStyle'>
              <h4>Basic</h4>
              <Space>
                <ButtonGroup>
                  <Button>large</Button>
                  <Button>small</Button>
                  <Button>mini</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button disabled>L</Button>
                  <Button disabled>M</Button>
                  <Button disabled>R</Button>
                </ButtonGroup>
              </Space>
              <h4>With Icon</h4>
              <Space>
                <ButtonGroup>
                  <Button type='primary'>
                    {/* <Icon type='left' /> */}
                    Go back
                  </Button>
                  <Button type='primary'>
                    Go forward
                    {/* <Icon type='right' /> */}
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type='primary' icon={<CloudUploadOutlined />} />
                  <Button type='primary' icon={<UploadOutlined />} />
                </ButtonGroup>
                <ButtonGroup>
                  <Button type='primary' size='small' icon={<CloudUploadOutlined />} />
                  <Button type='primary' size='small' icon={<UploadOutlined />} />
                </ButtonGroup>
              </Space>
            </div>
          </Col>
          <Col span={12}>
            <div className='baseStyle'>
              <Space>
                <Button type='primary' shape='circle' icon='search' />
                <Button type='primary' shape='circle'>
                  A
                </Button>
                <Button type='primary' icon='search'>
                  Search
                </Button>
                <Button shape='circle' icon='search' />
                <Button icon='search'>Search</Button>
                <Button type='dashed' shape='circle' icon='search' />
                <Button type='dashed' icon='search'>
                  Search
                </Button>
              </Space>
            </div>
            <div className='baseStyle'>
              <Space>
                <Button type='primary'>Primary</Button>
                <Button type='primary' disabled>
                  Primary(disabled)
                </Button>
                <Button>Default</Button>
                <Button disabled>Default(disabled)</Button>
                <Button type='dashed'>Dashed</Button>
                <Button type='dashed' disabled>
                  Dashed(disabled)
                </Button>
              </Space>
            </div>
            <div className='baseStyle'>
              {/* <Space direction='vertical'> */}
              <Button type='primary' block>
                Primary
              </Button>
              <Button block>Default</Button>
              <Button type='dashed' block>
                Dashed
              </Button>
              <Button type='danger' block>
                Danger
              </Button>
              <Button type='link' block>
                Link
              </Button>
              {/* </Space> */}
            </div>
          </Col>
        </Row>
      </div>
    </div >
  )
}

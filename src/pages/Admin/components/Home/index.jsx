/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:42:22
 * @Description: file content
 */
import React from 'react'
import { Button, Col, Row } from 'antd'
import axios from 'axios'

export default function Home () {
  const ajax = () => {
    axios.get('http://localhost:3000/posts').then((res) => {
      console.log('res', res.data)
    })
  }

  return (
    <>
      <div>Home</div>
      <Button type="primary" onClick={ajax}>
        取数据
      </Button>
      <Row gutter={24} className="index-header">
        <Col span={6}>
          <div className="base-style wechat">
            {/* <Icon type="wechat" className="icon-style" /> */}
            <div>
              <span>999</span>
              <div>微信</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="base-style qq">
            {/* <Icon type="qq" className="icon-style" /> */}
            <div>
              <span>366</span>
              <div>QQ</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="base-style dingding">
            {/* <Icon type="dingding" className="icon-style" /> */}
            <div>
              <span>666</span>
              <div>钉钉</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="base-style weibo">
            {/* <Icon type="weibo" className="icon-style" /> */}
            <div>
              <span>689</span>
              <div>微博</div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

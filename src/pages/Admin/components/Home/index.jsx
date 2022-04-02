/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:42:22
 * @Description: file content
 */
import React from 'react'
import axios from 'axios'
import { Button, Row, Col } from 'antd'
import Bar from './bar'
import Line from './line'
import Pie from './pie'
import Scatter from './scatter'
import PictorialBar from './pictorialBar'
import './index.css'

export default function Home() {
  const ajax = () => {
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('res', res.data)
    })
  }

  return (
    <div>
      <div>Home</div>
      {/* <div className={styles.myhello}>我可没和你看看会不会九年</div> */}
      <Button type='primary' onClick={ajax}>
        取数据
      </Button>
      {/* <Row gutter={24} className='indexheader'>
        <Col span={6}>
          <div className='wechat'>
            <div>
              <span>999</span>
              <div>微信</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='qq'>
            <div>
              <span>366</span>
              <div>QQ</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='dingding'>
            <div>
              <span>666</span>
              <div>钉钉</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='weibo'>
            <div>
              <span>689</span>
              <div>微博</div>
            </div>
          </div>
        </Col>
      </Row> */}
      <Bar />
      <Row gutter={8}>
        <Col span={12}>
          <div>
            <Line />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Pie />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Scatter />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <PictorialBar />
          </div>
        </Col>
      </Row>
    </div>
  )
}

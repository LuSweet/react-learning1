/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-05 10:42:22
 * @Description: file content
 */
import React from 'react'
import { Row, Col, Divider } from 'antd'
import { FullscreenOutlined, YoutubeOutlined, TwitterOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons'
import screenfull from 'screenfull'
import Bar from './bar'
import Line from './line'
import Pie from './pie'
import Scatter from './scatter'
import PictorialBar from './pictorialBar'
import './index.css'

export default function Home() {
  const fullToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.request(document.getElementById('bar'))
    }
  }
  return (
    <div>
      <Row gutter={24} className='indexheader'>
        <Col span={6}>
          <div className='baseStyle' style={{ backgroundColor: '#cd201f' }}>
            <YoutubeOutlined style={{ fontSize: '60px' }} />
            <div>
              <span>999</span>
              <div>Youtube</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='baseStyle' style={{ backgroundColor: '#55acee' }}>
            <TwitterOutlined style={{ fontSize: '60px' }} />
            <div>
              <span>366</span>
              <div>Twitter</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='baseStyle' style={{ backgroundColor: '#3b5999' }}>
            <FacebookOutlined style={{ fontSize: '60px' }} />
            <div>
              <span>666</span>
              <div>Facebook</div>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className='baseStyle' style={{ backgroundColor: '#0b66c3' }}>
            <LinkedinOutlined style={{ fontSize: '60px' }} />
            <div>
              <span>689</span>
              <div>LinkedIn</div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div style={{ marginBottom: 10, padding: 15, borderRadius: 5, boxShadow: '0 4px 13px 0 rgba(158, 158, 158, 0.6)' }}>
            <div className='header'>
              <div>图形全屏展示</div>
              <FullscreenOutlined onClick={fullToggle} />
            </div>
            <Divider type='horizontal' />
            <Bar />
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <div className='baseStyle'>
            <Line />
          </div>
        </Col>
        <Col span={12}>
          <div className='baseStyle'>
            <Pie />
          </div>
        </Col>
        <Col span={12}>
          <div className='baseStyle'>
            <Scatter />
          </div>
        </Col>
        <Col span={12}>
          <div className='baseStyle'>
            <PictorialBar />
          </div>
        </Col>
      </Row>
    </div >
  )
}

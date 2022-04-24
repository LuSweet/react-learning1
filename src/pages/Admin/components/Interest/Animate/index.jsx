/*
 * @Author: your name
 * @Date: 2022-04-19 14:15:35
 * @LastEditTime: 2022-04-24 09:27:28
 * @LastEditors: Lu Zhu
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-learning1\src\pages\Admin\components\Interest\Animate\index.jsx
 */
import React, { useState } from 'react'
import { Tabs, Button, Space } from 'antd'
// import 'animate.css'

const { TabPane } = Tabs
const typeIn = [
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'fadeIn',
  'fadeInDown',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'flipInX',
  'flipInY',
  'rotateIn'
]
const typeOut = [
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeInDown',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'rotateOut'
]
const typeOther = [
  'bounceIn',
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello'
]
export default function Animate() {
  const [fontType, setFontType] = useState('animate__animated animate__bounceInDown')
  const changeType = (v) => {
    console.log(fontType)
    console.log('你好', v)
    setFontType(`animate__animated animate__${v}`)
  }

  return (
    <div>
      <Tabs type="card">
        <TabPane tab="进场" key="1">
          <Space wrap>
            {typeIn.map((v, i) => (
              <Button
                type='primary'
                size='small'
                key={i}
                onClick={() => changeType(v)}
                ghost>
                {v}
              </Button>
            ))}
          </Space>
        </TabPane>
        <TabPane tab="退场" key="2">
          <Space wrap>
            {typeOut.map((v, i) => (
              <Button
                type='primary'
                size='small'
                key={i}
                onClick={() => changeType(v)}
                ghost>
                {v}
              </Button>
            ))}
          </Space>

        </TabPane>
        <TabPane tab="其他" key="3">
          <Space wrap>
            {typeOther.map((v, i) => {
              console.log('mi', v)
              return (
                <Button
                  type='primary'
                  size='small'
                  key={i}
                  onClick={() => changeType(v)}
                  ghost>
                  {v}
                </Button>
              )
            })}
          </Space>
        </TabPane>
      </Tabs>
      <div
        style={{ fontSize: '100px', textAlign: 'center', padding: '2rem' }}
        className={fontType}>
        Animate.css
      </div>
    </div>
  )
}

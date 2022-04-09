import React from 'react'
import { Typography, Divider } from 'antd'

const { Title, Paragraph, Link } = Typography

export default function AboutMe() {
  return (
    // <div className='base-style'>
    //   <h3>关于作者</h3>
    //   <p>这个人很懒，什么都没有留下……</p>
    // </div>
    <Typography>
      <Title>关于作者</Title>
      <Divider />
      <Paragraph>女、95后</Paragraph>
      <Paragraph>现居陕西西安</Paragraph>
      <Paragraph>是一名前端开发工程师</Paragraph>
      <Paragraph>是万千程序猿中的一只</Paragraph>
      <Paragraph>喜欢编程，喜欢探索新技术，大学生活迷茫过，失落过，还好没有放弃</Paragraph>
      <Paragraph>希望看到这里的你也不要轻易地放弃</Paragraph>
      <Paragraph>这条路上的你并不是孤军奋战，有千千万万的猿在陪你前行</Paragraph>
      <Paragraph>微信：13054149836</Paragraph>
      <Paragraph>个人博客：
        <Link href="http://www.lusweet.top" target="_blank">
          http://www.lusweet.top
        </Link>
      </Paragraph>
      <Paragraph>Github地址：
        <Link href="https://github.com/LuSweet" target="_blank">
          https://github.com/LuSweet
        </Link>
      </Paragraph>
    </Typography>
  )
}

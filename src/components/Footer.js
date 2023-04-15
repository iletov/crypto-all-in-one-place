import { Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div><Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
    <Link to="/">
      CryptoInfo.
    </Link> <br />
    All Rights Reserved.
  </Typography.Title>
  <Space>
    <Link to="/">Home</Link>
    <Link to="/news">News</Link>
  </Space></div>
  )
}

export default Footer
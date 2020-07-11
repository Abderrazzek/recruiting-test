import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { withRouter } from 'react-router-dom'

const EditVideo = ({ match }) => {
  const [video, setVideo] = useState({
    name: 'EasyMovie',
    description: 'description',
  })
  useEffect(() => {
    //get video details from Api
  }, [])

  const onFinish = (values) => {
    console.log('Success:', values)
    // here we call the update video Api with values using this video id
    const id = match.params.videoId
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  `

  return (
    <Wrapper>
      <Form
        style={{ maxWidth: 500 }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          initialValue={video.name}
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input the video name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          initialValue={video.description}
          rules={[
            {
              required: true,
              message: 'Please input the video description!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Edit Video
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default withRouter(EditVideo)

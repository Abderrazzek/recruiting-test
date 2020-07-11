import React from 'react'
import styled from 'styled-components'
import { Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

const AddVideo = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
    // here we call the add video Api with values
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Video"
          name="video"
          rules={[
            {
              required: true,
              message: 'Please upload your video',
            },
          ]}
        >
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Name"
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
            Ajouter Video
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default AddVideo

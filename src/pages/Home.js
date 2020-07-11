import React, { memo } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Home = () => {
  const Wrapper = styled.div``
  return (
    <Wrapper>
      <h2>You are welcome to EasyMovie</h2>

      <Link to="/add-video">Add a new Video</Link>
      <div>
        <Link to="/video-list">Show video list </Link>
      </div>
    </Wrapper>
  )
}

export default memo(Home)

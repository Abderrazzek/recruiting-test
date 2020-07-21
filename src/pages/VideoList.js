import React, { memo, useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import VideoDetails from '../components/VideoDetails'
import { MoviesContext } from '../context/movies'

const VideoList = () => {
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    // fetch data from Api
    setVideoList([
      {
        id: '1',
        link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        name: 'EasyMovie',
        description: 'Introduction',
      },
      {
        id: '2',
        link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        name: 'EasyMovie',
        description: 'Introduction',
      },
      {
        id: '3',
        link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        name: 'EasyMovie',
        description: 'Introduction',
      },
      {
        id: '4',
        link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        name: 'EasyMovie',
        description: 'Introduction',
      },
    ])
  }, [])
  const { movies } = useContext(MoviesContext)
  const Wrapper = styled.div`
    padding: 40px;
  `
  return (
    <Wrapper>
      {movies.length !== 0 ? (
        movies.map((video, key) => <VideoDetails key={key} video={video} />)
      ) : (
        <div>Empty List</div>
      )}
    </Wrapper>
  )
}

export default memo(VideoList)

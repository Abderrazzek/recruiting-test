import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CloseCircleOutlined, FormOutlined } from '@ant-design/icons'
import ThemeContext from '../context/theme'
import { MoviesContext } from '../context/movies'

const VideoDetails = ({ video: { id, link, name, description } }) => {
  const theme = React.useContext(ThemeContext)
  const { dispatchMovies } = React.useContext(MoviesContext)
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    max-width: 424px;
  `
  const Video = styled.iframe`
    height: 238px;
    width: 424px;
  `
  const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: #dcdcdc;
    padding-left: 30px;
    padding-right: 30px;
  `
  const Name = styled.h3`
    color: ${(props) => props.color};
    font-size: 20px;
  `
  const Description = styled.p`
    font-size: 14px;
  `
  const deleteVideo = (id) => {
    //call delete api
    console.log('delete video', id)
    dispatchMovies({ type: 'DELETE', id })
  }
  return (
    <Wrapper>
      {link ? (
        <Video
          src={link}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
      ) : null}
      <TextWrapper>
        <div>
          {name ? <Name color={theme.colors.primary}>{name}</Name> : null}
          {description ? <Description>{description}</Description> : null}
        </div>
        <div>
          <CloseCircleOutlined onClick={() => deleteVideo(id)} />
          <div>
            <Link to={`/edit-video/${id}`}>
              <FormOutlined />
            </Link>
          </div>
        </div>
      </TextWrapper>
    </Wrapper>
  )
}

VideoDetails.propTypes = {
  video: PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default memo(VideoDetails)

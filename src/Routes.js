import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddVideo from './pages/AddVideo'
import VideoList from './pages/VideoList'
import EditVideo from './pages/EditVideo'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-video" component={AddVideo} />
        <Route exact path="/edit-video/:videoId" component={EditVideo} />
        <Route exact path="/video-list" component={VideoList} />
      </Switch>
    </Router>
  )
}
export default memo(Routes)

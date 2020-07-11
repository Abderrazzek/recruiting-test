import React from 'react'
import Routes from './Routes'
import { ThemeContextProvider } from './context/theme'
import './App.css'
import VideoDetails from './components/VideoDetails'
import AddVideo from './pages/AddVideo'

function App() {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  )
}

export default App

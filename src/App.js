import React from 'react'
import Routes from './Routes'
import { ThemeContextProvider } from './context/theme'
import MoviesContextProvider from './context/movies'
import './App.css'
import VideoDetails from './components/VideoDetails'
import AddVideo from './pages/AddVideo'

function App() {
  return (
    <ThemeContextProvider>
      <MoviesContextProvider>
        <Routes />
      </MoviesContextProvider>
    </ThemeContextProvider>
  )
}

export default App

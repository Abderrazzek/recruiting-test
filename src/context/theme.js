import React from 'react'

const colors = {
  primary: 'red',
}

const theme = {
  colors,
}

const ThemeContext = React.createContext(theme)

export const ThemeContextProvider = ({ children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
export default ThemeContext

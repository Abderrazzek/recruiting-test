import React, { useReducer } from 'react'

const initialValues = [
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
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'DELETE':
      return state.filter((item) => item.id !== action.id)
    case 'UPDATE':
      const index = state.findIndex((item) => item.id === action.values.id)
      console.log('indexx', index)
      return [
        ...state.slice(0, index),
        action.values,
        ...state.slice(index + 1),
      ]
    default:
      console.log('This should not happens')
  }
}

export const MoviesContext = React.createContext(initialValues)

export const MoviesContextProvider = ({ children }) => {
  const [movies, dispatchMovies] = useReducer(reducer, initialValues)

  return (
    <MoviesContext.Provider value={{ movies, dispatchMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}
export default MoviesContextProvider

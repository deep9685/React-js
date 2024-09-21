import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Hey Buddy!!</h1>
  )
}

const name = "Deepak"

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Me</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click ME',
  name
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // <MyApp/>
  // MyApp()

  // anotherElement

  reactElement
)

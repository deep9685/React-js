import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  

  return (
    <>
      <h1 className='text-orange-400'>
        Tailwind test
      </h1>

      <Card title="Sneaker" description="Best Sneaker for your comfort"/>

      <Card title="Sporty" description="Best Sport Shoes for your comfort"/>

    </>
  )
}

export default App

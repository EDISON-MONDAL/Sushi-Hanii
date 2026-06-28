import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import bgBody from './assets/bg-body.png'

import Home from './Pages/Home'
import { Route, Routes } from "react-router";
import { MyContext } from './Components/Context'
import Menu from './Pages/Menu'
import Blog from './Pages/Blog'
import About from './Pages/About'



function App() {
  const [count, setCount] = useState(0)
  const [showChildMenu, setShowChildMenu] = useState(false)

  const value = {
    showChildMenu,
    setShowChildMenu
  }

  return (
    <MyContext.Provider value={value}>
      <div className='w-full bg-repeat-x flex justify-center bg-[length:auto_100%]'
        style={{
          backgroundImage: `url(${bgBody})`,
        }} 
        onClick={(e) => {
                            setShowChildMenu(false)
                        }}       
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </MyContext.Provider>
  )
}

export default App

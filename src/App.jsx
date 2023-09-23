import { useState } from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work/Work.jsx'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Sidenav/>
      <Main />
      <Work />
      <Projects />
      <Contact />
    </>
  )
}

export default App

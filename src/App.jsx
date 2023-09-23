import { useState } from 'react'
import './App.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work/Work.jsx'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Sidenav/>
      <Main />
      <Work />
      <Projects />
    </>
  )
}

export default App

import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'

import Footer from '../components/Footer/Footer'
const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <Main />
      <Footer />

    </>
  )
}

export default Home
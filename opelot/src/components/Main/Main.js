import React from 'react'
import classes from './Main.module.css'
import About from './About/About'
import Services from './Services/Services'
const Main = () => {
  return (
    <main className={classes.mainContainer}>
    <About/>
    <Services/>
    </main>
  )
}

export default Main
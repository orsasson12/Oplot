import React from 'react'
import classes from './Header.module.css'
import bgVideo from '../../assets/Videos/WhatsApp Video 2022-04-24 at 14.28.11.mp4'
const Header = () => {
  return (
    <header className={classes.headerContainer}>
    <div className={classes.headerBg}>
        <video className={classes.videoContainer} autoPlay loop muted src={bgVideo}/>      
    </div>
    <div className={classes.headerContent}>
    <h1 >לראות נקי יותר</h1>
    </div>
    </header>
  )
}

export default Header
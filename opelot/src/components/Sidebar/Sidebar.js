import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import classes from './Sidebar.module.css'
function Sidebar({toggle,isOpen}) {
  return (
    <aside className={classes.sidebarContainer} style={{opacity:isOpen? '100%': '0', top: isOpen ? '0' : '-100%'}}>
      <div className={classes.icon} onClick={toggle} >
      <FaTimes />
      </div>
      <div className={classes.sidebarWrapper}>
      <ul className={classes.sidebarMenu}>
        <li className={classes.sidebarItem}>
          <LinkS onClick={toggle} to='about'>
            עלינו
          </LinkS>
        </li>
        <li className={classes.sidebarItem}>
          <LinkS onClick={toggle} to='services'>
            שירותים
          </LinkS>
        </li>
        <li className={classes.sidebarItem}>
          <LinkS onClick={toggle} to='contact'>
            צור קשר
          </LinkS>
        </li>
      </ul>
      </div>
    </aside>
  )
}

export default Sidebar
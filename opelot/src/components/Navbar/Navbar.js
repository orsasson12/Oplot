import React,{useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/Images/oplot.png'
import classes from './Navbar.module.css'
const Navbar = ({toggle}) => {
     const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
  
  return (
    <nav className={`${classes.nav}`} style={{background: scrollNav ?  `#f2f2f2`: 'transparent'}}>
    <div className={classes.nav__container}>
    <LinkR className={classes.NavLogo} to='/' onClick={toggleHome}>{<img src={Logo} alt='logo'/>}</LinkR>
    <div className={classes.MobileIcon} onClick={toggle}>
                  <FaBars style={{ color: scrollNav ? `black` : 'white' }}/>
    </div>
    
    <ul className={classes.NavMenu}>
    <li className={classes.NavItem}>
    <LinkS  className={classes.NavLink} to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>צור קשר</LinkS>
    </li>
    
    <li className={classes.NavItem}>
    <LinkS className={classes.NavLink} to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>שירותים</LinkS>
    </li>
    <li className={classes.NavItem}>
    <LinkS className={classes.NavLink}   to='about'  smooth={true} duration={500} spy={true} exact='true' offset={-80}>עלינו</LinkS>
    </li>
    </ul>

    </div>
    </nav>
  )
}

export default Navbar
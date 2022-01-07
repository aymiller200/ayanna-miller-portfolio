import './Header.css'
import '../components/Nav/NavList.css'

import { useEffect, useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiFillHome } from 'react-icons/ai'

import Nav from './Nav/Nav'
import Resume from '../img/MyResume.pdf'


const Header = () => {
  const nav = ['About', 'Projects', 'Resume']
  const [highlight, setHighlight] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [entry, setEntry] = useState(false)

  const onHover = (e) => {
    setHighlight(true)
    const item = e.target
    const siblings = item
      .closest(!menuOpen ? '.nav-list' : '.nav-list--small')
      .querySelectorAll('.nav-item')
    siblings.forEach((el) => {
      if (el !== item && highlight) {
        el.style.opacity = 0.5
        el.style.transition = '.2s ease-in'
      } else {
        el.style.opacity = 1
        item.style.transition = '.2s ease-in'
      }
    })
  }

  const displayMenu = () => {
    setMenuOpen(!menuOpen) 
  }

  const handleMouseLeave = () => {
    setHighlight(false)
  }

  const smoothScrollHeader = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const home = document.querySelector('#header-id')
    home.scrollIntoView({behavior: 'smooth'})
  }

  const smoothScrollAbout = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const about = document.querySelector('#about-container')
    about.scrollIntoView({behavior: 'smooth'})
  }

  const smoothScrollProject = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    const projects = document.querySelector('#content')
    projects.scrollIntoView({behavior: 'smooth'})
  }

  const observeNav = () => {
    const header = document.querySelector('.header-container')
    const sticky = function (entries) {
      const [entry] = entries

      if (!entry.isIntersecting) {
        setEntry(true)
      } else {
        setEntry(false)
      }
    }

    const navObs = new IntersectionObserver(sticky, {
      root: null,
      threshold: 0,
      rootMargin: `-${90}px`,
    })

    navObs.observe(header)
  }

  useEffect(() => {
    observeNav()
  }, [])

  return (
    <div className="header-container" id="header-id">
      <HiOutlineMenu className="menu-button" onClick={displayMenu} />
      <ul
        className={!menuOpen ? 'nav-list' : 'nav-list--small'}
        style={
          entry && !menuOpen
            ? {
                position: 'fixed',
                background: 'rgba(0, 0, 0, 0.35)',
                width: '100%',
                boxShadow: '1px 1px 10px black',
                padding: '10px',
                transition: '0.5s ease-in',
              }
            : null
        }
      >
        <a href="#header-id" onClick={smoothScrollHeader} className={entry ? 'home' : 'home-hidden'} >
          {entry && menuOpen ? 'Home' : <AiFillHome />}
        </a>

        {nav.map((selection, i) => (
          <div key={Math.random()}>
            <a
              href={
                selection[i] === selection[0]
                  ? '#about-container'
                  : selection[i] === selection[1]
                  ? '#content'
                  : `${Resume}`
              }
              download={
                selection[i] === selection[2] ? "Ayanna's Resume" : null
              }
              rel="noreferrer"
              className="item-link"
              key={Math.random()}
              onClick={selection[i] === selection[0] ? smoothScrollAbout : selection[i] === selection[1] ? smoothScrollProject : null}
            >
              <li
                key={Math.random()}
                className="nav-item"
                onMouseOver={onHover}
                onMouseOut={handleMouseLeave}
              >
                {selection}
              </li>
            </a>
          </div>
        ))}
      </ul>
      <Nav />
      <header className="header">
        <div className="header-text-container">
          <h1 className="header-text">
            <span className="header-large">Ayanna Miller</span>
            <span className="header-sub">Software Engineer</span>
          </h1>
        </div>
      </header>
    </div>
  )
}

export default Header

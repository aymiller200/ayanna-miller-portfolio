import './Projects.css'

import { useState, useEffect } from 'react'

import {
  BsGithub,
  BsArrowRightCircleFill,
  BsArrowLeftCircleFill,
} from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'

import Footer from '../Footer/Footer'

const Projects = () => {
  const slides = document.querySelectorAll('.project-text')
  const maxSlide = slides.length

  const [hidden, setHidden] = useState(true)
  const [curSlide, setCurSlide] = useState(0)

  const revealSection = () => {
    const section = document.querySelector('.project-content')
    const reveal = (entries, observer) => {
      const [entry] = entries
      if (!entry.isIntersecting) return
      setHidden(false)
      observer.unobserve(entry.target)
    }
    const projectObs = new IntersectionObserver(reveal, {
      root: null,
      threshold: 0.3,
    })

    projectObs.observe(section)
  }

  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`
    })
  }

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      setCurSlide(0)
    } else {
      setCurSlide(curSlide + 1)
    }
    goToSlide(curSlide)
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      setCurSlide(maxSlide - 1)
    } else {
      setCurSlide(curSlide - 1)
    }

    goToSlide(curSlide)
  }

  useEffect(() => {
    revealSection()
    goToSlide(curSlide)
  })

  return (
    <div className="project-content" id="content">
      <h1 className={!hidden ? 'projects-title' : 'hidden'}>Projects</h1>

      <div className={!hidden ? 'project' : 'hidden'}>
        <div className="project-container">
          <div className="slider-container">
            <div className="slider-left-container">
              <button className="slider-left" onClick={prevSlide}>
                <BsArrowLeftCircleFill />
              </button>
            </div>
            <div className="project-text-container">
              <div className="links">
                <div className="title">
                <h5 className="project-title">
                  {curSlide === 0 ? 'When in Rome' 
                  : curSlide === 1 ?
                   'Play Fetch'
                    : curSlide === 2
                    ? 'Forkify'
                    : curSlide === 3
                    ? 'Btn Mash'
                    : curSlide === 4
                    ? 'On Tour'
                    : null}
                </h5>
                </div>
                <a
                  href={
                    curSlide === 0
                      ? 'https://github.com/aymiller200/when-in-rome' 
                      : curSlide === 1 ?'https://github.com/aymiller200/basic-stencil'
                      : curSlide === 2
                      ? 'https://github.com/aymiller200/forkify-am'
                      : curSlide === 3
                      ? 'https://github.com/aymiller200/bbclient'
                      : curSlide === 4
                      ? 'https://github.com/aymiller200/red-badge-client'
                      : 'https://github.com/aymiller200/when-in-rome'
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="repo-link"
                >
                  <BsGithub className="github" />
                </a>
                <a
                  href={
                    curSlide === 0
                      ? 'https://main--roman-numeral-conversion-200.netlify.app/'
                      : curSlide === 1 ? 'https://aymiller200.github.io/stencil-react-app/'
                      : curSlide === 2
                      ? 'https://forkify-ayanna.netlify.app/'
                      : curSlide === 3
                      ? 'https://arm-my-btnmash.herokuapp.com/'
                      : curSlide === 4
                      ? 'https://am-ontour.herokuapp.com/'
                      : 'https://github.com/aymiller200/when-in-rome'
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="site-link"
                >
                  <FaDesktop className="site" />
                </a>
              </div>
              <div className="text-slide-container">
                <h4 className="project-text" id="1">
                  A Next.js application utilizing algorithm logic to take a user's input and convert that input from a Roman Numeral to a number, or a number to a Roman Numeral.
                </h4>
                <h4 className="project-text" id="2">
                  A React application created with my own custom Stencil web
                  components published to NPM. Allows the user to view dog
                  images and save those images to their favorites. Utilizes data
                  fetched from the Dog CEO API.
                </h4>

                <h4 className="project-text" id="3">
                  A static web application created during a 70 hour JavaScript
                  course on Udemy. This project utilizes everything learned in
                  the course, from simple concepts and methods, to MVC
                  architecture and JavaScript Modules.
                </h4>

                <h4 className="project-text" id="4">
                  A full stack application. Allows users to register, login, and
                  review video games. Client side is built out in React, back
                  end utilizes Node and SQL.
                </h4>
                <h4 className="project-text" id="5">
                  A full stack application aimed towards touring
                  indepedent musicians looking for a safe place to stay while
                  they are on the road. Client
                  side is built out in React and TypeScript, while the back end
                  utilizes Node and SQL.
                </h4>
              </div>
            </div>
            <div className="slider-right-container">
              <button className="slider-right" onClick={nextSlide}>
                <BsArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects

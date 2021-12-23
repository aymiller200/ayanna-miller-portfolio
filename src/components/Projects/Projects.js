import './Projects.css'

import { useState, useEffect } from 'react'

import { BsGithub } from 'react-icons/bs'
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
        <h5 className="project-title">
          {curSlide === 0
            ? 'Play Fetch'
            : curSlide === 1
            ? 'Pig Game'
            : curSlide === 2
            ? 'Btn Mash'
            : curSlide === 3
            ? 'Poke App'
            : curSlide === 4
            ? 'On Tour'
            : null}
        </h5>
        <div className="project-container">
          <div className="slider-container">
            <div className="slider-left-container">
              <button className="slider-left" onClick={prevSlide}>
                &larr;
              </button>
            </div>
            <div className="project-text-container">
              <div className="links">
                <a
                  href={
                    curSlide === 0
                      ? 'https://github.com/aymiller200/basic-stencil'
                      : curSlide === 1
                      ? 'https://github.com/aymiller200/pig-game'
                      : curSlide === 2
                      ? 'https://github.com/aymiller200/bbclient'
                      : curSlide === 3
                      ? 'https://github.com/aymiller200/API-pokemon'
                      : curSlide === 4
                      ? 'https://github.com/aymiller200/red-badge-client'
                      : 'https://github.com/aymiller200/basic-stencil'
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
                      ? 'https://aymiller200.github.io/stencil-react-app/'
                      : curSlide === 1
                      ? 'https://aymiller200.github.io/pig-game/'
                      : curSlide === 2
                      ? 'https://arm-my-btnmash.herokuapp.com/'
                      : curSlide === 3
                      ? 'https://aymiller200.github.io/API-pokemon/'
                      : curSlide === 4
                      ? 'https://am-ontour.herokuapp.com/'
                      : 'https://aymiller200.github.io/stencil-react-app/'
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
                  A React application created with my own custom Stencil web
                  components published to NPM. Allows the user to view dog
                  images and save those images to their favorites. Utilizes data
                  fetched from the Dog CEO API.
                </h4>
              
               
                <h4 className="project-text" id="2">
                  A code-along dice rolling game utilizing vanilla JS with a
                  focus on DOM events, DOM manipulation, and styling.
                </h4>
              
               
                <h4 className="project-text" id="3">
                  A full stack application. Allows users to register, login, and
                  review video games. Client side is built out in React, back
                  end utilizes Node and SQL.
                </h4>
              
               
                <h4 className="project-text" id="4">
                  This app allows users to search or click through Pokemon with
                  data fetched from the Poke API.
                </h4>
              
         
                <h4 className="project-text" id="5">
                  On Tour is a full stack application aimed towards touring
                  indepedent musicians looking for a safe place to stay while
                  they are on the road. Users can register as a host, as a guest,
                  or both. Guests have the ability to book with hosts, and the
                  two can communicate with eachother via the app. Client side is
                  built out in React and TypeScript, while the back end utilizes
                  Node and SQL.
                </h4>
              
              </div>
            </div>
            <div className="slider-right-container">
              <button className="slider-right" onClick={nextSlide}>
                &rarr;
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

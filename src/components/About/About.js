import { useEffect, useState } from 'react'
import './About.css'
import AboutCorner from './AboutCorner'
import Social from './Social/Social'

const About = () => {
  const [hidden, setHidden] = useState(true)

  const revealSection = () => {
    const section = document.querySelector('.about')
    const reveal = (entries, observer) => {
      const [entry] = entries
      if (!entry.isIntersecting) return
      setHidden(false)
      observer.unobserve(entry.target)
    }

    const aboutObs = new IntersectionObserver(reveal, {
      root: null,
      threshold: 0.3,
    })

    aboutObs.observe(section)
  }

  useEffect(() => {
    revealSection()
  },[])

  return (
    <>
      <div id="about-container">
        <AboutCorner />
        <div className="about">
          <h1 className={!hidden ? 'about-title' : 'hidden'}>About</h1>
          <h2 className={!hidden ? 'about-paragraph' : 'hidden'}>
            Since my graduation from Eleven Fifty Academy's immersive six month
            web development bootcamp, I have spent my time fostering a deeper
            and more well rounded knowledge of technologies and frameworks such
            as Javascript and React, diving into the depths of UX/UI, getting my feet wet with libraries such as Stencil, and exploring C# in terms of game design.
            <br />
            <br />
            Through countless projects, courses, and bugs, I have a confidence
            in what I know, a desire to learn so much more, and a passion for
            creating, problem solving, and thinking outside of the div.
            <br />
            <br />
            If you would like to know more contact me at <a href="mailto:aymiller200@gmail.com" target="_blank" rel="noreferrer" className="email"><u>aymiller200@gmail.com</u></a>.
          </h2>
           <Social hidden={hidden}/> 
        </div>
      </div>
    </>
  )
}

export default About

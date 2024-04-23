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
            Hello and thanks for checking out my portfolio! A little about myself: I am a graduate of Eleven Fifty Academy's immersive six month
            web development bootcamp. I have a passion for sleak and unique front end design, and a mighty fine grasp on TypeScript, React, Next.js, CSS, and HTML. I am quick learner with a desire to reach past the walls of my comfort zone and into the unknown. 
            <br />
            <br />
            I am currently working as a full stack engineer at JD/Finishline with emphasis on Javascript, React, Java, and MongoDB. I develope manager and associate facing apps that help stores track metrics, receive and send out shipments, orders, and transfers, and gain visibility on associate compliance. 
            <br />
            <br />
            My last position before JD/Finishline had me creating proofs of concept with Blazor, C#, and .Net and diving into the depths of database design with SqlDBM and Microsoft SQL Server! 
            <br />
            <br />
            I strive to create and collaborate, to be part of a team that's moving forward, to always be reaching for that next goal. 
            <br />
            <br />
            If you would like to chat about what I am currently working on, or want to know more about my past experience contact me at <a href="mailto:aymiller200@gmail.com" target="_blank" rel="noreferrer" className="email"><u>aymiller200@gmail.com</u></a>.
          </h2>
        
           <Social hidden={hidden}/> 
        </div>
      </div>
    </>
  )
}

export default About

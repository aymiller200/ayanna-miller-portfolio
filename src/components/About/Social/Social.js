import { BsLinkedin, BsGithub, BsFillFileEarmarkPdfFill } from 'react-icons/bs'
import Resume from '../../../img/MyResume.pdf'

import './Social.css'

const Social = (props) => {
  return (
    <div className={!props.hidden ? "social" : "hidden-social"} >
      <a className="social-items"
        href="https://www.linkedin.com/in/ayanna-miller200/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/aymiller200" target="_blank" rel="noreferrer" className="social-items">
        
        <BsGithub/>
      </a>
      <a href={Resume} download="Ayanna's Resume" rel="noreferrer" className="social-items">
        <BsFillFileEarmarkPdfFill/>
      </a>
    </div>
  )
}

export default Social

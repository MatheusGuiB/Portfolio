import { StyledProjectButton } from './style'
import { useState } from 'react'
import inprogress from '../../assets/images/work.gif'
import smart from '../../assets/images/smart.png'
import kero from '../../assets/images/kero.png'
import alejandro from '../../assets/images/alejandro.jpg'

const ProjectMain = () => {
  const [classNameProjects, setClassNameProjects] = useState('display')
  const [closeButton, setCloseButton] = useState('projects-button')
  return (
    <div>
      <StyledProjectButton id="projects">
        <div className={closeButton}>
          <button
            className="openProject"
            onClick={() => {
              setClassNameProjects('display-flex')
              setCloseButton('projects-button-none')
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Projects
          </button>
        </div>
        <section className={classNameProjects}>
          <div className="container">
            <ul>
              <li className="img">
                <a
                  href="https://www.smartsdevs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={smart} alt="smart" />
                </a>
              </li>
              <li className="img">
                <a
                  href="https://testapp.kerootica.com.br/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={kero} alt="kero" />
                </a>
              </li>
              <li className="img">
                <a
                  href="https://spectacular-marzipan-87993d.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={alejandro} alt="alejandro" />
                </a>
              </li>
              <li className="img">
                <a href="#projects" rel="noreferrer">
                  <img src={inprogress} alt="txt" className="pix" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </StyledProjectButton>
    </div>
  )
}

export default ProjectMain

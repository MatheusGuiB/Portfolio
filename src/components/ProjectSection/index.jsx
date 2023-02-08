import { StyledProjectButton } from './style'
import { useState } from 'react'
import inprogress from '../../assets/images/work.gif'

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
            <button
              className="close"
              onClick={() => {
                setClassNameProjects('display')
                setCloseButton('projects-button')
              }}
            >
              Close
            </button>
            <ul>
              <li className="img">
                <a
                  href="https://thunderous-marigold-21a340.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="txt-project">Quiz Song</h1>
                </a>
              </li>
              <li className="img">
                <a
                  href="https://clinquant-raindrop-ac903a.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="txt-project">MemoryGame</h1>
                </a>
              </li>
              <li className="img">
                <a
                  href="https://spectacular-marzipan-87993d.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="txt-project">Piano</h1>
                </a>
              </li>
              <li className="img">
                <a href="#projects" rel="noreferrer">
                  <img src={inprogress} alt="txt" />
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

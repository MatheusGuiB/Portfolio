import { StyledProjectButton } from './style'
import { useState } from 'react'

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
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
      </StyledProjectButton>
    </div>
  )
}

export default ProjectMain

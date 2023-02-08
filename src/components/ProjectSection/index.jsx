import { StyledProjectButton } from './style'
import { useState } from 'react'
import inprogress from '../../assets/images/work.gif'

const images = [
  inprogress,
  inprogress,
  inprogress,
  inprogress,
  inprogress,
  inprogress,
]

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
              {images.map((image) => (
                <li className="img" key={image}>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="img-style" src={image} alt="txt" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </StyledProjectButton>
    </div>
  )
}

export default ProjectMain

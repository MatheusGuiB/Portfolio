import { StyledProjectMain } from './style'
import { StyledProjectComponent } from './style'
import { useState } from 'react'

const ProjectMain = () => {
  const [handleOpenProjects, setHandleOpenProjects] = useState(false)
  return (
    <>
      <StyledProjectMain id="projects">
        <div className="projects-button">
          {handleOpenProjects ? (
            <StyledProjectComponent>
              <div className="container">
                <button
                  onClick={() => setHandleOpenProjects(!handleOpenProjects)}
                >
                  Hello
                </button>
              </div>
            </StyledProjectComponent>
          ) : (
            <button onClick={() => setHandleOpenProjects(!handleOpenProjects)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Projects
            </button>
          )}
        </div>
      </StyledProjectMain>
    </>
  )
}

export default ProjectMain

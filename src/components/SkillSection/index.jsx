import { StyledSkillMain } from './style'
import { SkillStyledHeader } from './style'

const SkillMain = () => {
  return (
    <StyledSkillMain id="skills">
      <SkillStyledHeader>
        <div className="skill-container">
          <div className="main-info">
            <h1>Skills</h1>
            <p>These are the skills that I have the most proficiency</p>
          </div>
          <ul className="main-skills-info">
            <li className="react-info">
              <div className="react">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt=""
                />
              </div>
              <h2>React</h2>
            </li>
            <li className="javascript-info">
              <div className="javascript">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                  alt=""
                />
              </div>
              <h2>Javascript</h2>
            </li>
            <li className="html-info">
              <div className="html">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  alt=""
                />
              </div>
              <h2>HTML</h2>
            </li>
            <li className="css-info">
              <div className="css">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  alt=""
                />
              </div>
              <h2>CSS</h2>
            </li>
            <li className="python-info">
              <div className="python">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt=""
                />
              </div>
              <h2>Python</h2>
            </li>
          </ul>
        </div>
      </SkillStyledHeader>
    </StyledSkillMain>
  )
}

export default SkillMain

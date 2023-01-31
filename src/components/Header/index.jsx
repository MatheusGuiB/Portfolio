import { StyledHeader } from './style'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

//viajar pelo portifólio

const Header = () => {
  return (
    <div id="about">
      <StyledHeader>
        <h1 className="my-photo">Logo</h1>
        <ul className="info-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="{}">Contats</a>
          </li>
        </ul>
        <div className="icons-header">
          <a
            href="https://www.linkedin.com/in/matheus-guilherme-903351253/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="icon-header" />
          </a>
          <a
            href="https://github.com/MatheusGuiB"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="icon-header" />
          </a>
          <a href="https://wa.me/44998665283" target="_blank" rel="noreferrer">
            <BsWhatsapp className="icon-header" />
          </a>
        </div>
      </StyledHeader>
    </div>
  )
}

export default Header

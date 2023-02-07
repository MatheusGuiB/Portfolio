import { StyledContatSection } from './style'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const ContatSection = () => {
  return (
    <StyledContatSection id="contacts">
      <div className="container-contacts">
        <h2>Contact me</h2>
        <nav className="contacts-links">
          <div className="email">
            <section>
              <AiOutlineMail className="icon-projects" />
            </section>
            <p className="txt">Email</p>
            <p>mathheusguilhherme@hotmail.com</p>
            <a href="mailto:mathheusguilhherme@hotmail.com" rel="noreferrer">
              Send a message
            </a>
          </div>
          <div className="linkedin">
            <section>
              <BsLinkedin className="icon-projects" />
            </section>
            <p className="txt">Linkedin</p>
            <p>Matheus Guilherme - Web Developer</p>
            <a
              href="https://www.linkedin.com/in/matheus-guilherme-903351253/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="github">
            <section>
              <AiFillGithub className="icon-projects" />
            </section>
            <p className="txt">Github</p>
            <p>Matheus Guilherme - Web Developer</p>
            <a
              href="https://github.com/MatheusGuiB"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="whatsapp">
            <section>
              <BsWhatsapp className="icon-projects" />
            </section>
            <p className="txt">Whatsapp</p>
            <p>+55 (44) 99866-5283</p>
            <a
              href="https://wa.me/44998665283"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
        </nav>
      </div>
    </StyledContatSection>
  )
}

export default ContatSection

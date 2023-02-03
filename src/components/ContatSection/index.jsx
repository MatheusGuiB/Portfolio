import { StyledContatSection } from './style'
import myphoto from '../../assets/images/myphoto.jpeg'

const ContatSection = () => {
  return (
    <StyledContatSection id="contats">
      <div className="container-contats">
        <img src={myphoto} alt="" />
        <div>
          <p>Email</p>
          <p>Linkedin</p>
          <p>GitHub</p>
          <p>Whatsapp</p>
        </div>
      </div>
    </StyledContatSection>
  )
}

export default ContatSection

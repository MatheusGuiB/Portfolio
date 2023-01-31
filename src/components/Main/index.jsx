import { StyledMain } from './style'
import spaceman from '../../assets/images/espace.gif'

const Main = () => {
  return (
    <StyledMain>
      <div className="main-container">
        <section className="private-info">
          <h1 className="my-port">Welcome to my Portifolio</h1>
          <h1 className="math">Hi, I'm Matheus Guilherme Web Developer</h1>
          <p className="description">
            My name is Matheus Guilherme, passionate about technology/computers,
            it has always been my dream to work with something I like and I get
            along well. Looking for a job in the areas that I have mastered and
            studied for the longest time, but always willing to learn more every
            day and evolve as a developer.
          </p>
        </section>
        <div className="space-man">
          <img src={spaceman} alt="" />
        </div>
      </div>
    </StyledMain>
  )
}

export default Main

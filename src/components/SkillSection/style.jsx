import styled from 'styled-components'
import skillBack from '../../assets/images/linguagens.png'

export const StyledSkillMain = styled.div`
  width: 100vw;
  height: 100vh;
  box-shadow: 0px -50px 150px 100px #000000;
  background-image: url(${skillBack});
  background-repeat: no-repeat;
  background-size: cover;
  /* .icon-roll {
    position: absolute;
    bottom: -98%;
    font-size: 50px;
    left: 50%;
    color: white;
  }
  .icon-roll:hover {
    transform: scale(1.2);
    cursor: pointer;
  } */
`

export const SkillStyledHeader = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .skill-container {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 60px;
    padding: 50px;
  }
  .main-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    color: white;
  }
  .main-skills-info {
    display: flex;
    justify-content: space-around;
    gap: 50px;
    color: white;
    list-style: none;
    padding-right: 40px;
  }
  .main-skills-info li div img {
    width: 50%;
  }

  .javascript-info,
  .html-info,
  .css-info,
  .react-info,
  .python-info {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .javascript,
  .css,
  .react,
  .python {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    color: white;
  }
  .javascript {
    border: 10px solid #f0db4f;
  }
  .react {
    border: 10px solid #61dafb;
  }
  .css {
    border-right: 10px solid #32a8dc;
    border-top: 10px solid #1572b6;
    border-bottom: 10px solid #32a8dc;
    border-left: 10px solid #1572b6;
  }
  .python {
    border-left: 10px solid #3772a2;
    border-top: 10px solid #3772a2;
    border-right: 10px solid yellow;
    border-bottom: 10px solid yellow;
  }
  .html {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 10px solid #e44d26;
    color: white;
  }
`

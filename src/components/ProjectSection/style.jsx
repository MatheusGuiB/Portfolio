import styled from 'styled-components'

export const StyledProjectButton = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #050801;

  .projects-none {
    display: none;
  }

  .projects-button {
    display: flex;
  }
  .projects-button-none {
    display: none;
  }
  .projects-button .openProject {
    background-color: transparent;
    border: none;
    user-select: none;
    cursor: pointer;
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #03e9f4;
    font-size: 24px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
  .projects-button .openProject:hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }
  .projects-button .openProject span {
    position: absolute;
    display: block;
  }
  .projects-button .openProject span:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  .projects-button .openProject span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
  .projects-button .openProject span:nth-child(3) {
    bottom: 0%;
    right: -100;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }
  .projects-button .openProject span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
  .display {
    display: none;
  }
  .display-none {
    display: flex;
  }
  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    width: 100%;
    /* height: 100%; */
    max-width: 730px;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .container .close {
    cursor: pointer;
    width: 100px;
    padding: 10px;
    color: #03e9f4;
    border-radius: 20px;
    font-weight: 700;
    border: none;
    text-transform: uppercase;
    background-color: transparent;
    position: absolute;
    top: 230%;
  }
  .container .close:hover {
    color: black;
    background-color: #03e9f4;
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 1px #03e9f4;
  }
  .container ul {
    /* justify-content: center; */
    display: flex;
    gap: 50px;
    width: 100%;
    cursor: pointer;
    /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0002); */
  }
  .container ul .img {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 200px;
    background-size: cover;
    background-color: white;
    list-style: none;
    box-shadow: 0px 20px 0px -10px #ffffff, 0px -20px 0px -10px #ffffff,
      20px 0px 0px -10px #ffffff, -20px 0px 0px -10px #ffffff,
      0px 0px 0px 10px #03e9f4, 0px 0px 42px 13px #000000;
    font-size: 30px;
    text-align: center;
    cursor: pointer;
  }
  img {
    width: 200px;
  }
`

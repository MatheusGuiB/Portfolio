import styled from 'styled-components'
import backgroundprojects from '../../assets/images/b.png'

export const StyledContatSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundprojects});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .container-contacts {
    display: flex;
    flex-direction: column;
  }
  .container-contacts h2 {
    font-size: 36px;
    color: white;
  }
  .container-contacts .contacts-links {
    display: flex;
    max-width: 1250px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .container-contacts div {
    border-radius: 30px;
    margin: 30px 30px 30px 30px;
    width: 500px;
    height: 250px;
    background-color: #708090;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    box-shadow: 0px 0px 50px 23px rgba(112, 128, 144, 0.93);
  }
  .container-contacts div:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 50px 23px #03e9f4;
    background-color: #03e9f4;
  }
  section {
  }
  .container-contacts .icon-projects {
    font-size: 30px;
  }
  .container-contacts .txt {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
  }
  a:hover {
    transform: scale(1.1);
    color: black;
  }
`

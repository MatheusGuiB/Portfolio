import styled from 'styled-components'
import img from '../../assets/images/galaxy.png'

export const StyledMain = styled.div`
  background-image: url(${img});
  /* width: 100%; */
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  .main-container {
    margin-left: 10%;
    display: flex;
  }
  .main-container .private-info {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
  }
  .my-port {
    text-align: center;
    color: white;
    font-size: 35px;
    width: 50%;
    border: 2px solid white;
    padding: 5px;
    background-image: radial-gradient(
      circle at 104.31% 50%,
      #ff36ff 0,
      #ff3dff 12.5%,
      #ff41ff 25%,
      #f141ff 37.5%,
      #b53cf2 50%,
      #7936d8 62.5%,
      #3930c0 75%,
      #002baa 87.5%,
      #002697 100%
    );
  }
  .math {
    color: white;
    font-size: 55px;
  }
  .description {
    color: white;
  }
  .space-man {
    margin-left: 15%;
  }

  .space-man img {
    width: 100%;
  }
  /* .icon-roll {
    position: absolute;
    left: 50%;
    bottom: 3%;
    font-size: 50px;
    color: white;
  }
  .icon-roll:hover {
    transform: scale(1.2);
    cursor: pointer;
  } */
`

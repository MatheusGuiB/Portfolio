import styled from 'styled-components'

export const StyledContatSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: crimson;
  display: flex;
  align-items: center;

  .container-contats {
    display: flex;
    flex-direction: column;
  }

  .container-contats img {
    width: 150px;
    border-radius: 100%;
  }
  .container-contats p {
    color: white;
    font-size: 30px;
  }
`

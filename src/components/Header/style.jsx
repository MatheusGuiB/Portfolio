import styled from 'styled-components'

export const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;

  .my-photo {
    color: white;
    border-radius: 10%;
    width: 65px;
  }
  .my-photo:hover {
    transform: scale(1.2);
  }

  .info-list {
    list-style: none;
    display: flex;
    text-decoration: none;
    gap: 30px;
  }

  .info-list li,
  a {
    font-size: 25px;
    text-decoration: none;
    color: white;
  }
  .info-list li:hover,
  a:hover {
    transform: scale(1.2);
  }

  .icons-header {
    display: flex;
    color: white;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
  }

  .icons-header .icon-header {
    width: 35px;
    height: 35px;
  }
  .icons-header .icon-header:hover {
    transform: scale(1.001);
    cursor: pointer;
  }
`

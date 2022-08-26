import styled from 'styled-components';
import Bg from '../../Assets/styleImages/background.png';

export const ContainerBg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  position: relative;
  background: url(${Bg}) no-repeat;
  background-position: center;
  background-size: cover;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.85;

  ::before {
    content: '';
    background-color: #343a40;
    position: absolute;
  }
`;

export const ContainerLogin = styled.div`
  width: 27.06rem;
  height: 27.87rem;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .LogoTitle {
    width: 7.8rem;
    margin: 1rem auto;
  }

  .Inputs {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 22.8rem;
  }

  .ForgotIt {
    width: 22.8rem;
    text-align: left;
    text-decoration: underline;
    font: normal normal bold 14px 'Roboto';
    letter-spacing: 0px;
    color: black;
    margin: 0 auto;
    opacity: 1;
    cursor: pointer;
    :hover {
      color: #ffc501;
      transition: 0.3s;
    }
  }
  .btn {
    width: 22.8rem;
    margin: 0 auto;
  }
`;

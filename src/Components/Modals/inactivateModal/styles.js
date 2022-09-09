import styled from 'styled-components';

export const BgModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContainerModal = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  width: 50.25rem;
  padding: 1rem;
  border: solid 1px #707070;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;

  .container-exit {
    width: 95%;
    height: 1.5rem;
    margin: 0 auto;
    padding-top: 1rem;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .container-exit p {
    font: normal normal 600 20px/26px 'Roboto';
    color: #000000;
    cursor: pointer;
  }

  .container-title {
    width: 95%;
    margin: 0 auto;
  }

  .container-title h3 {
    font: normal normal 600 18px 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }

  .container-textArea {
    width: 95%;
    margin: 0 auto;
  }

  .container-btnForm {
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 1.6rem auto;
  }

  .btn-inactivate {
    width: 6.31rem;
    height: 53px;
    border: 1px solid #ed5e5e;
    border-radius: 5px;
    opacity: 1;
    font: normal normal 600 14px 'Roboto';
    letter-spacing: 0px;
    color: #ed5e5e;
  }
`;

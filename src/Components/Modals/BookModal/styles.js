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
  width: 60%;
  height: 85vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;

  .container-exit {
    width: 95%;
    height: 2.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .container-exit p {
    font: normal normal 600 21px 'Roboto';
    cursor: pointer;
  }

  .container-main {
    width: 95%;
    margin: 0 auto;
    display: flex;
  }

  .container-img-btn {
    width: 40%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .img-book {
    width: 80%;
    height: 55vh;
    margin: 0 auto;
    border: solid 1px black;
  }

  .container-btn {
    width: 80%;
    height: 50px;
    margin: 0 auto;
    border-radius: 5px;
    border: solid 1px #adb5bd;
  }

  .btn-lend {
    width: 100%;
    height: 50px;
    background-color: #ffc501;
    border-radius: 5px;
    font: normal normal 600 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  .container-contentBook-btns {
    width: 60%;
    height: 74vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title {
    width: 100%;
  }
  .title h2 {
    text-align: center;
    font: normal normal 600 26px 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }

  .data-book {
    width: 100%;
  }

  .container-contentBook-btns h3 {
    text-align: left;
    font: normal normal 600 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }

  .container-contentBook-btns p {
    text-align: left;
    font: normal normal 300 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }

  .btns-Modal {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .btn-edit {
    width: 5.625rem;
    height: 3.312rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #167ce2;
    border-radius: 5px;
    opacity: 1;
    font: normal normal medium 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #167ce2;
  }

  .btn-inactivate {
    width: 5.625rem;
    height: 3.312rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #ed5e5e;
    border-radius: 5px;
    opacity: 1;
    font: normal normal medium 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #ed5e5e;
  }

  .btn-history {
    width: 5.625rem;
    height: 3.312rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #adb5bd;
    border-radius: 5px;
    opacity: 1;
    font: normal normal medium 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
  }
`;

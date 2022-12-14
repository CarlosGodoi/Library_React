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
  height: 60vh;
  border: solid 1px #707070;
  padding: 1.5rem 1rem;
  position: absolute;
  top: 40%;
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

  .container-main {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .container-title {
    width: 100%;
    margin: 0 auto 1rem;
  }

  .container-title > h2 {
    font: normal normal 600 20px 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }

  .container-form {
    width: 100%;
    height: 28vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .input {
    width: 23.125rem;
    height: 53px;
  }

  .btn-form {
    width: 100%;
    padding: 1rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: end;
    border: none;
    border-radius: 5px;
  }

  .btn-lend {
    width: 280px;
    height: 53px;
    background: #ffc501 0% 0% no-repeat padding-box;
    border: 1px solid #adb5bd;
    border-radius: 5px;
    text-align: left;
    font: normal normal 600 16px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
`;

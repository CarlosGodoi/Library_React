import styled from 'styled-components';

export const ContainerBg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const ContainerMain = styled.div`
  max-width: 95%;
  height: 100vh;
  max-height: 82%;
  margin: 0.8rem auto;
  background-color: #fff;

  .back-home {
    width: 96%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .back-home p {
    text-align: left;
    font: normal normal normal 20px/26px 'Roboto';
    letter-spacing: 0px;
    color: #00000080;
  }

  .back-home h3 {
    margin-left: 3px;
    text-align: left;
    font: normal normal 600 20px/26px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
  }
`;

export const ContainerForm = styled.div`
  width: 85%;
  height: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid red 1px;

  .form {
    width: 88%;
    height: 70%;
    border: solid 1px blue;
  }
`;

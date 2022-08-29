import styled from 'styled-components';
import lupa from '../../Assets/styleImages/lupa.svg';

export const ContainerBg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const ContainerMain = styled.div`
  max-width: 95%;
  height: 100vh;
  max-height: 82%;
  margin: 0.7rem auto;
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

export const SearchBooks = styled.div`
  width: 90%;
  height: 69vh;
  margin: 0 auto;
  border: solid 1px red;

  .container {
    width: 80%;
    height: 48px;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
  }

  .input-search {
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px #adb5bd;
    border-radius: 5px;
  }

  .input-search input {
    width: 80%;
    border: none;
  }

  .input-search button {
    width: 17%;
    height: 40px;
    background-color: #ffc501;
    border: solid 1px #ffc501;
    font: normal normal 600 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    border-radius: 5px;
    margin-right: 8px;
  }

  .select-search {
    width: 30%;
    margin-top: 3px;
  }
`;

export const ContainerBooks = styled.div`
  width: 90%;
  height: 100px;
  border: solid 1px blue;
  margin: 0 auto;
`;

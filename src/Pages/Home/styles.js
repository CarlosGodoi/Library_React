import styled from 'styled-components';

export const ContainerBg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const Main = styled.div`
  width: 95%;
  height: 85%;
  margin: 1.3rem auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

export const Card = styled.div`
  width: 13.5rem;
  height: 12rem;
  border: solid #f4f4f4 1px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  .img-card {
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.9rem;
    height: 3.5rem;
    background-color: #fff;
    margin: 0 auto;
  }

  .title span {
    font: normal normal 600 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #343a40;
    opacity: 1;
  }
`;

import styled from 'styled-components';

export const ContainerBg = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 95%;
  height: 95vh;
  margin: 1rem auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
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
  :hover {
    background-color: #ffc501;
    transition: 0.5s;
  }

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
    z-index: 1000;
  }

  .title span {
    font: normal normal 600 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #343a40;
    opacity: 1;
  }

  // @media-queries
  @media (max-width: 523px) {
    width: 50%;
    height: 27%;
  }

  @media (max-width: 478px) {
    width: 62%;
    height: 27%;
  }

  @media (max-width: 375px) {
    width: 62%;
    height: 180px;
    gap: 1rem;
  }
`;

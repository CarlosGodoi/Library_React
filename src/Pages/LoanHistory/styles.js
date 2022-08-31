import styled from '@emotion/styled';

export const ContainerBg = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 1rem;
  background-color: #f4f4f4;
`;

export const ContainerMain = styled.div`
  max-width: 95%;
  height: 100vh;
  max-height: 82%;
  background-color: #fff;
  margin: 1rem auto;

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

export const ContainerTable = styled.div`
  width: 95%;
  margin: 0 auto;
`;

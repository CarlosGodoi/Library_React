import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #ffffff;
`;

export const ContainerHeader = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-user {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu-user p {
    font: normal normal normal 18px/52px 'Roboto';
    letter-spacing: 0px;
    color: #495057;
    text-transform: capitalize;
    opacity: 1;
  }
`;

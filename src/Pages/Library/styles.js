import styled from 'styled-components';

export const ContainerBg = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  background-color: #f4f4f4;
`;

export const ContainerMain = styled.div`
  max-width: 95%;
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
  padding-bottom: 1.5rem;
  margin: 0 auto;

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
    border: solid 1px #adb5bd;
    font: normal normal 600 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    border-radius: 5px;
    margin-right: 8px;

    :hover {
      background-color: #fee17f;
      border: solid 1px #fee17f;
    }
  }

  .select-search {
    width: 30%;
    margin-top: 3px;
  }
`;

export const ContainerBooks = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.3rem;
  padding: 1rem 0;
  margin: 0 auto;

  .container-book {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 12.25rem;
    height: 13.31rem;
    padding: 1.2rem 0;
    background-color: #f4f4f4;
    border-radius: 5px;
    cursor: pointer;
  }

  .book {
    width: 6.75rem;
    height: 9.68rem;
    border: solid 1px red;
  }

  .title-book {
    width: 50%;
  }

  .title-book p {
    text-align: center;
    font: normal normal 600 14px 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }
`;

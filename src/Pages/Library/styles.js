import styled from 'styled-components';

export const ContainerBg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
`;

export const ContainerMain = styled.div`
  width: 95%;
  margin: 1rem auto;
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

  .SearchBooks {
    width: 90%;
    padding-bottom: 1.5rem;
    margin: 0 auto;
  }
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
    height: 40px;
    border: none;
    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }

  .input-search button {
    width: 5.125rem;
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

  .ContainerBooks {
    width: 95%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 0;
    margin: 0 auto;
  }

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
  }

  .book img {
    background-size: cover;
    width: 6.75rem;
    height: 9.68rem;
  }
  .title-book {
    width: 6.88rem;
  }

  .title-book p {
    text-align: center;
    font: normal normal 600 13px 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }
`;

export const SearchBooks = styled.div``;

export const ContainerBooks = styled.div``;

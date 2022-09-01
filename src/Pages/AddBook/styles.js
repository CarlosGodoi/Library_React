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
  width: 75%;
  margin: 1.8rem auto;
  padding: 1.5rem 1.5rem;
  display: grid;
  grid-gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
  grid-template-areas:
    'image title author'
    'image synopsis genre'
    'image synopsis data'
    '. btnCancel btnSave';

  .formImage {
    width: 10.75rem;
    height: 14.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: dashed 2px #ffc501;
    grid-area: image;
  }

  .customFileInput::-webkit-file-upload-button {
    visibility: hidden;
  }

  .customFileInput::before {
    width: 95%;
    max-height: 600px;
    min-height: 200px;
    font-size: 11pt;
    content: 'FOTO';
    justify-content: center;
    align-items: center;
    display: flex;
    background: transparent;
    background: no-repeat;
    color: #ffc501;
    cursor: pointer;
  }

  .formTitle {
    grid-area: title;
    width: 350px;
    height: 55px;
  }

  .formAuthor {
    grid-area: author;
    width: 350px;
    height: 55px;
  }

  .formSynopsis {
    grid-area: synopsis;
    width: 350px;
    height: 129px;
  }

  .formGenre {
    grid-area: genre;
    width: 350px;
    height: 55px;
  }
  .formData {
    grid-area: data;
    width: 350px;
    height: 55px;
  }

  .buttons-form {
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: space-between;
    grid-area: btnCancel;
    grid-area: btnSave;
  }

  .btn-cancel {
    width: 143px;
    height: 53px;
    border: solid 1.5px #133052;
    border-radius: 5px;
    color: black;
    font-weight: 600;
    :hover {
      background-color: #ffc501;
      transition: 0.5s;
    }
  }

  .btn-save {
    width: 143px;
    height: 53px;
    background-color: #ffc501;
    border: solid 1px #adb5bd;
    border-radius: 5px;
    color: black;
    font-weight: 600;
    :hover {
      background-color: #fff;
      border: solid 1.5px #ffc501;
      transition: 0.5s;
    }
  }

  // media queries
  @media (max-width: 1000px) {
    width: 50%;
  }
`;

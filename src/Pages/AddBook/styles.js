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
  height: 100vh;
  margin: 1rem auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;

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
  width: 95%;
  margin: 0 auto;

  .form-addBook {
    max-width: 65rem;
    margin: 0 auto;
    display: grid;
    grid-gap: 1.2rem;
    justify-content: center;
    align-items: center;
    grid-template-areas:
      'image title author'
      'image synopsis genre'
      'image synopsis data'
      '. btnCancel btnSave';

    @media (max-width: 1000px) {
      display: block;
    }
  }

  .formImage {
    width: 10.75rem;
    height: 14.5rem;
    border: dashed 2px #ffc501;
    grid-area: image;
    background: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 999px) {
      margin: 1rem auto;
    }
  }

  .image-base64 {
    width: 10.75rem;
    height: 14.5rem;
    object-fit: cover;
    cursor: pointer;
  }

  .labelUpload {
    width: 10.75rem;
    height: 14.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: no-repeat;
    background-size: contain;
    cursor: pointer;
  }

  .customFileInput {
    display: none;
  }

  .formTitle {
    grid-area: title;
    width: 350px;
    height: 55px;

    @media (max-width: 999px) {
      margin: 1rem auto;
      width: 55%;
    }
  }

  .formAuthor {
    grid-area: author;
    width: 350px;
    height: 55px;

    @media (max-width: 999px) {
      margin: 1rem auto;
      width: 55%;
    }
  }

  .formSynopsis {
    grid-area: synopsis;
    width: 350px;
    height: 129px;

    @media (max-width: 999px) {
      margin: 1rem auto;
      width: 55%;
    }
  }

  .formGenre {
    grid-area: genre;
    width: 350px;
    height: 55px;

    @media (max-width: 999px) {
      margin: 1rem auto;
      width: 55%;
    }
  }
  .formData {
    grid-area: data;
    width: 350px;
    height: 55px;

    @media (max-width: 999px) {
      margin: 1rem auto;
      width: 55%;
    }
  }

  .buttons-form {
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: space-between;
    grid-area: btnCancel;
    grid-area: btnSave;

    @media (max-width: 999px) {
      margin: 1rem auto;
      width: 55%;
    }

    @media (max-width: 616px) {
      margin: 1rem auto;
      width: 60%;
    }

    @media (max-width: 490px) {
      margin: 1rem auto;
      width: 65%;
    }

    @media (max-width: 436px) {
      margin: 1rem auto;
      width: 70%;
    }
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

    @media (max-width: 616px) {
      margin: 1rem auto;
      width: 100px;
    }

    @media (max-width: 490px) {
      margin: 1rem auto;
      width: 100px;
    }

    @media (max-width: 436px) {
      margin: 1rem auto;
      width: 80px;
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

    @media (max-width: 616px) {
      margin: 1rem auto;
      width: 100px;
    }

    @media (max-width: 490px) {
      margin: 1rem auto;
      width: 100px;
    }

    @media (max-width: 436px) {
      margin: 1rem auto;
      width: 80px;
    }
  }
`;

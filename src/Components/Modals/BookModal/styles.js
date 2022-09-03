import styled from 'styled-components';

export const BgModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContainerModal = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  width: 60%;
  height: 85vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  padding: 10px;

  .container-exit {
    width: 100%;
    height: 2.5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .container-exit p {
    font: normal normal 600 21px 'Roboto';
    cursor: pointer;
  }

  .container-main {
    width: 95%;
    margin: 0 auto;
    display: flex;
  }

  .container-img-btn {
    width: 29.7rem;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: solid 1px green;
  }

  .img-book {
    width: 17rem;
    margin: 0 auto;
  }

  .img-book img {
    width: 17rem;
    height: 340px;
    object-fit: contain;
  }

  .container-btn {
    width: 14rem;
    height: 50px;
    margin: 0 auto;
    border-radius: 5px;
    border: solid 1px #adb5bd;
  }

  .btn-lend {
    width: 100%;
    height: 50px;
    background-color: #ffc501;
    border-radius: 5px;
    font: normal normal 600 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }

  .container-contentBook-btns {
    width: 26.5rem;
    height: 19.82rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px purple;
  }

  .title {
    width: 26.5rem;
    height: 3.312rem;
    margin: 0 auto;
    border: solid 1px blue;
  }
  .title h2 {
    text-align: center;
    font: normal normal 600 1.25rem 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }

  .data-book {
    width: 100%;
    border: solid 1px red;
  }

  .container-contentBook-btns h3 {
    text-align: left;
    font: normal normal 600 1rem 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
  }

  .container-contentBook-btns p {
    text-align: left;
    font: normal normal 300 0.87rem 'Roboto';
    letter-spacing: 0px;
    color: #3e4756;
    opacity: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .btns-Modal {
    width: 26.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    border: solid red 1px;
  }

  .btn-edit {
    width: 5.625rem;
    height: 3.312rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #167ce2;
    border-radius: 5px;
    opacity: 1;
    font: normal normal medium 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #167ce2;
  }

  .btn-inactivate {
    width: 5.625rem;
    height: 3.312rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #ed5e5e;
    border-radius: 5px;
    opacity: 1;
    font: normal normal medium 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #ed5e5e;
  }

  .btn-history {
    width: 5.625rem;
    height: 3.312rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #adb5bd;
    border-radius: 5px;
    opacity: 1;
    font: normal normal medium 16px/21px 'Roboto';
    letter-spacing: 0px;
    color: #000000;
  }
`;
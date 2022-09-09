import { ILogin } from '../Pages/Login/interface';

const userAuth = async (values: ILogin) => {
  let data;
  return fetch('./data.json')
    .then((res) => res.json())
    .then((body) => {
      data = body.data.login;
      const userExists = data.find(
        (user: ILogin) => user.email === values.email,
      );
      if (userExists) {
        if (userExists.password === values.password) {
          return Promise.resolve(userExists);
        } else {
          return Promise.reject('Usuário ou senha inválida');
        }
      } else {
        return Promise.reject('Usuário ou senha inválida');
      }
    })
    .catch((err) => Promise.reject(err));
};

export default userAuth;

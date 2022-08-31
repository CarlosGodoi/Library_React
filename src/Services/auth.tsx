const userAuth = async () => {
  let data;

  return fetch('./data.json')
    .then((res) => res.json())
    .then((body) => {
      data = body.data.login;
      return Promise.resolve(data);
    })
    .catch((err) => Promise.reject(err + 'Ops! ocorreu um problema'));
};

export default userAuth;

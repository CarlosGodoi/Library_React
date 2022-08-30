const api = async () => {
  let data;

  return fetch('./data.json')
    .then((res) => res.json())
    .then((body) => {
      data = body.data;
      return Promise.resolve(data);
    })
    .catch((err) => Promise.reject(err));
};

export default api;
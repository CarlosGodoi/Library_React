const allData = () => {
  let data;
  let responseClone: any;

  return fetch('./data.json')
    .then((res) => {
      responseClone = res.clone();
      return res.json();
    })
    .then((body) => {
      data = body.data;
      return data;
    })
    .catch((err) => console.log(err, responseClone));
};

export default allData;

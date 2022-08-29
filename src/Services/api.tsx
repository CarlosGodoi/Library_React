const allData = async () => {
  let data;
  let responseClone: any;

  try {
    const res = await fetch('./data.json');
    responseClone = res.clone();
    const body = await res.json();
    data = body.data;
    return data;
  } catch (err) {
    return console.log(err, responseClone);
  }
};

export default allData;

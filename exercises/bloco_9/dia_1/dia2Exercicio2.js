const promiseFetch = () => {
  const promise = new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 51));

    const soma = arr.map((num) => num * num).reduce((sum, num) => sum + num);
    // eslint-disable-next-line no-unused-expressions
    soma < 8000 ? resolve(soma) : reject(soma);
  });
    // eslint-disable-next-line no-undef
  promise
    .then((sum) => console.log(`Resolvida ${sum}`))
    .catch((sum) => console.log(`Rejeitada ${sum}`));
};

promiseFetch();

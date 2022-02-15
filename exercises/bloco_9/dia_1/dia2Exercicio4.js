const promiseFetch = () => {
  const promise = new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);

    const soma = arr.map((num) => num * num).reduce((num, acc) => num + acc, 0);
    // eslint-disable-next-line no-unused-expressions
    soma < 8000 ? resolve() : reject();
  });
    // eslint-disable-next-line no-undef
  promise
    .then((soma) => [2, 3, 5, 10].map((num) => soma / num))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

promiseFetch();

let cars = ['saab', 'volvo', 'bmw'];
for (let index in cars) {
  console.log(index, cars[index]);
}

let car = {
  type: 'fiat',
  model: '500',
  color: 'white',
};

for (const index in car) {
  console.log(index, car[index]);
}

let food = ['hambuguer', 'bife', 'acaraje'];
for (let position in food) {
  console.log(position);
}

let food = ['hambuguer', 'bife', 'acaraje'];
for (let value of food) {
  console.log(value);
}

let names = {
  person1: 'Joao',
  person2: 'Maria',
  person3: 'Jorge'
};

for (let key in names) {
  console.log(`Olá ${names[key]}`);
}

let car = {
  model: 'a3 sedan',
  manufacture: 'audi',
  year: 2020
};
for (let key in car) {
  console.log(key, car[key]);
}
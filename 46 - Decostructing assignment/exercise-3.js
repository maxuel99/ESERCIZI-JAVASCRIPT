function isAdult({age}) {
  if (age >= 18) {
    return true;
  }
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));
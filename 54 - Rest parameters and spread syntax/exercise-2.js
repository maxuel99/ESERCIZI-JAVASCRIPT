const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

const {id, ...rest} = person;

console.log(id, rest);
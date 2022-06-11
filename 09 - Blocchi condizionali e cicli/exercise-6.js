function getKeys(obj) {
  let ObjectKeys = [];
  for (let i in person) {
    ObjectKeys.push(`${i}`);
  }
  return ObjectKeys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
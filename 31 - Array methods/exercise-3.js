function calculateAverageAge(persons) {
  let media = 0;
  let sum = persons.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.age;
  }, 0);

  let total = Object.keys(persons).length;
  media = Math.round((sum / total));
  return media;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);

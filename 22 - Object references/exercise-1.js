const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',
  fullName: function() {
    return "John Doe";
  },
  info: function() {
    return "John Doe, 25 - Web Developer";
  }
}

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer
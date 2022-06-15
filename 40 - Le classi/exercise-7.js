class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get firstName() {
    return this._firsName;
  }
  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  get fullName() {
    return this._firstName + this._lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
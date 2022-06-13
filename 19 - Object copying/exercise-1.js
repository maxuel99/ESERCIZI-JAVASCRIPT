const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

person1.firstName = 'Simon';

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

/*modificando person1 viene modificato di conseguenza 
anche person2 perchè alla riga 9 si è passato alla variabile
person2 l'oggetto person1.*/

/*Quando assegniamo ad una variabile un oggetto, cosa viene passato?
viene passato il contenuto dell'oggetto (proprietà)*/
const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id == 1) {
        resolve(persons[0]);
      } else if (id == 2){
        resolve (persons[1]);
      } else if (id == 3) {
        resolve (persons[2]);
      } else {
        reject(new Error('Questo è un errore da Promise'));
      }
    }, 1000);
  });
}

fetchPersonById(4).then((person) => console.log(person));
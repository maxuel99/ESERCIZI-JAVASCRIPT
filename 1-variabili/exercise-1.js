let personName = 'Paul';

function canPlay() {
  if (true) {
    personName = 'Paul';
  }

  personName += ' plays football'; 

  console.log(personName);
}

canPlay();
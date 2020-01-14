const people = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },
  {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
  }
];

// Using loop
const listByGenderUsingLoop = gender => {
  const newList = [];

  for (i = 0; i < people.length; i++) {
    if (people[i].gender === gender) {
      newList.push(people[i]);
    }
  }

  return newList;
}

// Using filter
const listByGenderUsingFilter = gender => {
  return people.filter(person => person.gender === gender);
}

/**
 * You can test this function by either using a for loop (listGenderUsingLoop)
 * or using filter (listGenderUsingFilter).
 **/
const listByGender = gender => {
  // using loop
  // const newList = listByGenderUsingLoop(gender);
  // using filter
  const newList = listByGenderUsingFilter(gender);

  return newList;
}

console.log(listByGender('M'));
console.log(listByGender('F'));

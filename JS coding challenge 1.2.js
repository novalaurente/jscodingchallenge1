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

const groupByDepartment = () => {
  const departments = {};

  function departmentExists(department) {
    return departments.hasOwnProperty(department);
  }

  let department = '';

  for (i = 0; i < people.length; i++) {
    department = people[i].department;

    if (!departmentExists(department)) {
      departments[department] = [];
    }

    departments[department].push(people[i]);
  }

  return departments;
}

console.log(groupByDepartment());

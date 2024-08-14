interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: 'Peter',
  lastName: 'Pan',
  age: 20,
  location: 'Kenya',
}

const stud2: Student = {
  firstName: 'Pat',
  lastName: 'Jenkins',
  age: 30,
  location: 'Nigeria',
}

const studentsList: Student[] = [stud1, stud2]

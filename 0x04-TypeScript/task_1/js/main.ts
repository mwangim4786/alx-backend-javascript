interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [property: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
 }

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]} ${lastName}`;
}

interface Class {
  workOnHomework(): string;
  displayName(): string
}

interface Constructor {
  firstName: string;
  lastName: string;
}


class StudentClass implements Class {
  firstName: string;
  lastName: string; 

  constructor(args: Constructor) {
    this.firstName = args.firstName;
    this.lastName = args.lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }

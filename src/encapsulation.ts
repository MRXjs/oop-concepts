class Student {
  name: string;
  age: number;
  private details: string;

  constructor(name: string, age: number, details: string) {
    this.name = name;
    this.age = age;
    this.details = details;
  }

  getDetails() {
    return this.details;
  }

  run() {
    console.log(`${this.name} running`);
  }
}

const student1 = new Student("sures", 25, "sample details");
student1.name = "Sures Ranathunga";
console.log(student1.getDetails());

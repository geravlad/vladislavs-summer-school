class Person {
  constructor(name, surname, age, job, isSleeping) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.job = job;
    this.isSleeping = isSleeping;
  }

  sleeping() {
    return (this.isSleeping = true);
  }

  calculateAge() {
    return 2024 - this.age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

module.exports = Person;

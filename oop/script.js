const Car = require("./Car");
const Person = require("./Person");

let student = new Person("Vlad", "Germanovics", 28, "QA Engineer", false);
let anotherStudent = new Person("Jackie", "Chan", 70, "Actor", true);

let car = new Car("Audi", 2008, "Black", "Manual");

student.calculateAge();

car.logCarInfo();

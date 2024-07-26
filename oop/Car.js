class Car {
  constructor(title, year, color, transmission) {
    this.title = title;
    this.year = year;
    this.color = color;
    this.transmission = transmission;
  }

  logCarInfo() {
    console.log(
      `Car title: ${this.title}; Year: ${this.year}; Color: ${this.color}; Transmission type: ${this.transmission}`,
    );
  }
}

module.exports = Car;

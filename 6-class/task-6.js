class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(mileage) {
    this.#mileage = mileage;
  }

  info() {
    console.log(
      `brand: ${this.#brand}, model: ${this.#model}, milage: ${this.mileage}`,
    );
  }
}

// usage:
const car = new Car("Chevrolet", "Camara", 10_000);
car.info();
console.log(`initial mileage is ${car.mileage}`);
car.mileage = 15_000;
console.log(`now mileage is ${car.mileage}`);
car.info();

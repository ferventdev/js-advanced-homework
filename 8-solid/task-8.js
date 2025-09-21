class Billing {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  get amount() {
    return this.#amount;
  }

  calculateTotal() {
    throw new Error("calculation is not possible");
  }
}

class FixedBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {
  #hoursCount;

  constructor(amount, hoursCount) {
    super(amount);
    this.#hoursCount = hoursCount;
  }

  calculateTotal() {
    return this.amount * this.#hoursCount;
  }
}

class ItemBilling extends Billing {
  #itemsCount;

  constructor(amount, itemsCount) {
    super(amount);
    this.#itemsCount = itemsCount;
  }

  calculateTotal() {
    return this.amount * this.#itemsCount;
  }
}

// usage:
const fixedBill = new FixedBilling(100);
console.log(fixedBill.calculateTotal()); // expected to be 100

const hourBill = new HourBilling(100, 2);
console.log(hourBill.calculateTotal()); // expected to be 200

const itemBill = new ItemBilling(100, 3);
console.log(itemBill.calculateTotal()); // expected to be 300

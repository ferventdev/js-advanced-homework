const diceToInteger = (dice) => Number.parseInt(dice.slice(1));

const rangedRandom = (left, right) =>
  left + Math.floor((right - left + 1) * Math.random());

const randomIntegerWithDice = (dice) => rangedRandom(1, diceToInteger(dice));

// call examples:
console.log(randomIntegerWithDice("d4"));
console.log(randomIntegerWithDice("d8"));
console.log(randomIntegerWithDice("d12"));
console.log(randomIntegerWithDice("d20"));

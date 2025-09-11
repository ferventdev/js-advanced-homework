const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};
Character.prototype.speak = function () {
  console.log(`My name is ${this.name}. I can speak ${this.language}.`);
};

const Orc = function (name, language, weapon) {
  Character.call(this, "orc", name, language);
  this.weapon = weapon;
};
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function () {
  console.log(`I'm hitting you with my ${this.weapon}!`);
};

const Elf = function (name, language, spell) {
  Character.call(this, "elf", name, language);
  this.spell = spell;
};
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.cast = function () {
  console.log(`I'm casting a spell ${this.spell}!`);
};

// usage examples:
const character = new Character("human", "Eric", "Celtic");
character.speak();

const orc = new Orc("Bald", "Hungarish", "club");
orc.speak();
orc.hit();

const elf = new Elf("Legolas", "Elvish", "agility");
elf.speak();
elf.cast();

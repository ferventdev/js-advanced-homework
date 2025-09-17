class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`My name is ${this.name}. I can speak ${this.language}.`);
  }
}

class Orc extends Character {
  constructor(name, language, weapon) {
    super("orc", name, language);
    this.weapon = weapon;
  }

  speak() {
    console.log(
      `My name is ${this.name}. I'm an orc. I can speak ${this.language}.`,
    );
  }

  hit() {
    console.log(`I'm hitting you with my ${this.weapon}!`);
  }
}

class Elf extends Character {
  constructor(name, language, spell) {
    super("elf", name, language);
    this.spell = spell;
  }

  speak() {
    console.log(
      `My name is ${this.name}. I'm an elf. I can speak ${this.language}.`,
    );
  }

  cast() {
    console.log(`I'm casting a spell ${this.spell}!`);
  }
}

// usage examples:
const character = new Character("human", "Eric", "Celtic");
character.speak();

const orc = new Orc("Bald", "Hungarish", "club");
orc.speak();
orc.hit();

const elf = new Elf("Legolas", "Elvish", "agility");
elf.speak();
elf.cast();

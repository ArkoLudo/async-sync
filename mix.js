class Heros {
  constructor(name, life, strength, agility, weapon) {
    this.name = name;
    this.life = life;
    this.strength = strength;
    this.agility = agility;
    this.weapon = weapon;
    this.dead = false;
  }

  fight(){
    let damages = Math.floor((Math.random) * (this.stregth / 2) + 1);
    return damages;
  }
  damages(damages){
    let hits = damages - (Math.floor((Math.random) * (this.agility / 3) + 1));
    if (this.life <= 0) {
      this.dead = true;
    }
    else {

    }
  }
}

class Guerrier extends Heros {
  constructor(name, life, strength, agility, weapon) {
    super(name, life, strength, agility, weapon);
  }
}

class Mage extends Heros {
  constructor(name, life, strength, agility, weapon) {
    super(name, life, strength, agility, weapon);
  }
}

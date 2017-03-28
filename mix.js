class Heros {
  constructor(name, life, strength, agility, weapon) {
    this.name = name;
    this.life = life;
    this.strength = strength;
    this.agility = agility;
    this.weapon = weapon;
    this.dead = false;
    this.onFight = false;
  }

  presentHero(){
    console.log("Bonjour, Je m'appelle " + this.name + " ! Je dispose de " + this.life + " points de vie, de " + this.strength + " en force et de " + this.agility + " en agilité. Mon arme fétiche est " + this.weapon + " !");
  }
  moveToFight(onfight){
    this.onFight = true;
    console.log(this.name + " s'avance au combat... ");
  }
  calcDamages(){
    let damages = Math.floor((Math.random) * (this.stregth / 4) + 1);
    return damages;
  }
  calcHits(damages){
    let hits = damages - (Math.floor((Math.random) * 4) + 1);
    return hits;
  }
  fight(life, damages, hits){
    let fight = this.life - (damages * hits);
    return fight;
  }
  isDead(dead){
    if (this.life > 0 && this.dead == false) {
      console.log("Vous encaissez le coup ! ");
    }
    else {
      console.log("Le coup vous a été fatal ! Vous tombez vaillament au combat...");
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

const heros1 = new Guerrier("Luc", 100, 15, 4, "La grosse Berta");
heros1.presentHero();
heros1.moveToFight();

const heros2 = new Mage("Albert", 85, 8, 12, "La Braguette Magique");
heros2.presentHero();
heros2.moveToFight();

// function sayWithDelay(message, delay, callback) {
//   setTimeout(function () {
//     callback(true, message);
//   }, delay);
// }
//
// sayWithDelay('hello', 1000, callbackDemafn);
//
// function callbackDemafn(err, text) {
//   if (err) {
//     throw 'Error';
//   }
//   else {
//     console.log(text);
//   }
// }


let monObjet = {
  key : 1,
  fruit : 'banana',
  list : [
    'pain',
    'fromage'
  ],
  listObject : [
    {
      fruit : 'banana'
    },
    {
      fruit : 'poire'
    }
  ]
}

class Car {
  constructor(color, engineType, model) {
    this.color = color;
    this.engineType = engineType;
    this.model = model;
    this.hasStarted = false;
  }

  get isMoving(){
    return this.hasStarted;
  }
  static glassCount(){
    return 4;
  }
}

class Renault extends Car {
  constructor(color, engineType, model) {
    super(color, engineType, model);
  }
  moveForward(){
    this.hasStarted = true;
    console.log('j\'avance');
  }
}

const ClioMax = new Renault('rouge', 'diesel', 'clio');

ClioMax.moveForward();
console.log(ClioMax.hasStarted);

// var complexe = (a, b) => {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
//
// console.log(complexe(2, 3));

// let promesse = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('mon péni');
//   }, 1000);
// });
//
// promesse.then((test)=>{
//   console.log(test)
// });

let testPromise = new Promise(function (resolve, reject) {
  let compteur = Math.floor((Math.random() * 100) + 1);
  setTimeout(function () {
    resolve(compteur);
  }, 1000);
});

testPromise.then((compteur) =>{
  console.log(compteur);
});

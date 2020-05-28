
// ***************ESERCIZIO FESTA GATSBY*******************
// PRIMO MODO
// var array = ['pippo' , 'paperino' , 'pluto' , 'minnie' , 'daisy'];
// var name = prompt('Inserisci il tuo nome');
//
// for (var i = 0; i < array.length; i++) {
//   if (array[i] === name) {
//     alert('Accesso consentito');
//   } else {
//     alert('Accesso negato');
//   };
// };

// SECONDO MODO
// var array = ['pippo' , 'paperino' , 'pluto' , 'minnie' , 'daisy'];
// var name = prompt('Inserisci il tuo nome');
//
// var i=0;
// while (i < array.length) {
//   if (array[i] === name) {
//       alert('Accesso consentito');
//     } else {
//       alert('Accesso negato');
//     };
//   i++;
// };

// TERZO MODO
var array = ['pippo' , 'paperino' , 'pluto' , 'minnie' , 'daisy'];
var name = prompt('Inserisci il tuo nome');
var invitato = false;
var messaggio = alert('Accesso Negato');

var i=0;
while (invitato === false && i < array.length) {
  if (name === array[i]) {
      invitato = true;
      messaggio = alert('Accesso consentito');
    }
  i++;
};


// ***************ESERCIZIO SOMMA*******************
// PRIMO MODO
// var numero = prompt('Inserisci un numero di quattro cifre');
//
// while ((isNaN(numero)) || (numero.length != 4)) {
//   numero = prompt('Inserisci un numero di quattro cifre')
// };
//
// var arrayNumeri = numero.split('');
//
// var somma = 0;
// for (var i = 0; i < arrayNumeri.length; i++) {
//   somma = somma + parseInt(arrayNumeri[i]);
// }
//
// console.log(somma);

// SECONDO MODO

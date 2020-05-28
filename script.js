
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
// var array = ['pippo' , 'paperino' , 'pluto' , 'minnie' , 'daisy'];
// var name = prompt('Inserisci il tuo nome');
// var invitato = false;
// var messaggio = 'Accesso Negato';
//
// var i=0;
// while (invitato === false && i < array.length) {
//   if (name === array[i]) {
//       invitato = true;
//       messaggio = 'Accesso Consentito';
//     }
//   i++;
// };
//
// alert(messaggio);

// QUARTO MODO
// var array = ['pippo' , 'paperino' , 'pluto' , 'minnie' , 'daisy'];
// var name = prompt('Inserisci il tuo nome');
// var invitato = false;
//
// var i=0;
// while (invitato === false && i < array.length) {
//   if (name === array[i]) {
//       invitato = true;
//     }
//   i++;
// };
//
// if (invitato === true) {
//   alert('Accesso Consentito');
// } else {
//   alert('Accesso Negato');
// };

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
// alert(somma);

// SECONDO MODO
// do {
//   var numero = prompt('Inserisci un numero di quattro cifre');
// } while ((isNaN(numero)) || (numero.length != 4));
//
// var arrayNumeri = numero.split('');
//
// var somma = 0;
// for (var i = 0; i < arrayNumeri.length; i++) {
//   somma += parseInt(arrayNumeri[i]);
// };
//
// alert(somma);

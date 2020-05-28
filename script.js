// ***************JSNACK 1*******************
// var firstNumber = parseInt(prompt('Inserisci un numero'));
// var secondNumber = parseInt(prompt('Inserisci un numero'));
//
// while (firstNumber != '' && secondNumber != '') {
//   if (firstNumber > secondNumber) {
//     alert(firstNumber);
//   } else if (firstNumber < secondNumber) {
//     alert(secondNumber);
//   } else {
//     alert('i numeri inseriti sono uguali');
//   };
// };

// ***************JSNACK 2*******************
 var firstWord = prompt('Inserisci una parola');
 var secondWord = prompt('Inserisci una parola');

 while (isNaN(firstWord) && firstWord != '' && isNaN(secondWord) && secondWord != '') {
   if (firstWord.length < secondWord.length) {
     alert(firstWord);
     alert(secondWord);
   } else if (firstWord.length > secondWord.length) {
     alert(secondWord);
     alert(firstWord);
   } else {
     alert('Le parole inserte hanno la stessa lunghezza');
   }
 };

// ***************JSNACK 4*******************
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

// ***************JSNACK 5*******************
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
// };
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

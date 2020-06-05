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
// do {
//   var firstWord = prompt('Inserisci una parola');
//   var secondWord = prompt('Inserisci una parola');
// } while (!isNaN(firstWord) && firstWord != '' && !isNaN(secondWord) && secondWord != '')
//
//  if (firstWord.length < secondWord.length) {
//    console.log(firstWord , secondWord);
//  } else if (firstWord.length > secondWord.length) {
//    console.log(secondWord , firstWord);
//  } else {
//    console.log('Le parole inserte hanno la stessa lunghezza');
//  };

 // ***************JSNACK 3*******************
 // PRIMO MODO
// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('Inserisci un numero'));
//   somma += parseInt(numero);
//   };
// console.log(somma);

// SECONDO MODO
// var i = 0;
// var somma = 0;
// while (i < 5) {
//   var numero = parseInt(prompt('Inserisci un numero'));
//   somma += parseInt(numero);
//   i++;
// };
// console.log(somma);

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
// var arrayNumeri = numero.split('');   .split() per trasformare una variabile in array
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

// ***************JSNACK 6*******************
var n = parseInt(prompt('Inserisci un numero'));
console.log(n);
for (var i = 0; i < n; i++) {
  var array = [];
  for (var j = 0; j < 10; j++) {
    var numeroCasuale = Math.floor(Math.random() * 100 + 1);
    array.push(numeroCasuale);
  }
  console.log(array);
};

//***************JSNACK 7*******************
// var arrayNomiInvitati = ['Joe', 'Abramo', 'Pinco'];
// var arrayCognomiInvitati = ['Black', 'Lincoln', 'Pallo'];
// var listaIdentitaCasuali = [];
//
// for (var i = 0; i < arrayNomiInvitati.length; i++) {
//   var indiceNomeCasuale = Math.floor(Math.random() * arrayNomiInvitati.length);
//   var nomeCasuale = arrayNomiInvitati[indiceNomeCasuale];
//
//   var indiceCognomeCasuale = Math.floor(Math.random() * arrayCognomiInvitati.length);
//   var cognomeCasuale = arrayCognomiInvitati[indiceCognomeCasuale];
//
//   var identitaCasuale = nomeCasuale + ' ' + cognomeCasuale;
//
//   listaIdentitaCasuali.push(identitaCasuale);
// };
//
// console.log(listaIdentitaCasuali);

//***************JSNACK 8*******************
// var arrayUno = [1, 2, 3, 4, 5];
// var arrayDue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log('Primo array iniziale: ', arrayUno);
// console.log('Secondo array iniziale: ', arrayDue);
//
// while (arrayUno.length != arrayDue.length) {
//   var numeroCasuale = Math.floor(Math.random() * arrayDue.length);
//   arrayUno.push(numeroCasuale);
// };
// console.log('Primo array finale: ', arrayUno);
// console.log('Secondo array finale: ', arrayDue);

//***************JSNACK 9*******************
// var odd = document.getElementById('red-odd');
// var even = document.getElementById('green-even');
//
// var arrayNumeri = [];
// for (var i = 0; i < 10; i++) {
//   var numeroCasuale = Math.floor(Math.random() * 10 + 1);
//   arrayNumeri.push(numeroCasuale);
// };
// console.log(arrayNumeri);
//
// for (var i = 0; i < arrayNumeri.length; i++) {
//   if (arrayNumeri[i] % 2 === 0) {
//     even.innerHTML += arrayNumeri[i] + '<br>'
//   } else {
//     odd.innerHTML += arrayNumeri[i] + '<br>'
//   };
// };

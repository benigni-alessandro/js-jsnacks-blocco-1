var numero = prompt("Inserisci un numero a 4 cifre");
console.log(numero);

var somma = 0;
var sommare = 0;
for (var i = 0; i < numero.length; i++) {
  sommare = parseInt(numero[i]);
  somma = somma + sommare;
}
console.log(somma);

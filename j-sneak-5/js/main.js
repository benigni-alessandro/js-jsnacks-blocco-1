var numeri = [];
for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  if (!isNaN(numero) && numero%2) {
  var num = numeri.push(numero);
  }
}
console.log(numeri);

var numeri = [];
for (var i = 0; i < 6; i++) {
  var numero = prompt("Inserisci un numero");
  if (numero%2) {
  var num = numeri.push(numero);
  }  
}
console.log(numeri);

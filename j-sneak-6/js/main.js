var numeri = [1, 2, 3, 4, 5];
var numero = prompt("dimmi un numero da 1 a 4")
for (var i = 0; i < numeri[numero]; i++) {
  var calcolo = Math.pow(numeri[i], 3);
  console.log(calcolo);
}

potenza = 1;
for (var i = 0; i < 9; i++) {
  if (potenza < 1000) {
    numero = 2;
    potenza = parseInt(potenza * numero);
    console.log(potenza);
  }
}

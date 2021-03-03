var nome = prompt("Inserisci il tuo nome");
console.log(nome);
var lista = ['alessandro', 'gianni', 'fred', 'ronaldo', 'omar'];

var soldatino = false;

for (var i = 0; i < lista.length; i++) {
  if (lista[i] === nome) {
    soldatino = true;
  }
}

if (soldatino) {
  console.log("Puoi partecipare alla festa del grande Gatsby");
} else {
  console.log("Non puoi partecipare alla festa");
}

var primo = parseInt(prompt("Inserisci il primo numero"));
var secondo = parseInt(prompt("Inserisci il secondo numero"));

if (primo != secondo) {
  if (primo > secondo) {
    document.getElementById('maggiore').innerHTML = primo;
  } else {
    document.getElementById('maggiore').innerHTML = secondo;
  }
}

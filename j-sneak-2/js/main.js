var prima = prompt("Inserisci la prima parola").trim();
var seconda = prompt("Inserisci la seconda parola").trim();
var primaLen = prima.length;
var secondaLen = seconda.length;

if (prima != seconda) {
  if (primaLen > secondaLen) {
    document.getElementById('length1').innerHTML = seconda;
    document.getElementById('length2').innerHTML = prima;
  } else {
    document.getElementById('length1').innerHTML = prima;
    document.getElementById('length2').innerHTML = seconda;
  }
}

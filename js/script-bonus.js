var kmNumber = parseInt(prompt('Quanti km dovrai percorrere?'));
var age = parseInt(prompt('Quanti anni hai?'));
var ticket = document.getElementById('ticket');
var ticketPrice = parseFloat(0.21 * kmNumber).toFixed(2);

ticket.innerHTML += 'Il costo del tuo biglietto è di: <strong>€' + ticketPrice + '</strong>';

if (isNaN(kmNumber)) {
  alert('Il valore di km che hai inserito non è valido!');
  location.reload();
} else if (isNaN(age)) {
  alert('Il valore di età che hai inserito non è valido!');
  location.reload();
} else {
  if (age < 18) {
    ticket.innerHTML += '\nA cui va applicato lo sconto di: <strong>€' + parseFloat(0.2 * ticketPrice).toFixed(2) + '</strong>\nIl totale che verrà addebitato è di: <strong>€' + parseFloat(ticketPrice - (0.2 * ticketPrice)).toFixed(2) + '</strong>';
  } else if (age > 65) {
    ticket.innerHTML += '\nA cui va applicato lo sconto di: <strong>€' + parseFloat(0.4 * ticketPrice).toFixed(2) + '</strong>\nIl totale che verrà addebitato è di: <strong>€' + parseFloat(ticketPrice - (0.4 * ticketPrice)).toFixed(2) + '</strong>';
  }
}

function extra () {
  var min;
  min = 1;
  var max;
  max = 6;
  var diceResult;
  diceResult = Math.floor(Math.random() * (max + 1 - min) + min);
  document.getElementById('train').innerHTML += '<div>Complimenti! Ti sei aggiudicato uno sconto bonus di <span style="font-weight: bold; color: green;">€' + parseFloat((ticketPrice / 100) * diceResult * 1.1).toFixed(2) + '</span></div>';
  document.getElementById('extra-discount').disabled = 'true';
}

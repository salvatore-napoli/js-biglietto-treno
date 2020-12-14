var kmNumber = prompt('Quanti km dovrai percorrere?');
var age = prompt('Quanti anni hai?');
var ticket = document.getElementById('ticket');
var ticketPrice = 0.21 * kmNumber;

ticket.innerHTML = 'Il costo del tuo biglietto è di: <strong>€' + ticketPrice + '</strong>';

if (age < 18) {
  ticket.innerHTML += '\nA cui va applicato lo sconto di: <strong>€' + 0.2 * ticketPrice + '</strong>';
} else if (age > 65) {
  ticket.innerHTML += '\nA cui va applicato lo sconto di: <strong>€' + 0.4 * ticketPrice + '</strong>';
}

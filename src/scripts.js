$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#showTemp').text(thermostat.currentTemp);
  $('#PMS').text(thermostat.PMS);
});

$('#up').click(function() {
  thermostat.up();
  $('#showTemp').text(thermostat.currentTemp);
});

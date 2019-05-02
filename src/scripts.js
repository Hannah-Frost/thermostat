$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#showTemp').text(thermostat.currentTemp);
});

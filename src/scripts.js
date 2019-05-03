$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#showTemp').text(thermostat.currentTemp);
  $('#PMS').text(thermostat.PMS);
  $('#energyUsage').text(thermostat.energy)

  $('#up').click(function() {
    thermostat.up();
    $('#showTemp').text(thermostat.currentTemp);
    $('#energyUsage').text(thermostat.energy);
  });

  $('#down').click(function() {
    thermostat.down();
    $('#showTemp').text(thermostat.currentTemp);
    $('#energyUsage').text(thermostat.energy)
  });

  $('#reset').click(function() {
    thermostat.reset();
    $('#showTemp').text(thermostat.currentTemp);
    $('#energyUsage').text(thermostat.energy)
  });

  $('#powerSavingOn').click(function() {
    thermostat.powerSavingOn();
    $('#PMS').text(thermostat.PMS);
  });

  $('#powerSavingOff').click(function() {
    thermostat.powerSavingOff();
    $('#PMS').text(thermostat.PMS);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#weatherTemp').text(data.main.temp);
  });

  $('#location').change(function() {
    var city = $('#location').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#weatherTemp').text(data.main.temp);
    });
  });
});

function Thermostat() {
  this.currentTemp = 20;
};

Thermostat.prototype.temp = function() {
  return this.currentTemp
};

Thermostat.prototype.up = function() {
  this.currentTemp = this.currentTemp + 3;
};

Thermostat.prototype.down = function() {
  this.currentTemp = this.currentTemp - 3
};

Thermostat.prototype.reset = function() {
  this.currentTemp = 20
};

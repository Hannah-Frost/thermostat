function Thermostat() {
  this.currentTemp = 20;
};

Thermostat.prototype.temp = function() {
  return this.currentTemp;
};

Thermostat.prototype.up = function(num) {
  this.currentTemp = this.currentTemp + num;
};

Thermostat.prototype.down = function(num) {
  this.currentTemp = this.currentTemp - num;
};

Thermostat.prototype.reset = function() {
  this.currentTemp = 20;
};

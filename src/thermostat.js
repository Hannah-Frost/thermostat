function Thermostat() {
  this.currentTemp = 20;
};

Thermostat.prototype.temp = function() {
  return this.currentTemp;
};

Thermostat.prototype.up = function(num) {
  this.currentTemp = this.currentTemp + num;
  return "The temperature is now " + this.currentTemp + " degrees."
};

Thermostat.prototype.down = function(num) {
  if (this.currentTemp - num < 10) {
    return "The temperature can not be below 10."
  } else {
  this.currentTemp = this.currentTemp - num;
  return "The temperature is now " + this.currentTemp + " degrees."
  }
};

Thermostat.prototype.reset = function() {
  this.currentTemp = 20
};

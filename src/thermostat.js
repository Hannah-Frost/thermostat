function Thermostat() {
  this.currentTemp = 20;
  this.powerSaving = true;
};

Thermostat.prototype.temp = function() {
  return this.currentTemp;
};

Thermostat.prototype.powerSavingStatus = function() {
  return this.powerSaving;
}

Thermostat.prototype.up = function(num) {
  this.currentTemp += num;
  return "The temperature is now " + this.currentTemp + " degrees."
};

Thermostat.prototype.down = function(num) {
  if (this.currentTemp - num < 10) {
    return "The temperature can not be below 10."
  } else {
  this.currentTemp -= num;
  return "The temperature is now " + this.currentTemp + " degrees."
  }
};

Thermostat.prototype.reset = function() {
  this.currentTemp = 20
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
};

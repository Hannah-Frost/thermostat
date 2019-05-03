function Thermostat() {
  this.defaultTemp = 20;
  this.currentTemp = this.defaultTemp;
  this.powerSaving = true;
  this.PMS = "ON";
  this.energy = "MEDIUM-USAGE"
};

Thermostat.prototype.showTemp = function() {
  return this.currentTemp;
};

Thermostat.prototype.powerSavingStatus = function() {
  return this.powerSaving;
}

Thermostat.prototype.up = function() {
  var maximum
  this.powerSaving === true ? maximum = 25 : maximum = 32
  if (this.currentTemp + 1 > maximum) {
    throw new Error("The temperature can not be above " + maximum + ".")
  } else {
  this.currentTemp += 1;
  this.energyUsage();
  return "The temperature is now " + this.currentTemp + " degrees."
  }
};

Thermostat.prototype.down = function() {
  if (this.currentTemp - 1 < 10) {
    throw new Error("The temperature can not go below 10.")
  } else {
  this.currentTemp -= 1;
  this.energyUsage();
  return "The temperature is now " + this.currentTemp + " degrees."
  }
};

Thermostat.prototype.reset = function() {
  this.currentTemp = this.defaultTemp
  this.energyUsage();
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
  this.PMS = "ON";
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
  this.PMS = "OFF";
};

Thermostat.prototype.energyUsage = function() {
  if (this.currentTemp < 18) {
    this.energy = "LOW-USAGE"
  } else if (this.currentTemp < 25) {
    this.energy = "MEDIUM-USAGE"
  } else {
    this.energy = "HIGH-USAGE"
  }
};

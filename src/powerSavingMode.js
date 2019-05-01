function PowerSavingMode() {
  this.currentStatus = true;
}

PowerSavingMode.prototype.status = function() {
  return this.currentStatus;
};

PowerSavingMode.prototype.turnOn = function() {
  this.currentStatus = true;
};

PowerSavingMode.prototype.turnOff = function() {
  this.currentStatus = false;
};

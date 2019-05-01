function PowerSavingMode() {
  this.currentStatus = true;
}

PowerSavingMode.prototype.status = function() {
  return this.currentStatus;
};

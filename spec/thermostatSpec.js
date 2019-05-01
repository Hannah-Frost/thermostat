describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at a temperature of 20 degrees", function() {
    expect(thermostat.showTemp()).toEqual(20)
  });

  it("can increase the temperature", function() {
    thermostat.up();
    expect(thermostat.showTemp()).toEqual(21)
  });

  it("can decrease the temperature", function() {
    thermostat.down();
    expect(thermostat.showTemp()).toEqual(19)
  });

  it("can be reset to its default temperature", function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.showTemp()).toEqual(20)
  });

  it("power saving mode has a default setting of true", function() {
    expect(thermostat.powerSavingStatus()).toEqual(true);
  });

  it("power saving mode can be turned off", function() {
    thermostat.powerSavingOff();
    expect(thermostat.powerSavingStatus()).toEqual(false);
  });

  it("power saving mode can be turned on", function() {
    thermostat.powerSavingOff();
    thermostat.powerSavingOn();
    expect(thermostat.powerSavingStatus()).toEqual(true);
  });

  it("shows its energy usage as high", function() {
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toEqual('HIGH-USAGE')
  });

  it("shows its energy usage as medium", function() {
    expect(thermostat.energyUsage()).toEqual('MEDIUM-USAGE')
  });

  it("shows its energy usage as low", function() {
    for (var i = 0; i < 6; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toEqual('LOW-USAGE')
  });

  it("throws an error if user tries to go above maximum degree when power is on", function() {
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(function(){ thermostat.up();}).toThrowError('The temperature can not be above 25.');
  });

  it("throws an error if user tries to go above maximum degree when power is off", function() {
    thermostat.powerSavingOff();
    for (var i = 0; i < 12; i++) {
      thermostat.up();
    }
    expect(function(){ thermostat.up();}).toThrowError('The temperature can not be above 32.');
  });

  it("throws an error if user tries to go below 10 degrees minimum", function() {
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function(){ thermostat.down();}).toThrowError('The temperature can not go below 10.');
  });
});

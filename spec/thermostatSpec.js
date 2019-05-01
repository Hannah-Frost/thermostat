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

  it("can decrease the temperature by 3", function() {
    thermostat.down();
    expect(thermostat.showTemp()).toEqual(19)
  });

  it("can not go above the 25 degrees maximum when power saving is on", function() {
    for (var i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.showTemp()).toEqual(25)
  });

  it("can not go above the 32 degrees maximum when power saving is off", function() {
    thermostat.powerSavingOff();
    for (var i = 0; i < 20; i++) {
      thermostat.up();
    }
    expect(thermostat.showTemp()).toEqual(32)
  });

  it("can not go below the 10 degrees minimum", function() {
    for (var i = 0; i < 20; i++) {
      thermostat.down();
    }
    expect(thermostat.showTemp()).toEqual(10)
  });

  it("can be reset to its default temperature", function() {
    for (var i = 0; i < 4; i++) {
      thermostat.up();
    }
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
    for (var i = 0; i < 6; i++) {
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
});

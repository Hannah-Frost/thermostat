describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at a temperature of 20 degrees", function() {
    expect(thermostat.showTemp()).toEqual(20)
  });

  it("can increase the temperature by 3", function() {
    thermostat.up(3);
    expect(thermostat.showTemp()).toEqual(23)
  });

  it("can decrease the temperature by 3", function() {
    thermostat.down(3);
    expect(thermostat.showTemp()).toEqual(17)
  });

  it("can not go above the 25 degrees maximum when power saving is on", function() {
    thermostat.up(6);
    expect(thermostat.showTemp()).toEqual(20)
  });

  it("can not go above the 32 degrees maximum when power saving is off", function() {
    thermostat.up(13);
    expect(thermostat.showTemp()).toEqual(20)
  });

  it("can not go below the 10 degrees minimum", function() {
    thermostat.down(11);
    expect(thermostat.showTemp()).toEqual(20)
  });

  it("can be reset to its default temperature", function() {
    thermostat.up(3);
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
    thermostat.up(5);
    expect(thermostat.energyUsage()).toEqual('HIGH-USAGE')
  });

  it("shows its energy usage as medium", function() {
    expect(thermostat.energyUsage()).toEqual('MEDIUM-USAGE')
  });

  it("shows its energy usage as low", function() {
    thermostat.down(5);
    expect(thermostat.energyUsage()).toEqual('LOW-USAGE')
  });
});

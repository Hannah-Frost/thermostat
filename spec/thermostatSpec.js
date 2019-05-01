describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at a temperature of 20 degrees", function() {
    expect(thermostat.temp()).toEqual(20)
  });

  it("can increase the temperature by 3", function() {
    thermostat.up(3);
    expect(thermostat.temp()).toEqual(23)
  });

  it("can decrease the temperature by 3", function() {
    thermostat.down(3);
    expect(thermostat.temp()).toEqual(17)
  });

  it("can not go below the 10 degrees minimum", function () {
    thermostat.down(11);
    expect(thermostat.temp()).toEqual(20)
  });

  it("can be reset to its default temperature", function() {
    thermostat.up(3);
    thermostat.reset();
    expect(thermostat.temp()).toEqual(20)
  });
});

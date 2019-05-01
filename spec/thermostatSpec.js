describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at a temperature of 20 degrees", function() {
    expect(thermostat.temp()).toEqual(20)
  });

  it("can increase the temperature by 10", function() {
    thermostat.up();
    expect(thermostat.temp()).toEqual(30)
  });
});

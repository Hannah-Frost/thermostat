describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at a temperature of 20 degrees", function() {
    expect(thermostat.temp()).toEqual(20)
  });
});

describe('PowerSavingMode', function() {
  var powerSavingMode;

  beforeEach(function () {
    powerSavingMode = new PowerSavingMode();
  });

  it("has a default setting of on/true", function() {
    expect(powerSavingMode.status).toBeTruthy();
  });
});

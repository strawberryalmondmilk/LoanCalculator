it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 75000,
    years: 10,
    rate: 6
  }
  expect(calculateMonthlyPayment(values)).toEqual("832.65");
  values = {
    amount: 0,
    years: 0,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual("NaN");
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc

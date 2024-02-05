import { IOhmValueCalculator } from "./IOhmValueCalculator";

describe("IOhmValueCalculator", () => {
  it("shoud calculate correctly", () => {
    let calculator = new IOhmValueCalculator(
      "black",
      "black",
      "black",
      "black"
    );
    expect(calculator.calculateOhmValue()).toEqual(0);

    calculator = new IOhmValueCalculator("brown", "black", "black", "black");
    expect(calculator.calculateOhmValue()).toEqual(10);

    calculator = new IOhmValueCalculator("brown", "yellow", "red", "black");
    expect(calculator.calculateOhmValue()).toEqual(1400);
  });
});

const valuePerColor: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
  gold: -1,
  silver: -2,
  pink: -3,
};

export class IOhmValueCalculator {
  bandAColor: string;
  bandBColor: string;
  bandCColor: string;
  bandDColor: string;
  calculateOhmValue() {
    return (
      (valuePerColor[this.bandAColor] * 10 + valuePerColor[this.bandBColor]) *
      Math.pow(10, valuePerColor[this.bandCColor])
    );
  }

  constructor(
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string
  ) {
    this.bandAColor = bandAColor;
    this.bandBColor = bandBColor;
    this.bandCColor = bandCColor;
    this.bandDColor = bandDColor;
  }
}

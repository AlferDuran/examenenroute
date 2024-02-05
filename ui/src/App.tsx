import ColorPicker from "@/components/ColorPicker/ColorPicker";

import styles from "./App.module.css";
import { useEffect, useMemo, useState } from "react";
import { IOhmValueCalculator } from "./models/IOhmValueCalculator";

interface ApiDataColors {
id:number;
color:string
}

const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export default function App() {
  const [bandAColor, setBandAColor] = useState("black");
  const [bandBColor, setBandBColor] = useState("black");
  const [bandCColor, setBandCColor] = useState("black");
  const [bandDColor, setBandDColor] = useState("black");
  const [multiplierColors, setMultiplierColors] = useState();
  const [toleranceColors, setToleranceColors] = useState();


  const result = useMemo(() => {
    const calculator = new IOhmValueCalculator(
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor
    );
    return calculator.calculateOhmValue();
  }, [bandAColor, bandBColor, bandCColor, bandDColor]);

  useEffect(() => {
    fetch("http://localhost:3001/multiplier")
      .then((response) => response.json())
      .then((colors) => setMultiplierColors(colors.map((data:ApiDataColors)=>data.color)));

      fetch("http://localhost:3001/tolerance")
      .then((response) => response.json())
      .then((colors) => setToleranceColors(colors.map((data:ApiDataColors)=>data.color)));
      
  }, []);
  
  return (
    <main className={styles.main}>
     
      <h1 data-testid="title">Examen Enroute </h1>
      <p>Alfer Duran</p>
      {multiplierColors &&  toleranceColors?       <div className={styles.calculator}>
        <ColorPicker
          label="Band A"
          colors={colors}
          chosenColor={bandAColor}
          onChange={setBandAColor}
        />
        <ColorPicker
          label="Band B"
          colors={colors}
          chosenColor={bandBColor}
          onChange={setBandBColor}
        />
        <ColorPicker
          label="Multiplier"
          colors={colors}
          chosenColor={bandCColor}
          onChange={setBandCColor}
        />
        <ColorPicker
          label="Tolerance"
          colors={colors}
          chosenColor={bandDColor}
          onChange={setBandDColor}
        />
      </div> : <h2>Loading...</h2>}


      <h4 data-testid="title">Result: {result} &#8486; </h4>
    </main>
  );
}

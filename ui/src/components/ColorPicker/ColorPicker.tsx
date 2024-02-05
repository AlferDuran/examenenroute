import styles from "./ColorPicker.module.css";

interface ColorPickerProps {
  colors: string[];
  chosenColor: string;
  onChange: (color: string) => void;
  label: string
}

export default function ColorPicker(props: ColorPickerProps) {
  return (
    <div className={styles.root}>
      <label><b>{props.label}</b></label>
      <select
        style={{ backgroundColor: props.chosenColor }}
        value={props.chosenColor}
        onChange={e => props.onChange(e.target.value)}
      >
        {props.colors.map(color => (
          <option
            style={{ backgroundColor: color}}
            onClick={() => props.onChange(color)}
          >
            <div className={styles.colorContainer}> {color}</div>
          </option>
        ))}
      </select>
    </div>
  );
}

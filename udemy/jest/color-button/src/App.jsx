import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const btnClick = () => {
    setButtonColor(newButtonColor);
  };

  const checkboxClick = (e) => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={btnClick}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label>
        <input
          type="checkbox"
          defaultChecked={disabled}
          onChange={checkboxClick}
        />
        Disable button
      </label>
    </div>
  );
}

export default App;

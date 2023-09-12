// import the script
import { useState } from 'react';

const randomColor = require('randomcolor');

const color = randomColor({
  luminosity: 'random',
  hue: 'random',
});

export default function App() {
  const initialColor = color;
  const [colorIcon, setColorIcon] = useState(initialColor);
  const [inputText, setinputText] = useState('');

  return (
    <>
      <h1>Random-color-generator</h1>
      <div
        style={{
          fontSize: '100px',
        }}
      >
        <output
          style={{
            backgroundColor: colorIcon,
          }}
        >
          {' '}
          {colorIcon}
        </output>
      </div>
      <br />
      <br />
      <input />
      <br />
      <br />
      <button
        onClick={() => {
          const newColor = randomColor({
            luminosity: 'random',
            hue: 'random',
          });
          setColorIcon(newColor);
        }}
      >
        Generate Random
      </button>
    </>
  );
}

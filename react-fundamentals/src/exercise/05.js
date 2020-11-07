// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
function Box({ className = '', style, size, ...restProps }) {
  const sizeClassName = size ? `box--${size}` : '';

  return (
    <div
      style={{ fontStyle: 'italic', ...style }}
      className={`box ${className} ${sizeClassName}`}
      {...restProps}
    />
  );
}

const smallBox = (
  <Box
    size='small'
    style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}
  >
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box
    size='medium'
    style={{ fontStyle: 'italic', backgroundColor: 'pink' }}
  >
    medium lightblue box
  </Box>
);
const largeBox = (
  <Box
    size='large'
    style={{ fontStyle: 'italic', backgroundColor: 'orange' }}
  >
    large lightblue box
  </Box>
);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App

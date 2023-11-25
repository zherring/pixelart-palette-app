import React, { useState, useRef } from 'react';
import axios from 'axios';
 

const Home = () => {
  const [colors, setColors] = useState([]);
  const [paletteList, setPaletteList] = useState([]);
  const [indexStart, setIndexStart] = useState(0);

  // dynamic index set
  const handleIndexChange = (event) => {
    setIndexStart(Number(event.target.value));
  };

  // copy button
  const jsonRef = useRef(null);
  const copyToClipboard = () => {
    const text = jsonRef.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      // Notify the user that the text has been copied
      console.log('Copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text:', err);
    });
  };

  const fetchPalette = () => {
    const data = {
      model: "default",
      // input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
    };

  
    axios.post('/api/colormind', data)
      .then(response => {
        setColors(response.data.result);
      })
      .catch(error => {
        console.error('Error fetching color palette:', error);
      });
  };
  

  const transferColors = () => {
    setPaletteList([...paletteList, { theme: "null", palette: colors }]);
  };

  return (
    <div>
      <button onClick={fetchPalette}>Generate</button>
      <div className='flex flex-row'>
        {colors.map((color, index) => (
          <div key={index} style={{ backgroundColor: `rgb(${color.join(',')})`, height: '50px', width: '50px' }} />
        ))}
      </div>
      <button onClick={transferColors}>Save Palette</button>
      <div>
        <div>
          <input
            type="number" 
            value={indexStart} 
            onChange={handleIndexChange} 
            placeholder="Enter a number"
          >
          </input>
        </div>

        <h3>JSON Output</h3>
        <button onClick={copyToClipboard}>Copy JSON</button>
      <pre style={codeBlockStyles}>
        <code>
          <div ref={jsonRef}>
            {paletteList.map((item, index) => (
              <div key={index}>
              {`${index + indexStart}: { theme: ${item.theme ? `'${item.theme}'` : null}, palette: [${item.palette.map(rgb => `'#${rgb.map(v => v.toString(16).padStart(2, '0')).join('')}'`).join(', ')}] },`}
            </div>
            ))}
          </div>
        </code>
      </pre>

      </div>
    </div>
  );
};

export default Home;

// Optional: Styles for the code block
const codeBlockStyles = {
  backgroundColor: "#1f1f1f", // Light gray background
  color: "#FFF",
  border: "1px solid #ddd",    // Light border for contrast
  padding: "10px",             // Some padding for spacing
  overflowX: "auto",           // Handle horizontal overflow
  whiteSpace: "pre-wrap",      // Wrapping for long lines
  wordBreak: "break-all"       // Break lines to prevent horizontal scrolling
};
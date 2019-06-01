import React, { useState } from 'react';
import { saveAs } from 'file-saver';

import { addZero } from './helperFunctions/formatFromLocaleDateString';

function App() {
  const date = addZero(new Date().toLocaleDateString().replace(/\//g, '-'));

  console.log(date);
  const [txtFile, setTxtFile] = useState('Hello, world!\n\t• What now');
  const downloadFile = () => {
    const blob = new Blob([txtFile], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, 'hello.txt');
    setTxtFile(txtFile + txtFile);
  };

  return (
    <div className="App">
      <input type="date" defaultValue={date} />
      <h1>Hello Generator</h1>
      <button onClick={downloadFile}>Generate File</button>
    </div>
  );
}

export default App;

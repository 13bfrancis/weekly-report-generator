import React from 'react';
import { saveAs } from 'file-saver';

function App() {
  const downloadFile = () => {
    const blob = new Blob(['Hello, world!\n\t• What now'], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, 'hello.txt');
  };

  return (
    <div className="App">
      <h1>Hello Generator</h1>
      <button onClick={downloadFile}>Generate File</button>
    </div>
  );
}

export default App;

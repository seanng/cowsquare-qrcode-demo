import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('')

  useEffect(() => {
    setInput('')
  }, [qrCode])

  return (
    <div className="App">
      <header className="App-header">
        <QRCode value={qrCode} />
        <p>
          Current QR Code Value: {qrCode}
          <br />
          <br />
          <input 
            type="text" 
            value={input} 
            onChange={e => setInput(e.target.value)}
          />
        </p>
        <button onClick={() => setQrCode(input)}>
          SAVE
        </button>
      </header>
    </div>
  );
}

export default App;

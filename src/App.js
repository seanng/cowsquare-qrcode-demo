import React, { useState, useEffect } from 'react';
import domtoimage from 'dom-to-image';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [hasImgLoaded, setHasImgLoaded] = useState(false)

  const onImgLoad = () => setHasImgLoaded(true)

  useEffect(() => {
    setInput('')
  }, [qrCode])

  useEffect(() => {
    if (hasImgLoaded) {
      const transformDomToImage = async (domContainer, imgContainer) => {
        const dataUrl = await domtoimage.toJpeg(domContainer)
        const img = new Image()
        img.src = dataUrl
        imgContainer.appendChild(img)
      }
      const domContainer = document.getElementById('dom-container')
      const imgContainer = document.getElementById('image-container') 
      transformDomToImage(domContainer, imgContainer)
    }
  }, [hasImgLoaded])

  return (
    <div className="App">
      <div className="App-header">
        <section>
          <p>
            DOM element
          </p>
          <div id="dom-container">
            <div>
              <img
                onLoad={onImgLoad}
                src='https://cdn.images.express.co.uk/img/dynamic/20/590x/Bronn-Night-King-Game-of-Throne-1116816.jpg?r=1555775216958' 
                className="dom-image"
              />
            </div>
            <QRCode value={qrCode} />
          </div>
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
        </section>
        <section>
          <p>
            Image
          </p>
          <div id="image-container" />
        </section>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import '../assets/css/app.css'
import SignatureCanvas from 'react-signature-canvas'
import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';


const Sign = () => {


  const [sign, setsign] = useState();
  const [result, setResult] = useState(null)
  const [penColor, setPenColor] = useState('black')


  const clearHandler = () => {
    sign.clear()
    setResult(null)
  }

  const saveHandler = () => {
    const data = sign.getTrimmedCanvas().toDataURL('image/jpeg')
    setResult(data)
  }

  return (
    <>
      <div class="parent">
        <div class="class"><SignatureCanvas
          penColor={penColor}
          backgroundColor='white'
          ref={(ref) => setsign(ref)}
          canvasProps={{ className: 'sigCanvas sigpad' }}
        />
        </div>
        <div class="class c2">
          <h2> Digital  <Typewriter
              words={[' Signature...']}
              loop={0}
              cursor
              cursorStyle=" |"
              cursorColor='#13FF00'
              cursorBlinking={true}
              typeSpeed={500}
              deleteSpeed={30}
              delaySpeed={1000}
            /></h2>
          <h5>Digi Sign is a digital signature web app that enables users to securely sign documents online.
             It simplifies document signing processes for businesses and individuals by allowing electronic signatures on contracts, agreements, forms, and legal documents.
             From remote work collaborations to client onboarding and legal transactions, SignSecure ensures authenticity, compliance, and efficiency in document management.
          </h5>
          <h5>
          <Typewriter
              words={[' * Note : First click save then download the signature.']}
              loop={0}
              cursor
              cursorStyle=" |"
              cursorColor='#13FF00'
              cursorBlinking={true}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h5>
          
        </div>
      </div>

      <div>
        <div className='pp'>
          <div className='cc' style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: `${penColor} ` }}></div>
          <select className='cc cc2' value={penColor} onChange={(e) => setPenColor(e.target.value)} >
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <div className="btn">
          <button id='clr' onClick={clearHandler} >Clear</button>
          <button id='save' onClick={saveHandler}  >Save</button>
          <button id='dwnd'><a href={result} download={result}>Download</a></button>
        </div>
      </div>
    </>
  );
}

export default Sign

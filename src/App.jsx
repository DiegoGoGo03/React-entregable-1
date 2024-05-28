import { useState } from 'react'
import './App.css'
import ShowButton from './components/ShowButton'
import ShowPhrase from './components/ShowPhrase'
import randomArr from './services/randomArr';
import arr from './utils/phrases.json'
import imagesFrames from './utils/images.json'

function App() {
  const quote = randomArr(arr);
  const [randomPhrase, setRandomPhrase] = useState(quote);
  const photo = randomArr(imagesFrames);
  const [image, setImage] = useState(photo);

  const appStyle = {
    backgroundImage: `url(../fortuna-1/fondo${image}.jpg)`,
  }

  return (
    <div className="app" style={appStyle}>
      <h1 className="app__title">Galletas de la fortuna</h1>
      <ShowButton
        setRandomPhrase = {setRandomPhrase}
        setImage= {setImage}
      />
      <ShowPhrase
          randomPhrase={randomPhrase}
      />
    </div>
  )
}

export default App

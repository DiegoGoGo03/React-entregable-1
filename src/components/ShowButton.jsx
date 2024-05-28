import React from 'react';
import arr from '../utils/phrases.json'
import randomArr from '../services/randomArr';
import imagesFrames from '../utils/images.json';

const ShowButton = ({setRandomPhrase, setImage}) => {
  const handleClick = ()  => {
    const quote = randomArr(arr);
    setRandomPhrase(quote);
    
    const photo = randomArr(imagesFrames);
    setImage(photo);
  }

  return (
    <button onClick={handleClick} className="app__btn">Abrir Galleta de la fortuna 🥠</button>
  )
}

export default ShowButton;
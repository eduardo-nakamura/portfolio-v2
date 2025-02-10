/* eslint-disable no-undef */
import { useState, useRef, useEffect } from 'react';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import soundFile from './assets/Audio/dieThrow1.ogg'; // Import the sound file

import d1 from './assets/svg/dice-six-faces-one.svg';
import d2 from './assets/svg/dice-six-faces-two.svg';
import d3 from './assets/svg/dice-six-faces-three.svg';
import d4 from './assets/svg/dice-six-faces-four.svg';
import d5 from './assets/svg/dice-six-faces-five.svg';
import d6 from './assets/svg/dice-six-faces-six.svg';
import './css/reset.css'
import './css/var.css'
import './App.css'
import Header from './Components/Header'
function App() {  
  const audioRef = useRef(new Audio(soundFile)); // Create audio element using useRef
  const diceImages = [d1, d2, d3, d4, d5, d6]; // Array of your image imports
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Play sound when count changes (after the component re-renders)
    audioRef.current.pause(); // Pause the audio
    audioRef.current.currentTime = 0; 
    audioRef.current.play().catch(error => {
        // Handle potential errors (e.g., autoplay blocked by browser)
        console.error("Error playing sound:", error);
    });
  }, [count]); // The effect depends on the count state
  
  function changeStyle(){
    let novoNumero;
    do {
      novoNumero = Math.floor(Math.random() * 6); // Gera um número entre 0 e 5
    } while (novoNumero === count); // Evita repetição do número anterior
    setCount(novoNumero);

  }
  return (
    <div className={' fonts__'+count}>
      <Header />
      <div className="font__card">
        <h1>My Awesome Portfolio</h1>
        <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        <button onClick={() => changeStyle()}>
          {/* Change Font: <b>{count}</b> */}
          <img src={diceImages[count]} alt="Dice" />
        </button>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App


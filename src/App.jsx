import { useLayoutEffect, useState, useRef, useEffect } from 'react';
import soundFile from './assets/Audio/dieThrow1.ogg'; // Import the sound file
// import { BrowserRouter } from 'react-router-dom'

import './css/reset.css'
import './css/var.css'
import './App.css'
import Header from './Components/Header'
import Conteudo from './Components/Conteudo'
import Dice from './Components/Dice'
function App() {
  const audioRef = useRef(new Audio(soundFile)); // Create audio element using useRef
  const [count, setCount] = useState(0)
  const isInitialRender = useRef(true); // Ref to track initial render
  // const [classBtn, setClassBtn] = useState(false);
  useLayoutEffect(() => {
    isInitialRender.current = true; // Set ref before initial render
  }, []); // Empty dependency array ensures it runs only once
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    audioRef.current.pause(); 
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(error => {
      console.error("Error playing sound:", error);
    });

  }, [count]); // The effect depends on the count state

  function changeStyle() {
    // setClassBtn(true)
    let novoNumero;
    do {
      novoNumero = Math.floor(Math.random() * 6); // Gera um número entre 0 e 5
    } while (novoNumero === count); // Evita repetição do número anterior
    setCount(novoNumero);
    setTimeout(() => {
      // setClassBtn(false)
    }, 1000); // Tempo em milissegundos (3 segundos)
  }
  return (
    <div className={' fonts__' + count}>
      {/* <BrowserRouter> */}
        <Header />
        <Conteudo onChangeStyle={changeStyle} count={count} />
      {/* </BrowserRouter> */}
      <Dice onChangeStyle={changeStyle} count={count} />    
    </div>
  )
}

export default App


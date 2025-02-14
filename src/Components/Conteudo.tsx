import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import './Conteudo.css'
import Home from './Pages/Home';
import Curriculo from './Pages/Curriculo';

// export default class Conteudo extends Component {
//   render() {
//     return (
//       <div className="conteudo">
//         <Routes>
//             <Route path="/curriculo" element={<Curriculo />} />  
//             <Route path="/" element={<Home />} /> 
//         </Routes>
//       </div>
//     )
//   }
// }
export default function Conteudo({ onChangeStyle, count }) {

  return (
    <div className="conteudo">
      <Routes>
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/" element={<Home onChangeStyle={onChangeStyle} count={count} />} />
      </Routes>
    </div>
  )
}
import React from "react";
import "./style.css";

function Jogador({pontos, imagem, label}) {
    return (
      <div className="jogador">
              {label}
              <p>{pontos}</p>
              <img src={imagem} alt=""/>  
      </div>
    );
  }
  
  export default Jogador;
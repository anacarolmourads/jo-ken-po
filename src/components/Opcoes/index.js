import React from 'react';
import pedra from '../../assets/images/pedra.png';
import papel from '../../assets/images/papel.png';
import tesoura from '../../assets/images/tesoura.png';
import "./style.css";


        function Opcoes({setOpcao}) {
            return (
            <div className="opcoes">
                <img src={pedra} alt="pedra" onClick={() => setOpcao("pedra")}/> 
                <img src={papel} alt="papel" onClick={() => setOpcao("papel")}/>
                <img src={tesoura} alt="tesoura" onClick={() => setOpcao("tesoura")}/>
            </div>
            );
          }
          
          export default Opcoes;
import React, { useState, useEffect } from 'react';
import garota from '../../assets/images/garota.png';
import robot from '../../assets/images/robot.png';
import Header from '../Header';
import Jogador from '../Jogador';
import Opcoes from '../Opcoes';
import './style.css';

function Tabuleiro() {
  const [minhaOpcao, setOpcaoSelecionada] = useState('')
  const [escolhaRobo, setEscolhaRobo] = useState('')

  const [meusPontos, setMeusPontos] = useState(0)
  const [roboPontos, setRoboPontos] = useState(0)

  useEffect(() => {
    if (minhaOpcao){
      const opcoes = ['pedra', 'papel', 'tesoura']
      const numeroAleatorio = Math.floor(Math.random() * opcoes.length)
      const robo = opcoes[numeroAleatorio]
      setEscolhaRobo(robo)

      if(robo === minhaOpcao){
        alert("Empate")
      }else if (robo === 'papel' && minhaOpcao === 'pedra'){
      setRoboPontos(roboPontos + 1)
      }else if (robo === 'tesoura' && minhaOpcao === 'papel'){
        setRoboPontos(roboPontos + 1)
      }else if (robo === 'pedra' && minhaOpcao === 'tesoura'){
        setRoboPontos(roboPontos + 1)
      }else{
        setMeusPontos(meusPontos + 1)
      }
    }
  }, [minhaOpcao])

  return (
    
    <div className="tabuleiro">
        <Header /> 

        <Opcoes setOpcao = {setOpcaoSelecionada} />

        Minha escolha: {minhaOpcao} 
        
        Robô: {escolhaRobo}

        <div className="jogadores">
            <Jogador imagem={garota} label="Você: " pontos={meusPontos}/>
            <Jogador imagem={robot} label="Robô: " pontos={roboPontos}/>
        </div>

    </div>
  );
}

export default Tabuleiro;
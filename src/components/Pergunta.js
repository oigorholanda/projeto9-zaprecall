import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import certo from "../assets/img/icone_certo.png"
import erro from "../assets/img/icone_erro.png"
import quase from "../assets/img/icone_quase.png"

export default function Pergunta({ pergunta, resposta, indice, concluidos, setconcluidos }) {

    const [clicado, setclicado] = useState(0)
    const [respondida, setrespondida] = useState(false)
    const [cor, setcor] = useState('#333333')
    const [nome, setnome] = useState(seta)

    function abreCard() {
        if (respondida) {
            alert('Pergunta já respondida, caso deseje responder novamente clique no Logo e reinicie o Recall')
        } else {
            setclicado(clicado + 1)
        }
    }

    function fechaCard(cor, nome) {
        setclicado(0)
        setconcluidos(concluidos + 1)
        setcor(cor)
        setrespondida(true)
        setnome(nome)
    }


    switch (clicado) {
        case 0:
            return (
                <PerguntaFechada respondida={respondida} cor={cor}>
                    <p>Pergunta {indice}</p>
                    <img src={nome} alt="seta" onClick={() => abreCard()} />
                </PerguntaFechada>
            )

        case 1:
            return (
                <PerguntaAberta>
                    <p>{pergunta}</p>
                    <img src={virar} alt="virar" onClick={() => abreCard()} />
                </PerguntaAberta>
            )

        case 2:
            return (
                <PerguntaAberta>
                    <p>{resposta}</p>
                    <Botoes>
                        <button onClick={() => fechaCard('#FF3030', erro)} >Não lembrei</button>
                        <button onClick={() => fechaCard('#FF922E', quase)} >Quase lembrei</button>
                        <button onClick={() => fechaCard('#2FBE34', certo)} >Zap!</button>
                    </Botoes>
                </PerguntaAberta>
            )

        default:
            return (
                <p>OOps! Algo deu errado =/</p>
            )
    }
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 55px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.cor};
    text-decoration: ${props => props.respondida ? "line-through" : "none"};
    }
    img:hover{cursor: pointer;}
`

const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
  position: absolute;
  bottom: 15px;
  right: 20px;
  &:hover{cursor: pointer;}
  }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    button{
        width: 83px;
        height: 38px;
        border: transparent;
        border-radius: 5px;
        color: white;
        font-family: 'Recursive';
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;

        &:nth-child(1) { background-color: #FF3030; }
        &:nth-child(2) { background-color: #FF922E; }
        &:nth-child(3) { background-color: #2FBE34; }
        &:hover{ cursor: pointer; }
    }
`
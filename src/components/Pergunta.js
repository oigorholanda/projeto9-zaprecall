import { useState } from "react"
import styled from "styled-components"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"

export default function Pergunta({ pergunta, resposta, indice }) {
    const [clicado, setclicado] = useState(0)


    switch (clicado) {
        case 0:
            return (
                <>
                    <PerguntaFechada >
                        <p>Pergunta {indice}</p>
                        <img src={seta} alt="seta" />
                    </PerguntaFechada>
                </>
            )

        case 1:
            return (
                <>
                    <PerguntaAberta>
                        <p>{pergunta}</p>
                        <img src={virar} alt="virar"  />
                    </PerguntaAberta>
                </>
            )

        case 2:
            return (
                <PerguntaAberta>
                    <p>{resposta}</p>
                    <Botoes>
                        <button >Não lembrei</button>
                        <button >Quase lembrei</button>
                        <button >Zap!</button>
                    </Botoes>
                </PerguntaAberta>
            )

        default:
            return (
                <p>Algo deu errado</p>
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
    color: #333333;
    }
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
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;

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

        &:nth-child(1) {
            background-color: #FF3030;
        }
        &:nth-child(2) {
            background-color: #FF922E;
        }
        &:nth-child(3) {
            background-color: #2FBE34;
        }
        &:hover{
        cursor: pointer;
        }
    }

`
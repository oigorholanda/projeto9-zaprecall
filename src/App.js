import { useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Perguntas from './components/Perguntas';

export default function App() {
  const [concluidos, setconcluidos] = useState(0)

  return (
    <ScreenContainer>
        <Logo/>
        <Perguntas concluidos={concluidos} setconcluidos={setconcluidos}/>
        <Footer concluidos={concluidos}/>
    </ScreenContainer>       
  );
}


const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
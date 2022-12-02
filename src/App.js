import styled from 'styled-components'
import Logo from './components/Logo'
import Body from './components/Body'
import { useState } from 'react';
import logo from "./assets/img/logo.png"

export default function App() {
  const [inicio, setinicio] = useState(true)


  if (inicio) {
    return (
      <LoginScreen>
        <img src={logo} alt="" />
        <h1>ZapRecall</h1>
        <button onClick={() => setinicio(false)}>Iniciar Recall</button>
      </LoginScreen>
    )
  } else {
    return (
      <ScreenContainer>
        <Logo />
        <Body />
      </ScreenContainer>
    )
  }

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

const LoginScreen = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-bottom: 200px;
  h1 {
  font-family: 'Righteous', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 45px;
  color: #FFFFFF;
  } 
  button {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;  
  color: #D70900;
  width: 246px;
  height: 54px;
  padding: 10px;
  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  }
`
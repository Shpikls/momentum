import React from 'react'
import { Time } from './containers/Time'
import { Background } from './components/Background'
import { GlobalStyle } from './helpers/GlobalStyle'
import { Greeting } from './containers/Greeting'
import styled from 'styled-components'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Background>
        <CentreContainer>
          <Time />
          <Greeting />
        </CentreContainer>
      </Background>
    </>
  )
}

const CentreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  color: #FFFFFF;
`

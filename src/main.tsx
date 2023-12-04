import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from "styled-components";

import App from './App.tsx'

const StyledContainer = styled.div`
background-color: #FAFAFA;
height: 100%;
width: 100%;
`


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledContainer>
      <App />
    </StyledContainer>
  </React.StrictMode>,
)

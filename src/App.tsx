import { DatabaseProvider } from "./contexts/DatabaseContext"
import AppLayout from "./components/AppLayout"
import styled from "styled-components";
const StyledContainer = styled.div`
background-color: white;
height: 100%;
width: 100%;
`


function App() {

  return (
    <StyledContainer>
    <DatabaseProvider>
      <AppLayout />
    </DatabaseProvider>
    </StyledContainer>
  )
}

export default App

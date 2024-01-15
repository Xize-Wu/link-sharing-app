import { DatabaseProvider } from "./contexts/DatabaseContext"
import GlobalStyle from "./styles/GlobalStyles"
import AppLayout from "./components/AppLayout"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0px;
`
function App() {

  return (
    <DatabaseProvider>
      <GlobalStyle/>
      <AppLayout />
    </DatabaseProvider>
  )
}

export default App
